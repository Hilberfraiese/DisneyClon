import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice"
import userSlice from '../features/user/userSlice';
import  useReducer  from "../features/user/userSlice"
import TheMovies from '../features/data/TheMovies';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    movies: TheMovies,
  },
});
