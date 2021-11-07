import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Barra.css'

// barra de navegacion
class Barra extends Component {
    render() {
        return (
            <Navbar className='App-Barra' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="./logo.svg" alt="" />
                        Coins EIA
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/Visualizacion' className='Link' >
                                    Buscar
                            </Link>
                            <Link to='/' className='Link' >
                                Agregar estudiante
                            </Link>
                            <Link to='/Monto' className='Link' >
                                Modificar monto
                            </Link>
                            <Link to='/Placa' className='Link' >
                                Agregar placa
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}


export default Barra
