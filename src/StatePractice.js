import React, {Component} from "react"

class StatePractice extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false,
        }
        this.handleLog = this.handleLog.bind(this)
    }

    handleLog(){
        this.setState(prevState=>{
            return { isLoggedIn: !prevState.isLoggedIn } 
        })
    }

    render(){
        let wordDisplay
        if (this.state.isLoggedIn){
            wordDisplay = "in."
        } else {
            wordDisplay = "out."
        }

        let buttonText = this.state.isLoggedIn
            ? "Log Out"
            : "Log In"
            
        return(
            <div>
                <p>Schupe is currently logged {wordDisplay}</p>
                <button onClick={this.handleLog}>{buttonText}</button>
                <hr></hr>
           </div> 
        )
    }
    
}

export default StatePractice