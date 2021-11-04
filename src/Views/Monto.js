import React, { Component } from 'react'
import ModMonto from '../Componentes/ModMonto'
import 'bootstrap/dist/css/bootstrap.min.css'

class Monto extends Component {
    render() {
        return (
            <div >
                <div className='App-header'>
                    <h1> Cambiar monto de estudiante</h1>
                    <ModMonto />
                </div>
            </div>
        )
    }
}


export default Monto
