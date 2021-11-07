import React, { Component } from 'react'
import AgrPlaca from '../Componentes/agrPlaca'
import 'bootstrap/dist/css/bootstrap.min.css'

class Placa extends Component {
    render() {
        return (
            <div >
                <div className='App-header'>
                    <h1> Agregar placa a estudiantes</h1>
                    <AgrPlaca />
                </div>
            </div>
        )
    }
}


export default Placa
