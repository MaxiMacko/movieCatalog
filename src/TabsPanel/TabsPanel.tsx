import React, {useEffect, useState} from 'react'
import {MovieItemType, TabsPanelProps} from "../types";
import {TabList, Tabs, Tab, TabPanel} from "react-tabs";
import MovieList from "../MovieList/MovieList";
import styled from "styled-components";
import {findByActor, findByGenre, removeById, testMovieDb} from "../helpers/helpers";
import FiltersPanel from "../FiltersPanel/FiltersPanel";

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

const TabsPanel: React.FC<TabsPanelProps> = props => {
  const { selectedTab } = props;
  const [watchedMovies, setWatchedMovies] = useState<MovieItemType[]>(testMovieDb.watchedMovies)
  const [actorFilterValue, setActorFilterValue] = useState<string>('');
  const [genreFilterValue, setGenreFilterValue] = useState<string>('');

  useEffect(() => {
    setWatchedMovies(findByActor(actorFilterValue, testMovieDb.watchedMovies))
  }, [actorFilterValue])

  useEffect(() => {
    setWatchedMovies(findByGenre(genreFilterValue, testMovieDb.watchedMovies))
  }, [genreFilterValue])

  const deleteMovieHandler = (id: string): void => (
    setWatchedMovies(removeById(id ,watchedMovies))
  )

  return (
    <Tabs onSelect={index => props.selectTabCallback(index)}>
      <StyledTabList>
        <StyledTab selected={selectedTab === 0}>Movies already watched</StyledTab>
        <StyledTab selected={selectedTab === 1}>Movies to watch</StyledTab>
      </StyledTabList>

      <FiltersPanel
        actorFilterValue={actorFilterValue}
        genreFilterValue={genreFilterValue}
        actorFilterChangeHandler={setActorFilterValue}
        genreFilterChangeHandler={setGenreFilterValue}
      />

      <TabPanel>
        <MovieList
          movies={watchedMovies}
          deleteMovieHandler={deleteMovieHandler}
        />
      </TabPanel>
      <TabPanel>This panel is to be implemented</TabPanel>
    </Tabs>
  )
}

export default TabsPanel