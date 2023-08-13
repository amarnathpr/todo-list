import React, { Component } from 'react'
import "./TodoList.css";

export default class TodoList extends Component {

  state= {
    input:"",
    items: []
  };

  handleChange = event=>{
    this.setState({ 
      input:event.target.value
    });
    

  };

  storeItems = event=>{
    event.preventDefault();

    const {input} = this.state;

    this.setState({
      items:[...this.state.items,input],
      input:""
      

    });
    

  };
  deleteItem=(index)=>{
    const allitems = this.state.items;
    allitems.splice(index,1)
    this.setState({
      items:allitems

    });

  }
  render() {

    const { input ,items} = this.state;
    console.log(items)
    return (  
      <div className="Todo-container">
       
     <form className="input-section" onSubmit={this.storeItems}>
      <h1>TodoList</h1> 
     <input type= "text" value={input} onChange={this.handleChange} placeholder="Enter  items..." />
        </form>

        <ul>
                 
  {items.map((data,index)=>(<li key={index}>{data} 
  <i className="fa-solid fa-trash-can" onClick={()=>this.deleteItem(index)} ></i></li>))}
      

        </ul>

       
      

        
      </div>
    );
  };
}

