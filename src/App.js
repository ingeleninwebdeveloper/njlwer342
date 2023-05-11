import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

 constructor() {
    super()
    this.state = {
      tasks: [
        "Sacar la ropa", "Hacer la cama", "Leer un rato"
      ],
      newTask: ''
    }
  }

  handleSubmit(e) {
    
    e.preventDefault();
        this.setState({newTask: e.target.value});
        this.addTask(this.state.newTask)
    }
  

  handleChange(e) {
    this.setState({newTask: e.target.value});
  }

  addTask(dato) {
    this.setState({tasks:this.state.tasks.concat(this.state.newTask)})
    console.log(dato)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li key={index}>{task}</li>)}
          </ul>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask || ""}  // Only for "Enter" purpose
           onChange={this.handleChange.bind(this)} />
          </form>
        </div>
        <span>{this.state.newTask}</span>
      </div>
    )
  }
}



export default App;
