import React, { Component } from 'react'
import Formulario from './Formulario'
import Barra from './Barra'
import FormPI from './FormPI'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form, Div, Select } from 'react-bootstrap'

class App2 extends Component {
    render() {
        return (
            <div >
                <Barra></Barra>
                <div className='App-header'>
                    <h1> Registro de estudiante</h1>
                    <Formulario />
                </div>
            </div>
        )
    }
}


export default App2
