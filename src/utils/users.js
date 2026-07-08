import { getUser } from "../../helpers/axiosHelpers";

export const autologin = async() =>{
    const accessJWT = localStorage.getItem("accessajwt")
    if(accessJWT){
        const response = await getUser();
        console.log(response);

    };
};