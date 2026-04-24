import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movieSlice";
import theatreReducer from "./slices/theatreSlice";
import foodReducer from "./slices/foodSlice"
import userReducer from "./slices/userSlice"
export const store = configureStore({
  reducer: {
    movies:moviesReducer,
    theatres:theatreReducer,
    foods:foodReducer,
    user:userReducer
  },
});
