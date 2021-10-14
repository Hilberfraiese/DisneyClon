export function carga(movies){
  return function(dispatch) {
      dispatch({type: "MOV", payload: movies})
  }
}

export function detail(movie){
  return function(dispatch) {
      dispatch({type: "DET", payload: movie})
  }
}