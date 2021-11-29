import {IAllMovies, MovieItemType, MovieStatus} from "../types";
import { v4 as uuid4 } from 'uuid'

export function hasActor(actor: string): (movie: MovieItemType) => boolean {
  return function (movie: MovieItemType): boolean {
    return movie.actors.map(actor => actor.toLowerCase()).some(actorItem => actorItem.includes(actor.toLowerCase()));
  }
}

export function hasGenre(genre: string): (movie: MovieItemType) => boolean {
  return function (movie: MovieItemType): boolean {
    return movie.genres.map(genre => genre.toLowerCase()).some(genreItem => genreItem.includes(genre.toLowerCase()));
  }
}

export function containsName(name: string): (movie: MovieItemType) => boolean {
  return function (movie: MovieItemType): boolean {
    return movie.name.toLowerCase().includes(name)
  }
}

export function removeMovieManagerHelper(allMovies: IAllMovies) {
  return function(movieStatus: MovieStatus) {
    return function (movieId: string): IAllMovies {
      if(movieStatus === 'watched') {
        return {
          futureMovies: allMovies.futureMovies,
          watchedMovies: allMovies.watchedMovies.filter(movie => movie.id !== movieId),
        }
      }
      return {
        futureMovies: allMovies.futureMovies.filter(movie => movie.id !== movieId),
        watchedMovies: allMovies.watchedMovies,
      }
    }
  }
}

export function movieStatusManagerHelper(allMovies: IAllMovies): (movieId: string, movieStatus: MovieStatus) => IAllMovies {
  return function changeMovieStatus(movieId: string, movieStatus: MovieStatus) {
      if (movieStatus === 'watched') {
        const movieEntity = allMovies.watchedMovies.find(item => item.id ===  movieId);
        if (!movieEntity) {
          return allMovies;
        }

        if (allMovies.futureMovies.some(futureMovie => futureMovie.name === movieEntity.name)) {
          return {
            futureMovies: allMovies.futureMovies,
            watchedMovies: allMovies.watchedMovies.filter(movie => movie.id !== movieId),
          }
        }
        return {
          futureMovies: [...allMovies.futureMovies, movieEntity],
          watchedMovies: allMovies.watchedMovies.filter(movie => movie.id !== movieId),
        }
      }

      // Case when movieStatus is future

      const movieEntity = allMovies.futureMovies.find(item => item.id ===  movieId);
      if (!movieEntity) {
        return allMovies;
      }

      if (allMovies.watchedMovies.some(watchedMovie => watchedMovie.name === movieEntity.name)) {
        return {
          futureMovies: allMovies.futureMovies.filter(movie => movie.id !== movieId),
          watchedMovies: allMovies.watchedMovies,
        }
      }
      return {
        futureMovies: allMovies.futureMovies.filter(movie => movie.id !== movieId),
        watchedMovies:  [...allMovies.watchedMovies, movieEntity]
      }
  }
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
  futureMovies : [

  ]
}


