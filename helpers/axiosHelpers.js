import axios from "axios";
const rootApiEp = "http://localhost:8000/api/v1"

const apiProcessor = async({ method, url, data })=>{

    try {
        const response = await axios({
            method,
            url, 
            data,
            headers: {
    "Content-Type": "application/json",
  }, 
        });
        return response.data;  
    } catch (error) {
        return {
            status:"error",
            message: error.message,
        };
        
    }
}

/* post new user */

export const postNewUser =(data) =>{
    const Obj ={
        method:"post",
        url: rootApiEp + "/users",
        data,
    }
    return apiProcessor(Obj);
}

/* login user            */

export const loginUser=(data) =>{
    const Obj ={
        method:"post",
        url: rootApiEp + "/users/login",
        data,
    }
    return apiProcessor(Obj);
}