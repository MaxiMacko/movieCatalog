import React from 'react';
import { MovieListProps } from "../types";
import MovieItem from "../MovieItem/MovieItem";
import styled from "styled-components";

const Root = styled.div`
  margin-top: 30px;
`

const MovieList: React.FC<MovieListProps> = props =>  {
  const { movies, deleteMovieHandler } = props;
  return (
    <Root>
      {
        movies.map(movieItem => (
          <MovieItem
            key={movieItem.id}
            movie={movieItem}
            deleteHandler={deleteMovieHandler}
          />
        ))
      }
    </Root>
  )
}

export default MovieList
