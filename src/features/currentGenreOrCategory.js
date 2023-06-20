import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      // eslint-disable-next-line
      state.genreIdOrCategoryName = action.payload;
      // eslint-disable-next-line
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      // eslint-disable-next-line
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;
