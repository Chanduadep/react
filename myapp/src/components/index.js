import axios from 'axios';
let currentMode="LOCAL";
let currentBackendUrl="";
if(currentMode==="PROD"){
    currentBackendUrl="http://prod:8000/api/v1";
}else if(currentMode==="NONPROD"){
    currentBackendUrl="http://nonprod:8000/api/v1";
}else{
    currentBackendUrl="http://localhost:8000/api/v1";
}
 const api=axios.create({
    baseURL:currentBackendUrl,
    withCredentials:true,
 });
 export default api;