import React, { Component } from 'react';
import './App.css'
import {Button} from 'react-bootstrap';
import Input from './inputBox.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      mensajeActual: 'Hola Mundo!',
        mensajeNuevo: ''
    };
  };

  cambiaTitulo = (nuevoTitulo) => {
    this.setState({mensajeNuevo: nuevoTitulo});
  };


  updateTitulo = () => {
    this.setState({mensajeActual: this.state.mensajeNuevo})
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.mensajeActual}</h1>
        <Input cambiaTitulo={this.cambiaTitulo}/>
        <Button bsStyle="primary" onClick={() => this.updateTitulo()}>Presionar</Button>
      </div>
    );
  }
}

export default App;
