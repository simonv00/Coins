import React, { Component } from 'react'
import AgrMensaje from '../Componentes/agrPlaca'
import 'bootstrap/dist/css/bootstrap.min.css'

class Mensaje extends Component {
    render() {
        return (
            <div >
                <div className='App-header'>
                    <h1> Agregar mensaje a estudiantes</h1>
                    <AgrMensaje />
                </div>
            </div>
        )
    }
}


export default Mensaje
