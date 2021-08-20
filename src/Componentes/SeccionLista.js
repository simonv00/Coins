import React, { Component } from 'react'

class SeccionLista extends Component {
    render() {
        const {nombre1,nombre2,apellido1,apellido2,correo,telefono,saldo,cedula,estado} = this.props
        return (
            <div>
                <td>{nombre1} {nombre2}</td>
                <td> {apellido1} {apellido2}</td>
                <td>{cedula}</td> 
                
            </div>
        )
    }
}

export default SeccionLista
