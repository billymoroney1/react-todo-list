import './App.css';
import React, {Component} from 'react'
import ListItem from './ListItem.js'

class MyList extends Component {

  constructor(props){
    super(props)
    this.state = {
      toDoItemArray: props.todoList,
      newItem: "",
    }
  }

  newItemChange = (e) => {
    console.log(e.target.value)
    this.setState((prevState, props) => {
      return {newItem: e.target.value}
    })
  }

  addItem = (e) => {
    e.preventDefault()
    const items = this.state.toDoItemArray
    items.push(this.state.newItem)
    console.log(items)
    this.setState((prevState, props) => {
      return {toDoItemArray: items}
    })
  }

  clearList (e) {
    console.log("clearing list!")
    this.setState((prevState, props) => {
      return {toDoItemArray: []}
    })
  }
  
  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ))
    
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
        <form>
          <input type='text'
          placeholder='Type an item here'
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem} 
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
      </div>
    )
  }
}

export default MyList;
