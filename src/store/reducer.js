import * as actionTypes from "./action-types"
const initialState={
    cinema:"",
    timing:"",
    seats:[]
}
const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_CINEMA:
            state.cinema=action.payload
            default:
                return state
    }
}
export default reducer;