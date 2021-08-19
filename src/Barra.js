import React, { Component } from 'react'
import {Navbar,Container, Nav,Image} from 'react-bootstrap'
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
                            <Nav.Link href="#agregar estudiante">Buscar</Nav.Link>
                            <Nav.Link href="#buscar">Agregar estudiante</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}


export default Barra
