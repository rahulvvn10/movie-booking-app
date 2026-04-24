import { createSlice } from "@reduxjs/toolkit";

 const foodSlice=createSlice({
    name:"foods",
    initialState:{
        foods:[],
        loading:false,
        error:null
    },
    reducers:{
        getFoodsRequest(state,action){
            return {
                ...state,
                loading:true
            }
        },
        getFoodsSuccess(state,action){
            return {
                ...state,
                loading:false,
                foods:action.payload
            }
        },
        getFoodsFail(state,action){
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        }
    }

 })

 export const {getFoodsRequest,getFoodsFail,getFoodsSuccess}=foodSlice.actions
 export default foodSlice.reducer;