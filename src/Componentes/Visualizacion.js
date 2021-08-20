import React, { Component } from 'react'
/* import 'bootstrap/dist/css/bootstrap.min.css' */
import { Table,Button } from 'react-bootstrap'
import Barra from './Barra'
import './Visualizacion.css'
import Busqueda from './Busqueda'
import SeccionLista from './SeccionLista'

const estudiantes = [
    {
        nombre1: 'camilo',
        nombre2: '',
        apellido1: 'mafioly',
        apellido2: 'yacamán',
        saldo: 500000,
        cedula: '1020831887'
    },
    {
        nombre1: 'pablo',
        nombre2: '',
        apellido1: 'isaza',
        apellido2: 'gómez',
        saldo: 5000,
        cedula: '1037665377'
    },
    {
        nombre1: 'cristina',
        nombre2: '',
        apellido1: 'arango',
        apellido2: 'escobar',
        saldo: 100000,
        cedula: '1020831887'
    },
    {
        nombre1: 'Simon',
        nombre2: '',
        apellido1: 'valencia',
        apellido2: 'ochoa',
        saldo: -1000,
        cedula: '1010111222'
    },
    {
        nombre1: 'Andres',
        nombre2: 'esteban',
        apellido1: 'cardona',
        apellido2: 'no se',
        saldo: -1000,
        cedula: '1010111222'
    }

]

class Visualizacion extends Component {

    state = {
        students: estudiantes
    }

    render() {
        const { students } = this.state
        return (
            <div>
                <Barra />
                <div className='App-header Up'>
                    <div className='margin'>
                        <h1> Lista de estudiantes</h1>
                    </div>
                    <div className='margin'>
                        <Busqueda />
                    </div>
                    <div>
                        <Table>

                        <thead>
                            <tr>
                                <th>
                                    Nombre(s)
                                </th>
                                <th>
                                    Apellido(s)
                                </th>
                                <th>
                                    cedula
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {students.map(est => (
                            <tr>

                            <td>{est.nombre1} {est.nombre2}</td>
                            <td>{est.apellido1} {est.apellido2}</td>
                            <td>{est.cedula}</td>
                            <td><Button variant='primary'>actualizar</Button></td>
                            <td><Button variant='success'>$</Button></td>
                            <td><Button variant='danger'>X</Button></td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                    </div>

                </div>
            </div>
        )
    }
}
//nombre1,nombre2,apellido1,apellido2,dni,correo,telefono,saldo,cedula,estado

export default Visualizacion


{/* <tr>
{students.map(est => (
    <SeccionLista
    nombre1={est.nombre1}
    nombre2={est.nombre2}
    apellido1={est.apellido1}
    apellido2={est.apellido2}
    correo={est.correo}
    cedula={est.cedula}
    telefono={est.telefono}
    estado={est.estado} />
    
    ))}
    </tr> */}
