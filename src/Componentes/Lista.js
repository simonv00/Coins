// import React, { Component, useEffect, useState } from 'react'
// import { Table,Button } from 'react-bootstrap'
// import Axios from "axios";
// import axios from 'axios'


// class Lista extends Component {

    // handleDeleteClick = (id) =>{
    //     Axios.post("http://localhost:3001/Registro/api/delete", {
    //     Numero_Documento: id,
    //     })
    //     //const newStudentList = [...studentList];
    //     //const index = studentList.findIndex((val) => val.Numero_Documento === id);
    // }

    // _hooktrick = () => () =>{
    //     const [studentList, setStudentList] = useState([]);
    // }

    // useEffect = ()=> {
    //     axios.get('http://localhost:3001/Listar/api/get').then((response)=> {
    //     setStudentList(response.data)
    //     console.log(response.data)
    //     })
    // }
    
    // render() {
    //     return (
    //         <div>
    //             <Table>
    //                     <thead>
    //                         <tr>
    //                             <th>
    //                                 Nombre(s)
    //                             </th>
    //                             <th>
    //                                 Apellido(s)
    //                             </th>
    //                             <th>
    //                                 cedula
    //                             </th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                     {studentList.map((val) => (
    //                         <tr key={val.idEstudiante}>
    //                         <td>{val.Primer_Nombre} {val.Segundo_Nombre}</td>
    //                         <td>{val.Primer_Apellido} {val.Segundo_Apellido}</td>
    //                         <td>{val.Numero_Documento}</td>
    //                         <td><Button variant='primary'>actualizar</Button></td>
    //                         <td><Button variant='success'>$</Button></td>
    //                         <td><Button variant='danger'  
    //                             onClick={this.handleDeleteClick}
    //                             className="Button"
    //                             type="submit">X</Button></td>
    //                         </tr>
    //                         ))}
    //                     </tbody>
    //                 </Table>
    //         </div>
    //     )
    // };
//}

//export default Lista