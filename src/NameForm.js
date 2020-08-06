import React, {Component} from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: 'state test',
          firstName: ''
      }
  
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.firstName) //DISPLAYS STRING BUT NOT NAME
      event.preventDefault()
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="First Name" onChange={this.state.firstName} />
            <button type="submit" onClick={this.handleChange}>Submit</button>
        </form>
      )
    }
  }

  export default NameForm