import React, { Component } from 'react';
import './App.css'
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';

class Input extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputMessage: ''
        }
    }

    handleChange = (e) => {
        this.setState({inputMessage: e}, () => {
            this.props.cambiaTitulo(e);
            console.log(e)
        })
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Introduce texto a cambiar</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.inputMessage}
                        placeholder={this.state.inputMessage}
                        onChange={(e) => this.handleChange(e.target.value)}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </form>
        );
    }
}

export default Input;
