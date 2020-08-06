import React, {Component} from 'react';

class AirlineForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location: '',
            isVegan: false,
            isVegetarian: false,
            isLactoseFree: false
            }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }  

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox"
            ? this.setState({
                [name]: checked
            })
            : this.setState({ [name]: value})
    }

    handleSubmit(event){
        event.preventDefault()
        const userInfo = this.state
        // alert("Display:" + userInfo) //WILL IT DISPLAY?
        let age = this.state.age;
        if (!Number(age)) {
          alert("Your age must be a number");
        }
    }

    render(){
        return(
            <main>
                <hr />
                <h2>Airline Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.handleChange} 
                        placeholder="First Name"
                    />
                    <br />
                    <input 
                        name="lastName" 
                        value={this.state.lastName} 
                        onChange={this.handleChange} 
                        placeholder="Last Name" 
                    />
                    <br />
                    <input 
                        name="age" 
                        value={this.state.age} 
                        onChange={this.handleChange} 
                        placeholder="Age" 
                    />

                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender === 'Male'}
                            onChange={this.handleChange}
                        />Male
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender === 'Female'}
                            onChange={this.handleChange}
                        />Female
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="Non-Binary"
                            checked={this.state.gender === 'Non-Binary'}
                            onChange={this.handleChange}
                        />Non-Binary
                    </label>

                    <br/>
                    <label>
                        <input 
                            type="checkbox"
                            name="isVegan"
                            checked={this.state.isVegan} 
                            onChange={this.handleChange} 
                        />Vegan
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="isVegetarian"
                            checked={this.state.isVegetarian} 
                            onChange={this.handleChange} 
                        />Vegetarian
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="isLactoseFree"
                            checked={this.state.isLactoseFree} 
                            onChange={this.handleChange} 
                        />No Dairy
                    </label>

                    <br />
                    <select value={this.state.location} onChange={this.handleChange} name="location">
                        <option value="">--Choose Your Destination--</option>
                        <option value="SFO">San Francisco</option>
                        <option value="ABIA">Austin</option>
                        <option value="BOS">Boston</option>
                    </select>

                    <br />
                    <button>Submit</button>          
                </form>

                <h4>Entered Information:</h4>
                <p>Name: {this.state.firstName} {this.state.lastName}</p>
                <p>Age: {this.state.age}</p>
                <p>Gender: {this.state.gender}</p>
                <p>
                    {this.state.isVegan ? "Vegan" : null} 
                    {this.state.isVegetarian ? " Vegetarian" : null} 
                    {this.state.isLactoseFree ? " Dairy-Free" : null}
                </p>
                <p>Destination: {this.state.location}</p>
            </main>
        )
    }
}

export default AirlineForm