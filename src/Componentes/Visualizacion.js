import React, { useEffect, useState } from 'react'
import { Table,Button } from 'react-bootstrap'
import './Visualizacion.css'
import Busqueda from './Busqueda'
import axios from 'axios'



function Visualizacion(){

    const [studentList, setStudentList]=useState([])

    useEffect(()=> {
        axios.get('https://coins-implementacion-software.herokuapp.com/Listar/api/get').then((response)=> {
        setStudentList(response.data)
        console.log(response.data)
        })
    }, [])

    // state = {
    //     students: estudiantes
    // }

    //render() {
        //const { students } = this.state
        return (
            <div>
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
                        {studentList.map((val) => (
                            <tr key={val.idEstudiante}>
                            <td>{val.Primer_Nombre} {val.Segundo_Nombre}</td>
                            <td>{val.Primer_Apellido} {val.Segundo_Apellido}</td>
                            <td>{val.Numero_Documento}</td>
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
   // }
}
//nombre1,nombre2,apellido1,apellido2,dni,correo,telefono,saldo,cedula,estado

export default Visualizacion

