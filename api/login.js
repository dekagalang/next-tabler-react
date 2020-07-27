import Api from "../providers/Api"

export const LOGIN = {
    root: "/v3/auth/login"
  };
  
export function apiPostLogin(params = "") {
    const { payload } = params;
    // console.log(params)
    return Api
      .post(LOGIN.root, payload)
      .then(response => ({ response }))
      .catch(err => {
        return { error: err.response };
      });
  }