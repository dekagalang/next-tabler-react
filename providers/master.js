import { Component, createContext } from 'react'

export const MasterContext = createContext({})

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
        <MasterContext.Provider value={{ store }}>
            {this.props.children}
        </MasterContext.Provider>
        )
    }
}

// Custom hook that shorhands the context!
export default Master