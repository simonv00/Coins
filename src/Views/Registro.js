import React, { Component } from 'react'
import Formulario from '../Componentes/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'

class Registro extends Component {
    render() {
        return (
            <div >
                <div className='App-header'>
                    <h1> Registro de estudiante</h1>
                    <Formulario />
                </div>
            </div>
        )
    }
}


export default Registro
