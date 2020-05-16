import {SET_LOADING,GET_PRODUCTS,CLEAR_PRODUCTS} from './actions'
const defaultState ={
    loading: false,
    products : []
}

export default function reducer(state=defaultState, action){
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state,products : action.payload,loading:false};
        case SET_LOADING:
            return {...state,loading:true}
        case CLEAR_PRODUCTS:
            return {...state,products : [],loading:false};
        default:
            return state
    }
}