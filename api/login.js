import Api from "../providers/Api"

export const LOGIN = {
    root: "/v3/auth/login"
  };
  
  let formData = {
    role_id: 1,
    password: "123456",
    username: "deka"
  }

export function apiPostLogin() {
    // const { payload, guid } = params;
    return Api
      .post(LOGIN.root, formData)
      .then(response => ({ response }))
      .catch(err => {
        return { error: err.response };
      });
  }