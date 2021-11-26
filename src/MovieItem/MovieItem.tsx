import React from 'react';
import {MovieItemTypeProps} from "../types";
import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { IconContext } from 'react-icons';

const Root = styled.div`
  position: relative;
  border: 1px solid white;
  height: 300px;
  & + & {
    margin-top: 20px;
  }
  display: flex;
  color: white;
  padding: 1.5rem;
`

const PicAndRating = styled.div`
  width: 10rem;
`
const PicWrapper = styled.div`
  height: 250px;
`
const Image = styled.img`
  width: 10rem;
  height: 230px;
`

const Rating = styled.div`
  margin-top: 10px;
`

const GenresWrapper = styled.div`
  margin-top: 10px;
`

const StyledDeleteIcon = styled(MdDeleteOutline)`
  top: 5px;
  right: 10px;
  cursor: pointer;
`

const Comment = styled.div`
  width: 100%;
  margin-left: 10rem;
`
const MovieItem: React.FC<MovieItemTypeProps> = props => {
  const { movie, deleteHandler } = props;

  return (
    <Root>
      <PicAndRating>
        <PicWrapper>
          <Image src={movie.imageUrl} alt={'avatar'}/>
        </PicWrapper>
        <Rating>
          {`Imdb rating is ${movie.imdbRating}`}
        </Rating>
        <GenresWrapper>
          {movie.genres.join(',')}
        </GenresWrapper>
      </PicAndRating>
      <Comment>{movie.comment}</Comment>
      <IconContext.Provider value={{ size: "2em" }}>
        <StyledDeleteIcon onClick={() => deleteHandler(movie.id)}/>
      </IconContext.Provider>
    </Root>
  )

}

export default MovieItem