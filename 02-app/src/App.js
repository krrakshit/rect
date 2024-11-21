import react from 'react'
import Header from './components/Header'
import TodoItem from './components/Todoitem'
import Button from './components/Button'
import './style.css';
import CounterComponent from './components/CounterComponent';
import Mycomponent from './components/Mycomponent';
import Timer from './Timer';

const App2 = () =>{
  return (
    <div className='Todo-container'><Header text="todo"/>
    <Mycomponent/>
    <CounterComponent/>
    <TodoItem text="eat"/>
    <TodoItem completed="true" text = "code"/>
    <TodoItem text = "study"/>
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    <Button/>
    </div>
  )
}

const App = () =>{
  return (
    <Timer/>
  )
}

export default App2;