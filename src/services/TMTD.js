import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmtdApiKey = process.env.REACT_APP_API_KEY;
// const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmtdApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // GET genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmtdApiKey}`,
    }),
    //* Get movies by [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // Get movies by search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmtdApiKey}`;
        }
        // Get movies by category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmtdApiKey}`;
        }

        // Get movies by genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmtdApiKey}`;
        }

        // Get popular movies
        return `movie/popular?page=${page}&api_key=${tmtdApiKey}`;
      },
    }),
    // Get movie
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmtdApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieQuery,
} = tmdbApi;
