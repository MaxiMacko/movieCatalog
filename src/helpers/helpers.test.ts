import {
  containsName,
  hasActor, hasGenre,
  movieStatusManagerHelper,
  removeMovieManagerHelper
} from './helpers'

export const testMovieDb = {
  watchedMovies: [
    {
      id: '1',
      name: 'Savages',
      genres: ['Thriller', 'Action'],
      imdbRating: 7.6,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
      comment: 'Cool movie about narcotics',
      actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
    },
    {
      id: '2',
      name: 'Inception',
      genres: ['Thriller, Action'],
      imdbRating: 7.6,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
      comment: 'Cool movie about dreams',
      actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
    },
    {
      id: '3',
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


describe('hasActor', () => {
  const testMovie = {
    id: '1',
    name: 'Savages',
    genres: ['Thriller', 'Action'],
    imdbRating: 7.6,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
    comment: 'Cool movie about narcotics',
    actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
  };
  test('Finds with upper case', () => {

    expect(hasActor('Josh')(testMovie)).toBe(true);
  });
  test('Finds with lower case', () => {
    expect(hasActor('Josh')(testMovie)).toBe(true);
  });
  test('returns false if movie does not contain actor filter value', () => {
    expect(hasActor('mike')(testMovie)).toBe(false)
  })
})
describe('hasGenre', () => {
  const testMovie = {
    id: '1',
    name: 'Savages',
    genres: ['Thriller', 'Action'],
    imdbRating: 7.6,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
    comment: 'Cool movie about narcotics',
    actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
  };
  test('checks with upper case', () => {
    expect(hasGenre('Thriller')(testMovie)).toBe(true);
  });
  test('checks with lower case', () => {
    expect(hasGenre('thriller')(testMovie)).toBe(true);
  });
  test('returns false if movie does not contain genre filter value', () => {
    expect(hasGenre('mike')(testMovie)).toBe(false)
  })
})
describe('containsName', () => {
  const testMovie = {
    id: '1',
    name: 'Savages',
    genres: ['Thriller', 'Action'],
    imdbRating: 7.6,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
    comment: 'Cool movie about narcotics',
    actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
  };
  test('checks with upper case', () => {
    expect(containsName('Sav')(testMovie)).toBe(true);
  });
  test('checks with lower case', () => {
    expect(containsName('sav')(testMovie)).toBe(true);
  });
  test('returns false if movie does not contain name filter value', () => {
    expect(hasGenre('mike')(testMovie)).toBe(false)
  })
})
describe('removeMovieManagerHelper', () => {
  const sourceCatalog = {
    watchedMovies: [
      {
        id: '1',
        name: 'Savages',
        genres: ['Thriller', 'Action'],
        imdbRating: 7.6,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
        comment: 'Cool movie about narcotics',
        actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
      },
      {
        id: '2',
        name: 'Inception',
        genres: ['Thriller, Action'],
        imdbRating: 7.6,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
        comment: 'Cool movie about dreams',
        actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
      },
      {
        id: '3',
        name: 'Liar Liar',
        genres: ['Comedy'],
        imdbRating: 7.6,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        comment: 'Cool movie about truth',
        actors: ['Jim Carrey', "Jennifer Tilly"]
      },
    ],
    futureMovies : [
      {
        id: '4',
        name: 'Liar Liar12',
        genres: ['Comedy'],
        imdbRating: 7.6,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        comment: 'Cool movie about truth',
        actors: ['Jim Carrey', "Jennifer Tilly"]
      },
      {
        id: '5',
        name: 'Liar Liar34',
        genres: ['Comedy'],
        imdbRating: 7.6,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        comment: 'Cool movie about truth',
        actors: ['Jim Carrey', "Jennifer Tilly"]
      },
    ]
  }
  test('removes watched by specified id', () => {
    const testResult = {
      watchedMovies: [
        {
          id: '1',
          name: 'Savages',
          genres: ['Thriller', 'Action'],
          imdbRating: 7.6,
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
          comment: 'Cool movie about narcotics',
          actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
        },
        {
          id: '3',
          name: 'Liar Liar',
          genres: ['Comedy'],
          imdbRating: 7.6,
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          comment: 'Cool movie about truth',
          actors: ['Jim Carrey', "Jennifer Tilly"]
        },
      ],
      futureMovies : [
        {
          id: '4',
          name: 'Liar Liar12',
          genres: ['Comedy'],
          imdbRating: 7.6,
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          comment: 'Cool movie about truth',
          actors: ['Jim Carrey', "Jennifer Tilly"]
        },
        {
          id: '5',
          name: 'Liar Liar34',
          genres: ['Comedy'],
          imdbRating: 7.6,
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          comment: 'Cool movie about truth',
          actors: ['Jim Carrey', "Jennifer Tilly"]
        },
      ]
    }
    expect(removeMovieManagerHelper(sourceCatalog)('watched')('2')).toMatchObject(testResult)
  })
  test('removes future by specified id', () => {
    const testResult = {
      watchedMovies: [
        {
          id: '1',
          name: 'Savages',
          genres: ['Thriller', 'Action'],
          imdbRating: 7.6,
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
          comment: 'Cool movie about narcotics',
          actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
        },
        {
          id: '2',
          name: 'Inception',
          genres: ['Thriller, Action'],
          imdbRating: 7.6,
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
          comment: 'Cool movie about dreams',
          actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
        },
        {
          id: '3',
          name: 'Liar Liar',
          genres: ['Comedy'],
          imdbRating: 7.6,
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          comment: 'Cool movie about truth',
          actors: ['Jim Carrey', "Jennifer Tilly"]
        },
      ],
      futureMovies : [
        {
          id: '5',
          name: 'Liar Liar34',
          genres: ['Comedy'],
          imdbRating: 7.6,
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          comment: 'Cool movie about truth',
          actors: ['Jim Carrey', "Jennifer Tilly"]
        },
      ]
    }
    expect(removeMovieManagerHelper(sourceCatalog)('future')('4')).toMatchObject(testResult)
  })
})
describe('movieStatusManager', () => {
  test('moves movie from watched to futureWatch group', () => {
    const testResult =
      {
        watchedMovies: [
          {
            id: '1',
            name: 'Savages',
            genres: ['Thriller', 'Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
            comment: 'Cool movie about narcotics',
            actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
          },
          {
            id: '2',
            name: 'Inception',
            genres: ['Thriller, Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
            comment: 'Cool movie about dreams',
            actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
          },
        ],
        futureMovies : [
          {
            id: '3',
            name: 'Liar Liar',
            genres: ['Comedy'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            comment: 'Cool movie about truth',
            actors: ['Jim Carrey', "Jennifer Tilly"]
          },
        ]
      }

      const movieId = '3';

    expect(movieStatusManagerHelper(testMovieDb)(movieId, 'watched')).toMatchObject(testResult)
  })
  test('moves movie from future to watched group', () => {
    const sourceCatalog = {
      watchedMovies: [
        {
          id: '1',
          name: 'Savages',
          genres: ['Thriller', 'Action'],
          imdbRating: 7.6,
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
          comment: 'Cool movie about narcotics',
          actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
        },
        {
          id: '2',
          name: 'Inception',
          genres: ['Thriller, Action'],
          imdbRating: 7.6,
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
          comment: 'Cool movie about dreams',
          actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
        },
      ],
      futureMovies : [
        {
          id: '3',
          name: 'Liar Liar',
          genres: ['Comedy'],
          imdbRating: 7.6,
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          comment: 'Cool movie about truth',
          actors: ['Jim Carrey', "Jennifer Tilly"]
        },
      ]
    }
    const testResult = {
        watchedMovies: [
          {
            id: '1',
            name: 'Savages',
            genres: ['Thriller', 'Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
            comment: 'Cool movie about narcotics',
            actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
          },
          {
            id: '2',
            name: 'Inception',
            genres: ['Thriller, Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
            comment: 'Cool movie about dreams',
            actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
          },
          {
            id: '3',
            name: 'Liar Liar',
            genres: ['Comedy'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIyMTAtMDY5ZTNjZTgwMDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            comment: 'Cool movie about truth',
            actors: ['Jim Carrey', "Jennifer Tilly"]
          },
        ],
        futureMovies : []
      }

    const movieId = '3';

    expect(movieStatusManagerHelper(sourceCatalog)(movieId, 'future')).toMatchObject(testResult)
  })
  test('removes movie from the watched group if future group has movie with the same name', () => {
    const sourceCatalog =
      {
        watchedMovies: [
          {
            id: '1',
            name: 'Savages',
            genres: ['Thriller', 'Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
            comment: 'Cool movie about narcotics',
            actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
          },
          {
            id: '2',
            name: 'Inception',
            genres: ['Thriller, Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
            comment: 'Cool movie about dreams',
            actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
          },
        ],
        futureMovies : [
          {
            id: '5',
            name: 'Inception',
            genres: ['Thriller, Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
            comment: 'Cool movie about dreams',
            actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
          },
        ]
      }

    const testResult =
      {
        watchedMovies: [
          {
            id: '1',
            name: 'Savages',
            genres: ['Thriller', 'Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
            comment: 'Cool movie about narcotics',
            actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
          },
        ],
        futureMovies : [
          {
            id: '5',
            name: 'Inception',
            genres: ['Thriller, Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
            comment: 'Cool movie about dreams',
            actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
          },
        ]
      }

    const movieId = '2';

    expect(movieStatusManagerHelper(sourceCatalog)(movieId, 'watched')).toMatchObject(testResult)
  })
  test('removes movie from the future group if watched group has movie with the same name', () => {
    const sourceCatalog =
      {
        watchedMovies: [
          {
            id: '1',
            name: 'Savages',
            genres: ['Thriller', 'Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
            comment: 'Cool movie about narcotics',
            actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
          },
          {
            id: '2',
            name: 'Inception',
            genres: ['Thriller, Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
            comment: 'Cool movie about dreams',
            actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
          },
        ],
        futureMovies : [
          {
            id: '5',
            name: 'Inception',
            genres: ['Thriller, Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
            comment: 'Cool movie about dreams',
            actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
          },
        ]
      }

    const testResult =
      {
        watchedMovies: [
          {
            id: '1',
            name: 'Savages',
            genres: ['Thriller', 'Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwZDhjZTEtZjY2Mi00NGEwLWIzOTAtNTJiOTZiNWEwYTlkXkEyXkFqcGdeQXVyNTQ0MDQyMTg@._V1_.jpg',
            comment: 'Cool movie about narcotics',
            actors: ['Benicio Del Toro', 'Josh Brolin', 'Emily Blunt']
          },
          {
            id: '2',
            name: 'Inception',
            genres: ['Thriller, Action'],
            imdbRating: 7.6,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
            comment: 'Cool movie about dreams',
            actors: ['Leonardo Di Caprio', 'Tom Hardy', 'Joseph Gordon-Levitt']
          },
        ],
        futureMovies : [

        ]
      }

    const movieId = '5';

    expect(movieStatusManagerHelper(sourceCatalog)(movieId, 'future')).toMatchObject(testResult)
  })
})

