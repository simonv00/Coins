import React, { Component } from 'react'
import './App.css'
import './Formulario.css'
/* import 'bootstrap/dist/css/bootstrap.min.css' */
import { Container, Row, Col, Button, Form } from 'react-bootstrap'



class Formulario extends Component {
    render() {
        return (
            <div className='App'>
                <header className='App-Header'>
                    <Container >
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label column='sm' >Escribe el primer Nombre </Form.Label>
                                        <Form.Control placeholder='Primer Nombre' />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label column='sm' >El segundo nombre </Form.Label>
                                        <Form.Control placeholder='Segundo Nombre' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label column='sm' >Escribe el primer Apellido </Form.Label>
                                        <Form.Control placeholder='Primer Apellido' />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label column='sm' >El segundo Apellido </Form.Label>
                                        <Form.Control placeholder='Segundo Apellido' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Group>
                                    <Form.Label column='sm' > Correo</Form.Label>
                                    <Form.Control placeholder=' ejemplo@email.com' type="email"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label column='sm' > Teléfono</Form.Label>
                                    <Form.Control placeholder=' Numero telefónico' type="tel"></Form.Control>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col xs='auto' >
                                    <Form.Group>
                                        <Form.Label column='sm'> Tipo de Id</Form.Label>
                                        <Form.Control as='Select'>
                                            <option value="CC">CC</option>
                                            <option value="TI">TI</option>
                                            <option value="CE">CE</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs='auto'>
                                    <Form.Group  >
                                        <Form.Label column='sm'>Identificacion </Form.Label>
                                        <Form.Control placeholder= 'Identificacion' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant='outline-dark' className='Button'  type="submit" >
                                Guardar
                            </Button>
                        </Form>
                    </Container>
                </header>
            </div>
        )
    }
}



export default Formulario