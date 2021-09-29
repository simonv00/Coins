import React, { Component } from "react";
import "./App.css";
import "./Formulario.css";
/* import 'bootstrap/dist/css/bootstrap.min.css' */
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import Axios from "axios";

const Alerta = ({ children }) => {
  const estilo = {
    backgroundColor: "pink",
    borderRadius: "0.2em",
    border: children ? "1px solid darkred" : "",
  };

  return (
    <div style={estilo}>
      <p>{children}</p>
    </div>
  );
};

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
    error: "",
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

  //refs
  nom1 = React.createRef();
  nom2 = React.createRef();
  ape1 = React.createRef();
  ape2 = React.createRef();
  corr = React.createRef();
  tID = React.createRef();
  ID_ref = React.createRef();
  tel = React.createRef();
  mon = React.createRef();

  actualizar = (event) => {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
      const {
        isNombre1,
        isNombre2,
        isApellido1,
        isApellido2,
        isCorreo,
        isTelefono,
        isID,
        isMonto,
        ItSaved,
      } = res.data;
      console.log(ItSaved);
      this.setState({
        validaciones: {
          ...this.validaciones,
          nombre1: isNombre1,
          nombre2: isNombre2,
          apellido1: isApellido1,
          apellido2: isApellido2,
          correo: isCorreo,
          telefono: isTelefono,
          id: isID,
          monto: isMonto,
        },
      });
      this.displayError();
    });
  };

  displayError = () => {
    const { nombre1, nombre2, apellido1, apellido2, telefono, correo, id } =
      this.state.validaciones;
    if (!id) {
      this.setState({ error: "tienes un error en tu id" });
    } else if (!telefono) {
      this.setState({ error: "tienes un error en tu telefono" });
    } else if (!correo) {
      this.setState({ error: "tienes un error en tu correo" });
    } else if (!apellido2) {
      this.setState({ error: "tienes un error en tu segundo apellido" });
    } else if (!apellido1) {
      this.setState({ error: "tienes un error en primer apellido" });
    } else if (!nombre2) {
      this.setState({ error: "tienes un error en tu segundo nombre" });
    } else if (!nombre1) {
      this.setState({ error: "tienes un error en tu primer nombre" });
    } else {
      window.location.reload();
    }
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
                      ref={this.nom1}
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
                      ref={this.nom2}
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
                      ref={this.ape1}
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
                      ref={this.ape2}
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
                    ref={this.corr}
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label column="sm"> Teléfono</Form.Label>
                  <Form.Control
                    name="telefono"
                    onChange={this.actualizar}
                    placeholder=" Numero telefónico"
                    type="tel"
                    ref={this.tel}
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
                      ref={this.tID}
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
                      ref={this.ID_ref}
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
            <div><Alerta>{this.state.error}</Alerta></div>
            <button onClick={this.handleSubmit}>probar</button>
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
