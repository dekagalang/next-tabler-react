import { Component, createContext } from 'react'
import { apiPostLogin } from '../api/login'
import { SetHead, SetUser } from './Api'
import Cookies from 'universal-cookie'
import Router from 'next/router'

export const SessionContext = createContext({})

class Session extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            activeUser: {
                username: ''
            },
            login: async e => {
                e.preventDefault();
                var resData;
                var resLogin;
                if (
                    this.state.credential.username.length > 0 &&
                    this.state.credential.password.length > 0
                ) {
                    // this.clearError();
                    // this.startLoading();
                    try {
                        var shell = {};
                        const formData = {
                            username: this.state.credential.username,
                            password: this.state.credential.password,
                            role_id: 1,
                        }
                        resLogin = await apiPostLogin({payload: formData})
                        if(resLogin){
                            resData = resLogin.response.data
                            // console.log(resData)
                            await SetHead(
                                resData.token_type + " " + resData.access_token,
                                resData.user.id
                            );
                            await SetUser(
                                resData.user.username,
                                resData.user.email,
                                resData.user.role_id
                            );
                            (shell.username = resData.user.username),
                                (shell.email = resData.user.email),
                                (shell.role_name = resData.user.role_id);
                            await this.setState({
                                activeUser: shell,
                            });
                        }
                    } catch (e) {
                        // this.setError(
                        //     e.response.data && e.response.data.message
                        //         ? e.response.data.message
                        //         : e.message
                        // );
                    } finally {
                        // if (!this.state.error.status) {
                        //     this.setState({
                        //         loggedIn: true,
                        //     });
                        //     this.refreshShell();
                        //     this.stopLoading();
                        //     if (res.data.user.username == "admin") {
                        //         Router.push(process.env.ASSET_PREFIX+"user");
                        //     } else {
                        //         Router.push(process.env.ASSET_PREFIX+"produk");
                        //     }
                        // }
                    }
                } else {
                    this.setState({
                        error: {
                            status: true,
                            message: "Isi semua kolom!",
                        },
                    });
                }
            },
            logout: async () => {
                // const res = await Api.get("/auth/logout");
                // console.log(res, 'data rest');
                console.log('tes')
                const cookies = new Cookies();
                this.setState({
                    loggedIn: false,
                    activeUser: {
                        username: "",
                        email: "",
                        role_name: "",
                        role_id: "",
                    },
                });
                
                cookies.remove("dock_authorization");
                cookies.remove("dock_username");
                cookies.remove("dock_email");
                cookies.remove("dock_role_name");
                // cookies.remove("dock_image");
                cookies.remove("dock_id");
                Router.replace("/");
            },
            credential: {
                username: '',
                password: '',
            },
            credentialOnChange: obj => {
                let shell = this.state.credential;
                shell[obj.target.name] = obj.target.value;
                this.setState({ credential: shell });
            },
            loading: {
                process: false
            }
        }
    }

    startLoading() {
        this.setState({
            loading: {
                process: true,
            },
        });
    }

    stopLoading() {
        this.setState({
            loading: {
                process: false,
            },
        });
    }
    
    render(){
        const store = this.state

        return (
        <SessionContext.Provider value={{ store }}>
            {this.props.children}
        </SessionContext.Provider>
        )
    }
}

// Custom hook that shorhands the context!
export default Session