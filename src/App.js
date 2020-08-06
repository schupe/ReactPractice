import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Header from "./Header"
import TimeOfDay from './TimeOfDay'
import Footer from "./Footer"
import ToDoClass from './ToDoClass'
import ContactCard from './ContactCard'
import Joke from './Joke'
import jokesData from './jokesData'
import productsData from "./vschoolProducts"
import Product from "./Product"
import StatePractice from "./StatePractice"
import EventPractice from "./EventPractice"
import ChangeState from './ChangeState'
import Conditional from './Conditional'
import ApiCall from './ApiCall'
import NameForm from './NameForm'
import AirlineForm from './AirlineForm';

const jokeComponents = jokesData.map(
  joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />  )

const schoolProducts = productsData.map(
  item => <Product key={item.id} name={item.name} price={item.price} desc={item.description} />  )


class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      loggedIn: false
    }
  }

  componentDidMount(){
    setTimeout( () => {
      this.setState({
        isLoading: false,
      })
    }, 2000)
  }

  //const todoComponents = todosData.map(
  //  item => <ToDoItem key={item.key} text={item.text} completed={item.completed}/>  )

  render(){
    return (
      <div className="App">
        <Header />
        <TimeOfDay />

        <StatePractice />
        <ChangeState />
        <ApiCall />
        <NameForm />
        <AirlineForm />

        <div> 
          {this.state.isLoading
            ? <h1>Loading...</h1>
            : <Conditional />}
        </div>
        
        <div>
          <ToDoClass />
        </div>

        <div>
          <EventPractice />
        </div>

        <div>
          {jokeComponents}
        </div>

        <div>
          {schoolProducts}
        </div>

        <div>
          <ContactCard
            contact= {{
              name: "Mr. Whiskerson",
              imgUrl: "http://www.placekitten.com/300/200",
              phone: "512-1234",
              email: "mrwhiskerson@gmail.cat" 
            }} />

          <ContactCard
            contact= {{
              name: "Fluffernutter",
              imgUrl: "http://www.placekitten.com/400/200",
              phone: "666-1235",
              email: "fluffernutter@gmail.cat" 
            }}
          />
        </div>
        <header className="Main-body">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.sniper66.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Sniper 66 website
          </a>
        </header>

        <Footer />
      </div>
    )
  }
}

export default App;
