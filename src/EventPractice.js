import React, {Component} from 'react'

class EventPractice extends Component {
    constructor(){
        super()
        this.state = {
            name: "Bill"
        }
    }

    render(){
        function handleClick(){
            console.log("I was clicked")
        }

        return(
            <div>
                <img src="http://www.fillmurray.com/200/100" onMouseOver={() => console.log(this.state.name)} alt="alt text" />
                <br />
                <br />
                <button onClick={handleClick} > Click Me! </button>
            </div>
        )
    }
}

export default EventPractice