import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import movieReducer from "../features/movie/movieSlice";
import seriesReducer from "../features/serie/seriesSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer,
    series: seriesReducer,
    user: userReducer,
  },
});
