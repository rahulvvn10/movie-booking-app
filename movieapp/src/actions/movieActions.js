import axios from "axios";
import { getMoviesRequest,getMoviesFail,getMoviesSuccess, getMovieFail, getMovieSuccess, getMovieRequest } from "../slices/movieSlice";

export const fetchMovies = () => async (dispatch) => {
    dispatch(getMoviesRequest());
    try{
        const {data}=await axios.get('http://localhost:5007/api/movies');
        dispatch(getMoviesSuccess(data));
    }
    catch(err){
        dispatch(getMoviesFail(err.message));
    }
}

export const fetchMovieById = (id) => async (dispatch) => {
    dispatch(getMovieRequest());
    try{
        const {data}=await axios.get(`http://localhost:5007/api/movies/${id}`);
        dispatch(getMovieSuccess(data));
    }
    catch(err){
        dispatch(getMovieFail(err.message));
    }
}