import axios from "axios";
import { APP_ERROR, APP_LOADING,GET_COMP_PRODUCTS,GET_KIDS_PRODUCTS } from "./app.actionTypes";

export const appLoading = ()=>({type:APP_LOADING});

export const appFailure = ()=>({type:APP_ERROR});

export const getCompProducts =(sortBy="")=> async(dispatch)=>{
    dispatch(appLoading());
    await axios.get(`https://lesn-shop-server.onrender.com/all_computer_glasses?_sort=price&_order=${sortBy}`)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:GET_COMP_PRODUCTS,payload:res.data})
    })
    .catch((e)=>{
        dispatch(appFailure())
    })
}

export const getKidsProducts =()=> async(dispatch)=>{
    dispatch(appLoading());
    await axios.get(`https://lesn-shop-server.onrender.com/all_kids_eyeglasess`)
    .then((res)=>{
        // console.log("comp",res)
        dispatch({type:GET_KIDS_PRODUCTS,payload:res.data[0]})
    })
    .catch((e)=>{
        dispatch(appFailure())
    })
}

// export const getSortedCompProducts =(sortBy)=> async(dispatch)=>{
//     dispatch(appLoading());
//     await axios.get(`https://lesn-shop-server.onrender.com/all_computer_glasses?_sort=price&_order=${sortBy}`)
//     .then((res)=>{
//         dispatch({type:GET_COMP_PRODUCTS,payload:res.data})
//     })
//     .catch((e)=>{
//         dispatch(appFailure())
//     })
// }