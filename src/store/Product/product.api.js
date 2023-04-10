

import axios from "axios"


export const getKidsDataAPI = async()=>{

    let res = await axios.get(`https://lesn-shop-server.onrender.com/all_kids_glasses`)
    return res?.data
}

export const getComputerGlassDataAPI = async(getParam)=>{
    // console.log("comp",getParam)
    let res = await axios.get(`https://lesn-shop-server.onrender.com/all_computer_glasses`,getParam)
    console.log("comp",res?.data)
    return res?.data
}


// export const removeItemCompAPI=async(val)=>{
    
//     let res = await axios.delete(`https://lesn-shop-server.onrender.com/all_computer_glasses/${val}`)
//     console.log("res?.data",res)
//     return res
// }
// export const removeItemAPI=async(val)=>{
    
//     let res = await axios.delete(`https://lesn-shop-server.onrender.com/all_kids_glasses/${val}`)
//     // console.log("res?.data",res?.data)
//     return res
// }

export const updateKidsItemAPI = async(item)=>{
    console.log("item.id",item.id)
    let res = await axios.patch(`https://lesn-shop-server.onrender.com/all_kids_glasses/${item.id}`,item)
    // console.log(res?.data)
    return res.data
} 
export const updateCompItemAPI = async(item)=>{
    // console.log("item.id",item.id)
     let res = await axios.patch(`https://lesn-shop-server.onrender.com/all_computer_glasses/${item.id}`,item)
    // console.log(res?.data)
     return res.data
} 


