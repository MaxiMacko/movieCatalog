import React from 'react';
import {FilterPanelProps} from "../types";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
`
const Filter = styled.div`
  display: flex;
  & + & {
    margin-left: 2rem;
  }
`
const FilterName = styled.div`
  color: white;
`
const FilterInput = styled.div`
  margin-left: 0.5rem;
`
const FiltersPanel: React.FC<FilterPanelProps> = props => {
  return (
    <Root>
      <Filter>
        <FilterName>Filter by actor: </FilterName>
        <FilterInput>
          <input  value={props.actorFilterValue} onChange={e => props.actorFilterChangeHandler(e.target.value)}/>
        </FilterInput>
      </Filter>
      <Filter>
        <FilterName>Filter by genre: </FilterName>
        <FilterInput>
          <input  value={props.genreFilterValue} onChange={e => props.genreFilterChangeHandler(e.target.value)}/>
        </FilterInput>
      </Filter>
      <Filter>
        <FilterName>Filter by name: </FilterName>
        <FilterInput>
          <input  value={props.nameFilterValue} onChange={e => props.nameFilterChangeHandler(e.target.value)}/>
        </FilterInput>
      </Filter>
    </Root>
  )
}

export default FiltersPanel