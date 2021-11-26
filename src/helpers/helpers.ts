import {MovieItemType} from "../types";
import { v4 as uuid4 } from 'uuid'

export function findByActor(actor: string, movies: MovieItemType[]): MovieItemType[]  {
  if(!actor) {
    return movies;
  }
  return movies.filter(movie => {
    return movie.actors.some(actorItem => actorItem.includes(actor));
  })
}

export function findByGenre(genre: string, movies: MovieItemType[]): MovieItemType[]  {
  if(!genre) {
    return movies;
  }
  return movies.filter(movie => {
    return movie.genres.some(genreItem => genreItem.includes(genre));
  })
}

export function removeById(id: string, movies: MovieItemType[]): MovieItemType[] {
  return movies.filter(movie => movie.id !== id)
}

export const testMovieDb = {
  watchedMovies: [
    {
      id: uuid4(),
      name: 'Savages',
      genres: ['Thriller', 'Action'],
      imdbRating: 7.6,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
      comment: 'Cool movie about narcotics',
      actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
    },
    {
      id: uuid4(),
      name: 'Inception',
      genres: ['Thriller, Action'],
      imdbRating: 7.6,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
      comment: 'Cool movie about dreams',
      actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
    },
    {
      id: uuid4(),
      name: 'Liar Liar',
      genres: ['Comedy'],
      imdbRating: 7.6,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
      comment: 'Cool movie about truth',
      actors: ['Jim Carrey', "Jennifer Tilly"]
    },
  ],
  moviesToWatch : [

  ]
}


