// count actions
export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const RESET = "RESET";

// modal actions
export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";


// product actions
export const SET_LOADING = "SET_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";

// action creators
export const decrease = (value) =>{
    return {type:DECREASE,payload : value};
}
export const increase = (value) =>{
    return {type:INCREASE,payload : value}
}
export const reset = () =>{
    return {type:RESET}
}
export const modal_open = () =>{
    return {type:MODAL_OPEN}
}
export const set_loading = () =>{
    return {type:SET_LOADING}
}
export const get_products = () =>{
    return async function(dispatch){
        dispatch(set_loading());
        const response = await fetch("https://johnsmilgatutorials.com/projects/react-tech-store-v2/products");
        const data = await response.json();
        dispatch({type:GET_PRODUCTS,payload:data})
    }
}
