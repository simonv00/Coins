import React, { Component } from "react";
import "./App.css";
import "./Formulario.css";
/* import 'bootstrap/dist/css/bootstrap.min.css' */
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import Axios from "axios";

class Formulario extends Component {
  state = {
    nombre1: "",
    nombre2: "",
    apellido1: "",
    apellido2: "",
    correo: "",
    tipoID: "",
    telefono: 0,
    id: "",
    monto: 0,
    estado: false,
    valid: true,
    validaciones: {
      nombre1: true,
      nombre2: true,
      apellido1: true,
      apellido2: true,
      correo: true,
      tipoID: true,
      telefono: true,
      id: true,
      monto: true,
      estado: true,
    },
  };
// buenas
  actualizar = (event) => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

/*   
        
  validateAlpha = (event) => {
    this.setState({
      validaciones: {
        ...this.validaciones,
        [event.target.name]: validate.validateAlpha(event.target.value),
      },
    });
  };

  validateAlpha2 = (event) => {
    this.setState({
      validaciones: {
        ...this.validaciones,
        [event.target.name]: validate.validateAlpha2(event.target.value),
      },
    });
  };

  validateNumber = (event) => {
    this.setState({
      validaciones: {
        ...this.validaciones,
        [event.target.name]: validate.validateNumber(event.target.value),
      },
    });
  };

  validateMail = (event) => {
    this.setState({
      validaciones: {
        ...this.validaciones,
        [event.target.name]: validate.validateMail(event.target.value),
      },
    });
  };

  validateId = (event) => {
    this.setState({
      validaciones: {
        ...this.validaciones,
        [event.target.name]: validate.validateId(event.target.value),
      },
    });
  }; */

  handleSubmit = (e) => {
    const {
      nombre1,
      nombre2,
      apellido1,
      apellido2,
      telefono,
      correo,
      id,
      tipoID,
      monto,
      estado,
    } = this.state;

    Axios.post("http://localhost:3001/Registro/api/insert", {
      Numero_Documento: id,
      Primer_Nombre: nombre1,
      Segundo_Nombre: nombre2,
      Primer_Apellido: apellido1,
      Segundo_Apellido: apellido2,
      Celular: telefono,
      Tipo_Documento: tipoID,
      Correo: correo,
      Saldo: monto,
      Estado: estado,
    }).then((res) => {
      console.log(res)
      alert('succesfull insert');
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <Container>
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label column="sm">
                      Escribe el primer Nombre{" "}
                    </Form.Label>
                    <Form.Control
                      name="nombre1"
                      onChange={this.actualizar}
                      placeholder="Primer Nombre"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label column="sm">El segundo nombre </Form.Label>
                    <Form.Control
                      name="nombre2"
                      onChange={this.actualizar}
                      placeholder="Segundo Nombre"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label column="sm">
                      Escribe el primer Apellido{" "}
                    </Form.Label>
                    <Form.Control
                      name="apellido1"
                      onChange={this.actualizar}
                      placeholder="Primer Apellido"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label column="sm">El segundo Apellido </Form.Label>
                    <Form.Control
                      name="apellido2"
                      onChange={this.actualizar}
                      placeholder="Segundo Apellido"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group>
                  <Form.Label column="sm"> Correo</Form.Label>
                  <Form.Control
                    name="correo"
                    onChange={this.actualizar}
                    placeholder=" ejemplo@email.com"
                    type="email"
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label column="sm"> Teléfono</Form.Label>
                  <Form.Control
                    name="telefono"
                    onChange={this.actualizar}
                    placeholder=" Numero telefónico"
                    type="tel"
                  />
                </Form.Group>
              </Row>
              <Row>
                <Col xs="auto">
                  <Form.Group>
                    <Form.Label column="sm"> Tipo de Id</Form.Label>
                    <Form.Control
                      name="tipoID"
                      as="select"
                      onChange={this.actualizar}
                    >
                      <option value="CC">CC</option>
                      <option value="TI">TI</option>
                      <option value="CE">CE</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs="auto">
                  <Form.Group>
                    <Form.Label column="sm">Identificacion </Form.Label>
                    <Form.Control
                      name="id"
                      onChange={this.actualizar}
                      placeholder="Identificacion"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                /* onSubmit={this.handleSubmit} */
                onClick={this.handleSubmit}
                variant="outline-dark"
                className="Button"
                type="submit"
              >
                Guardar
              </Button>
            </Form>

            <button onClick={this.handleSubmit}>probar</button>
            {!this.state.valid && (
              <Alert column="sm" variant="danger">
                <p style={{ fontSize: "14px" }}>
                  hay un error en algun campo, deben tener en cuenta lo
                  sguiente: tanto nombres como apellidos deben tener solo
                  caracteres alfabeticos, el correo debe contener el dominio de
                  '@eia.edu.co' el telefono debe contener unicamente numeros, el
                  telefono debe contener entre 7 y 12 caracteres
                </p>
              </Alert>
            )}
          </Container>
        </header>
      </div>
    );
  }
}

export default Formulario;

/* const {
  nombre1,
  nombre2,
  apellido1,
  apellido2,
  telefono,
  correo,
  id,
  tipoID,
  monto,
  estado,
} = this.state;
const v = sendStudent(
  nombre1,
  nombre2,
  apellido1,
  apellido2,
  telefono,
  correo,
  id,
  tipoID,
  monto,
  estado
);
this.setState({
  valid: v,
}); */
