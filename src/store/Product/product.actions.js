import * as types from "./product.actionTypes"
import { getComputerGlassDataAPI, getKidsDataAPI,updateCompItemAPI, updateKidsItemAPI } from "./product.api"

export const getKidsData =()=> async(dispatch)=>{

    dispatch({type:types.GET_PRODUCT_LOADING})

    try {
        let data = await getKidsDataAPI()

        dispatch({type:types.GET_KIDS_DATA_SUCCESS,payload:data})
        
    } catch (e) {
        dispatch({type:types.GET_PRODUCT_ERROR})
    }
}
export const getComputerGlassData =()=> async(dispatch)=>{

    dispatch({type:types.GET_PRODUCT_LOADING})

    try {
        let data = await getComputerGlassDataAPI()
        // console.log("comp",data)
        dispatch({type:types.GET_COMPUTER_GLASS_DATA_SUCCESS,payload:data})
        
    } catch (e) {
        dispatch({type:types.GET_PRODUCT_ERROR})
    }
}
export const removeCompItem =(id)=> async(dispatch)=>{

    dispatch({type:types.GET_PRODUCT_LOADING})
   
   
    try {
        let data = await removeItemCompAPI(id)
        // console.log("comp",data)
        if(data){

            dispatch({type:types.REMOVE_ITEM_COMP,payload:id})
            dispatch(getComputerGlassData())
        }
    } catch (e) {
        dispatch({type:types.GET_PRODUCT_ERROR})
    }
}
export const removeKidspItem =(id)=> async(dispatch)=>{

    dispatch({type:types.GET_PRODUCT_LOADING})
   

    try {
        
        await axios.delete(`https://lesn-shop-server.onrender.com/all_computer_glasses/${val}`)
        .then(()=>dispatch(getKidsData()))
        .catch(e=>console.log(e))
        
        
        
    } catch (e) {
        dispatch({type:types.GET_PRODUCT_ERROR})
    }
}

export const updateItemComp=(item)=>async(dispatch)=>{
    // console.log(item)
    dispatch({type:types.GET_PRODUCT_LOADING})

    try {
        let data = await updateCompItemAPI(item)
        // console.log(data)
        dispatch({type:types.UPDATE_ITEM_COMP,payload:data})
    } catch (e) {
        dispatch({type:types.GET_PRODUCT_ERROR})
    }
}
export const updateItemKids=(item)=>async(dispatch)=>{
    // console.log(item)
    dispatch({type:types.GET_PRODUCT_LOADING})

    try {
        let data = await updateKidsItemAPI(item)
        // console.log("data",data)
        dispatch({type:types.UPDATE_ITEM_KIDS,payload:data})
    } catch (e) {
        dispatch({type:types.GET_PRODUCT_ERROR})
    }
}


    