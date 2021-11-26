export interface MovieItemType {
  id: string,
  name: string,
  imdbRating: number,
  genres: string[],
  imageUrl: string,
  comment: string,
  actors: string[],
}

export interface MovieListProps {
  movies: MovieItemType[],
  deleteMovieHandler: (id: string) => void
}

export interface MovieItemTypeProps {
  movie: MovieItemType,
  deleteHandler: (id:string) => void
}

export interface TabsPanelProps {
  selectedTab: number,
  selectTabCallback: (index: number) => void,
}

export interface FilterPanelProps {
  actorFilterValue: string,
  genreFilterValue: string,
  actorFilterChangeHandler: (e: string) => void,
  genreFilterChangeHandler: (e: string) => void,
}