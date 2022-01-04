import React, {useState} from 'react'
import {IAllMovies, MovieStatus, TabsPanelProps} from "../types";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import MovieList from "../MovieList/MovieList";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {
  containsName,
  hasActor, hasGenre,
  movieStatusManagerHelper,
  removeMovieManagerHelper,
  testMovieDb
} from "../helpers/helpers";
import FiltersPanel from "../FiltersPanel/FiltersPanel";
import MovieItem from "../MovieItem/MovieItem";

const StyledTabList = styled(TabList)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTab = styled(Tab)`
  width: 20rem;
  border: 1px solid white;
  border-radius: 5%;
  list-style-type: none;
  color: ${props => props.selected ? '#0c0d71' : 'white'};
  background-color: ${props => props.selected ? 'white' : '#0c0d71'};
  cursor: pointer;
  text-align: center;
  padding: 5px;
  & + & {
    margin-left: 2rem;
  }
`

const ButtonsPanel = styled.div`
  margin-top: 20px;
`

const AddButton = styled.button`
  height: 30px;
  cursor: pointer;
  color: white;
  background-color: #0c0d71;
  width: 10rem;
  border: 1px solid white;
  border-radius: 3px;
  margin-right: 1rem;
  &:hover {
    color: #0c0d71;
    background-color: white;
  }
`

const TabsPanel: React.FC<TabsPanelProps> = props => {
  const { selectedTab } = props;
  const [allMovies, setAllMovies] = useState<IAllMovies>(testMovieDb);
  const [actorFilterValue, setActorFilterValue] = useState<string>('');
  const [genreFilterValue, setGenreFilterValue] = useState<string>('');
  const [nameFilterValue, setNameFilterValue] = useState<string>('');

  const removeMovieManager = removeMovieManagerHelper(allMovies);
  const deleteWatchedMovieHandler = removeMovieManager('watched');
  const deleteFutureMovieHandler = removeMovieManager('future');
  const navigate = useNavigate();

  const movieStatusManager = movieStatusManagerHelper(testMovieDb);

  const addMovieButtonHandler = () => navigate("/add-movie")

  const changeMovieStatusHandler = (id: string, moviesStatus: MovieStatus) => {
      setAllMovies(movieStatusManager(id, moviesStatus))
  }

  return (
    <Tabs onSelect={index => props.selectTabCallback(index)}>
      <StyledTabList>
        <StyledTab selected={selectedTab === 0}>Movies already watched</StyledTab>
        <StyledTab selected={selectedTab === 1}>Movies to watch</StyledTab>
      </StyledTabList>
      <FiltersPanel
        actorFilterValue={actorFilterValue}
        genreFilterValue={genreFilterValue}
        nameFilterValue={nameFilterValue}
        nameFilterChangeHandler={setNameFilterValue}
        actorFilterChangeHandler={setActorFilterValue}
        genreFilterChangeHandler={setGenreFilterValue}
      />

      <ButtonsPanel>
        <AddButton onClick={addMovieButtonHandler}>Add Movie</AddButton>
      </ButtonsPanel>

      <TabPanel>
        <MovieList>
          {
            allMovies.watchedMovies
              .filter(hasActor(actorFilterValue))
              .filter(hasGenre(genreFilterValue))
              .filter(containsName(nameFilterValue))
              .map(movieItem => (
                <MovieItem
                  key={movieItem.id}
                  movie={movieItem}
                  deleteHandler={deleteWatchedMovieHandler}
                  changeMovieStatusHandler={changeMovieStatusHandler}
                  moviesStatus={'watched'}
                />
              ))
          }
        </MovieList>
      </TabPanel>
      <TabPanel>
        <MovieList>
          {
            allMovies.futureMovies
              .filter(hasActor(actorFilterValue))
              .filter(hasGenre(genreFilterValue))
              .filter(containsName(nameFilterValue))
              .map(movieItem => (
                <MovieItem
                  key={movieItem.id}
                  movie={movieItem}
                  deleteHandler={deleteFutureMovieHandler}
                  changeMovieStatusHandler={changeMovieStatusHandler}
                  moviesStatus={'future'}
                />
              ))
          }
        </MovieList>
      </TabPanel>
    </Tabs>
  )
}

export default TabsPanel