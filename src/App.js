import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);

    this.state={
      newItem:"",
      list: []
    }
  }

 //Set key: value pair, Local storage currently not implemented
  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }

  addItem () {
  //create item with unique id
    const newItem= {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };;

  //copy of current list items with spread operator 
  const list = [...this.state.list];

  //add new item to list
  list.push(newItem);

  //update state with new list and reset newItem input
  this.setState({
    list,
    newItem:''
  });
 } 

 deleteItem(id){
  //copy current list of items
  const list = [...this.state.list];

  //filter out item to be deleted
  const updatedList = list.filter(item => item.id  !== id);

  this.setState({list: updatedList})
 }


 render() {
  return (
    <div>
      <h1 className="app-title">MY LIST</h1>
      <div className="container">
      <div className='container-items'>
        Add an Item...
      <br/>
      <input
          type="text"
          placeholder="Type item here"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
      />
      <button
          className="add-btn btn-floating"
          onClick={() => this.addItem()}
          disabled={!this.state.newItem.length}
      >
      <i className="material-icons"> + </i>
      </button>
      <br/> <br/>
      <ul>
        {this.state.list.map(item => {
          return (
            <li key={item.id}>
              {item.value}
              <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                <i class="material-icons">x</i>
              </button>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
    </div>
  );
 }
}

export default App;
