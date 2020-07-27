import { Component, createContext } from 'react'

export const SessionContext = createContext({})

class Session extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            activeUser: {
                username: ''
            },
        }
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