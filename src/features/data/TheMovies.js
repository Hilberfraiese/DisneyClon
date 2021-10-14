import {createSlice} from "@reduxjs/toolkit"

const initialState = {
     movies:[],
     list:[]
}

const TheMovies = createSlice({
    name : "movies",
    initialState,
    reducers:{
    setMovies:(state,action)=>{
       state.movies= action.payload;
    },
    setList: (state, action)=>{
        state.list.push(action.payload);
    }
    }
    
})

export const {setMovies, setList} = TheMovies.actions;

export const selectMovies = (state) => state.movies.movies
export const selectList = (state) => state.movies.list

export default TheMovies.reducer;