const initialState = {
    movies: [],
    detail:{}
};


function reducer(state = initialState, action) {
   
    switch(action.type){
    case "MOV": return {...state, movies: action.payload };
    case "DET": return {...state, detail: action.payload } 
    default : return state;
  }
}
  export default reducer;
  