import { createSlice } from "@reduxjs/toolkit";
const theatreSlice = createSlice({
    name: "theatres",
    initialState: {
        loading: false,
        theatres:[],
    theatre:[]},
        reducers:{
            getTheatresRequest(state,action){
                return{
                    ...state,
                    loading:true
                }
            },
            getTheatresSuccess(state,action){
                return{
                    theatres:action.payload,
                    loading:false
                }
            },
            getTheatresFail(state,action){
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
            },
             getTheatreRequest(state,action){
                return{
                    ...state,
                    loading:true
                }
            },
            getTheatreSuccess(state,action){
                return{
                    ...state,
                    theatre:action.payload,
                    loading:false
                }
            },
            getTheatreFail(state,action){
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
            }
            
        }
    });
export const {getTheatresRequest,getTheatresSuccess,getTheatresFail,getTheatreRequest,getTheatreSuccess,getTheatreFail}=theatreSlice.actions;
export default theatreSlice.reducer;