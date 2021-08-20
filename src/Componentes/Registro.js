import React, { Component } from 'react'
import Formulario from './Formulario'
import Barra from './Barra'
import FormPI from './FormPI'
import 'bootstrap/dist/css/bootstrap.min.css'

class Registro extends Component {
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


export default Registro
