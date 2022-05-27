import axios from "axios";
import { USER_LOGIN_SUCCESS } from "../Constants/UserConstant";

import { BASE_URL } from './../../api/ApiConfig';
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST } from './../Constants/UserConstant';
export const loginAction=(email,password)=>(dispatch,getState)=>{

    try{
        dispatch({type:USER_LOGIN_REQUEST})
const config={
    headers:{
        "Content-Type":"application.json"
    }
}

        const {data}=axios.get(`${BASE_URL}/api/account/login`,{email,password},config);
        dispatch({type:USER_LOGIN_SUCCESS,payload:data})
        localStorage.setItem("userItem",JSON.stringify(data))
    }catch(error){
        dispatch({type:USER_LOGIN_FAIL,payload:error})
    }
}





export const registerAction=(firstName,lastName,email,password,confirmPassword)=>(distpacth,getSatet)=>{
    try{
     

    }catch(error){
    
    }
}
export const logoutAction=(email,password)=>(dispatch,getState)=>{

}