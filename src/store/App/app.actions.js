import axios from "axios";
import { APP_ERROR, APP_LOADING,GET_COMP_PRODUCTS,GET_KIDS_PRODUCTS } from "./app.actionTypes";

export const appLoading = ()=>({type:APP_LOADING});

export const appFailure = ()=>({type:APP_ERROR});

export const getCompProducts =()=> async(dispatch)=>{
    dispatch(appLoading());
    await axios.get(`https://lesn-shop-server.onrender.com/all_computer_glasses`)
    .then((res)=>{
        dispatch({type:GET_COMP_PRODUCTS,payload:res.data})
    })
    .catch((e)=>{
        dispatch(appFailure())
    })
}

export const getKidsProducts =()=> async(dispatch)=>{
    dispatch(appLoading());
    await axios.get(`https://lesn-shop-server.onrender.com/all_kids_glasses`)
    .then((res)=>{
        dispatch({type:GET_KIDS_PRODUCTS,payload:res.data})
    })
    .catch((e)=>{
        dispatch(appFailure())
    })
}