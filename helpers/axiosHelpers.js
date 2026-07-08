import axios from "axios";
const rootApiEp = "http://localhost:8000/api/v1"

const getAccessJWT = () =>{
    return localStorage.getItem("accessJWT");
}

const apiProcessor = async({ method, url, data,headers })=>{

    try {
        const response = await axios({
            method,
            url, 
            data,
            headers,
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

/*get user profile            */

export const getUser=() =>{
    const Obj ={
        method:"get",
        url: rootApiEp + "/users",
        headers: {
            Authorization: getAccessJWT(),
        },
    }
    return apiProcessor(Obj);
}