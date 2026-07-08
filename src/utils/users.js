import { getUser } from "../../helpers/axiosHelpers";

export const autologin = async() =>{
    const accessJWT = localStorage.getItem("accessajwt")
    if(accessJWT){
        const {status,user} = await getUser();
        return status === "success" ? user : {}

    };
};