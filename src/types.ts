export interface MovieItemType {
  id: string,
  name: string,
  imdbRating: number,
  genres: string[],
  imageUrl: string,
  comment: string,
  actors: string[],
}

export interface IAllMovies {
  watchedMovies: MovieItemType[],
  futureMovies: MovieItemType[],
}

export type MovieStatus = 'watched' | 'future';

export interface MovieListProps {
  children: JSX.Element | JSX.Element[],
}

export interface MovieItemTypeProps {
  movie: MovieItemType,
  changeMovieStatusHandler: (id: string, movieStatus: MovieStatus) => void,
  deleteHandler: (id:string) => void,
  moviesStatus: MovieStatus
}

export interface TabsPanelProps {
  selectedTab: TabNames,
  selectTabCallback: (index: number) => void,
}

export interface FilterPanelProps {
  actorFilterValue: string,
  genreFilterValue: string,
  actorFilterChangeHandler: (e: string) => void,
  genreFilterChangeHandler: (e: string) => void,
}

export enum TabNames {
  WATCHED,
  FUTURE
}