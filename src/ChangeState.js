import React, {Component} from 'react'
import randomcolor from 'randomcolor';

class ChangeState extends Component{
    constructor(){
        super()
        this.state = {
            count: 1,
            color: ''
        }
        this.handleClickDouble = this.handleClickDouble.bind(this)
        this.handleClickHalve = this.handleClickHalve.bind(this)

    }

    handleClickDouble(){
        this.setState(prevState=>{
            return { count: prevState.count*2 } //it's returning a *NEW* {OBJECT}! 
        })
    }
    handleClickHalve(){
        this.setState(prevState=>{
            return { count: prevState.count/2 } 
        })
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count){
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
    }

    render(){
        return(
            <div>
                <h3 style={{color: this.state.color}}>{this.state.count}</h3>
                <button onClick={this.handleClickDouble}>Double!</button>
                <button onClick={this.handleClickHalve}>Halve!</button>

            </div>
        )
    }
}

export default ChangeState