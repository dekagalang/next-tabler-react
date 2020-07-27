import axios from 'axios'

import Cookies from 'universal-cookie'

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

export function SetHead(auth, id) {
  const cookies = new Cookies()
  cookies.set('dock_authorization', auth, { path: "/" });
  cookies.set('dock_id', id, { path: "/" });
  Api.defaults.headers.common['Authorization'] = auth;
}

export function SetUser(username, email, role_name){
  const cookies = new Cookies();
  cookies.set('dock_username', username, { path: "/", masAge: 10800 });
  cookies.set('dock_email', email, { path: "/", masAge: 10800 });
  // cookies.set('dock_image', image, { path: "/", masAge: 10800 });
  cookies.set('dock_role_name', role_name, { path: "/", masAge: 10800 });
}

export default Api