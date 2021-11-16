import React, { Component } from 'react'
import VehiculoDoc from '../Componentes/VehiculoDoc'
import 'bootstrap/dist/css/bootstrap.min.css'

class VehiculoDocumento extends Component {
    render() {
        return (
            <div >
                <div className='App-header'>
                    <h1> Buscar un los vehiculos asosiados a un doc</h1>
                    <VehiculoDoc />
                </div>
            </div>
        )
    }
}


export default VehiculoDocumento
