import React from 'react';
import { MovieListProps } from "../types";
import styled from "styled-components";

const Root = styled.div`
  margin-top: 30px;
`

const MovieList: React.FC<MovieListProps> = props =>  {
  return (
    <Root>
      {props.children}
    </Root>
  )
}

export default MovieList
