import React, {Component} from 'react';

class ApiCall extends Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data => 
                this.setState({
                    loading: false,
                    character: data
                })
            )
    }

    render(){
        const text = this.state.loading
            ? 'loading...'
            : this.state.character.name
        return (
            <div>
                <hr></hr>
                <p>Your character is {text} </p>
            </div>
        )
    }
}

export default ApiCall