import { GET_AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actionstypes/actionTypes"

import  axios from "axios"

//register User
export const registerUser=(newUser)=>async(dispatch)=>{
    try{
        const res=await axios.post("/api/auth/register",newUser)
        dispatch({
            type:REGISTER_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}
//Login User
export const loginUser=(formData)=>async(dispatch)=>{
    try{
        const res=await axios.post("/api/auth/login",formData)
        dispatch({
            type:LOGIN_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}

//Auth User
export const getAuthUser=()=>async(dispatch)=>{
const  config={
    headers:{
        'authorization':localStorage.getItem("token")
    }
}
    try{
        const res=await axios.get("/api/auth/user",config)
        dispatch({
            type:GET_AUTH_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}
//Logout
export const logout=()=>(dispatch)=>{
dispatch({
    type:LOGOUT_USER
})
}