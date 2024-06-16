import axios from "axios";

const provider = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

provider.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error?.response?.status === 401) {
           // window.location.replace(process.env.REACT_APP_SSO_LOGIN_URL)
            return Promise.reject(error);
        }
    },
);

provider.interceptors.request.use(
  //  (config) => setAuthorizationHeader(config),
   // (error) => Promise.reject(error)
);

export {provider};