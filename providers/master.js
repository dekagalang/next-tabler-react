import { Component, createContext } from 'react'

export const UserContext = createContext({})

class Master extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: '',
            test: 'tes',
        }
    }
    render(){
        const store = this.state

        return (
        <UserContext.Provider value={{ store }}>
            {this.props.children}
        </UserContext.Provider>
        )
    }
}

// Custom hook that shorhands the context!
export default Master