import React, {
  Component
} from 'react';
import TodoInput from './containers/TodoInput';
import TodoItem from './containers/TodoItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
class App extends Component {
  state = {
    items: [],
    item: '',
    id: uuid(),
    empty: false
  }
  handlerChange = e => {
    this.setState({
      item: e.target.value
    })
  }

  handlerSubmit = e => {
    e.preventDefault();

    if (this.state.item !== '') {
      const newItem = {
        title: this.state.item,
        id: this.state.id,
        checked: false

      }
      const updateItem = [...this.state.items, newItem];
      this.setState({
        items: updateItem,
        item: '',
        id: uuid(),
        empty:false

      })
      console.log("-" + this.state.id);

    } else {
      this.setState({
        empty: true
      })

    }



  }

  handlerCheck = index => {
    const itemss = [...this.state.items];
    itemss[index].checked = !itemss[index].checked
    this.setState({
      items: itemss
    })

  }


  render() {
    // console.log("--------777777--",this.state.items)
    return (

      
     < div className = "container" >

      
      <div className = "row" >

      
      <div className = "col-10 mx-auto mt-4 col-md-8 " >

      
      <h3 className = 'text-capitalize text-center' > todo app </h3>  
      < TodoItem items = {
        this.state.items
      }
      handlerCheck = {
        this.handlerCheck
      } />
      

      
      <TodoInput item = {
        this.state.item
      }
      empty = {
        this.state.empty
      }
      handlerChange = {
        this.handlerChange
      }
      handlerSubmit = {
        this.handlerSubmit
      } />
      

      
      </div> 
      </div >

      
      </div>
    );

  }
}



export default App;