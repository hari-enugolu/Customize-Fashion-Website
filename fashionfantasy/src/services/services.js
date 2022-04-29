import axios from "axios";

const USER_SIGNUP_URL='http://localhost:8081/user/signup';
const USER_LOGIN_URL='http://localhost:8081/user/login';

async function registerUser({ emailId, firstName, lastName, role, password}) {
    try {   
        const response = await axios.post(USER_SIGNUP_URL, {
            emailId,
            firstName,
            lastName,
            role,
            password
        });
        if(response.status!=201) {
           console.error('Register failed');
           return null;
        }
        return response.data.token;
           
    }
    catch(error) {
        console.error(error);
    }
}   


async function loginUser({ emailId, password}) {
    try {   
        const response = await axios.post(USER_LOGIN_URL, {
            emailId,
            password
        });
        if(response.status!=201) {
           console.error('Register failed');
           return null;
        }
        return response.data.token;
           
    }
    catch(error) {
        console.error(error);
    }
}