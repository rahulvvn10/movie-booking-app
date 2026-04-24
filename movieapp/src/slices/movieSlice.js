import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        loading: false,
        movies: [],
        movie: {},
        error: null,
        nowShowing: []},
    reducers: {
        getMoviesRequest(state,action){
           return{
            ...state,
            loading:true
           }
        },
        getMoviesSuccess(state,action){
            return{
                loading:false,
                movies:action.payload}
            },
            getMoviesFail(state,action){
                return{
                    loading:false,
                    error:action.payload
                }
            },
            getMovieRequest(state,action){
           return{
            ...state,
            loading:true
           }
        },
        getMovieSuccess(state,action){
            return{
                ...state,
                loading:false,
                movie:action.payload}
            },
            getMovieFail(state,action){
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
            }
            
        }
});
export const {getMoviesRequest,getMoviesSuccess,getMoviesFail,getMovieFail,getMovieRequest,getMovieSuccess}=movieSlice.actions;
export default movieSlice.reducer;