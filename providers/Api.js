import  axios from 'axios'

const Api = axios.create({
  baseURL: process.env.API_URL
});

Api.interceptors.request.use(async (config) => {
    // config.headers.common['Accept'] = 'application/json';

    // config.crossDomain = true
    // config.credentials = 'same-origin'
    // console.log(config)

    return config;
  },
  err => Promise.reject(err)
);

export default Api