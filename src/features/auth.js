import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: '',
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
    // eslint-disable-next-line
      state.user = action.payload;
      // eslint-disable-next-line
      state.isAuthenticated = true;
      // eslint-disable-next-line
      state.sessionId = localStorage.getItem('session_id');

      localStorage.setItem('accounId', action.payload.id);
    },
  },
});

// action is created when the slice is created
export const { setUser } = authSlice.actions;

// To connect to the redux store
export default authSlice.reducer;

export const userSelector = (state) => state.user;
