import axios from 'axios';

export const Endpoints = {
    POST_DATA: "/process",
    BASE_URL: "http://127.0.0.1:5000"
};
// const csrfToken = Cookies.get("csrftoken");


const api = axios.create({
    baseURL: Endpoints.BASE_URL, // Replace with your API base URL
    timeout: 1000,
    headers: { 
        'Content-Type': 'multipart/form-data',
    }
});


export const postData = async (formData) => {   
    const response = await api.post(Endpoints.POST_DATA, formData);
    
        return response.data;
    
};

export default api;