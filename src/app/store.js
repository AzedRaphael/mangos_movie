import { configureStore } from '@reduxjs/toolkit';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import { tmdbApi } from '../services/TMTD';
import userReducer from '../features/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});

