import React, { Component } from "react";
import "./App.css";
import "./Formulario.css";
/* import 'bootstrap/dist/css/bootstrap.min.css' */
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Axios from "axios";
import ErrorMessage from "./ErrorMessage";


// este componente es el que contiene el formulario de estudiantes, tiene cada una de las variables que se pasan al Backend
// y ademas tiene un objeto de validacion, para sacar mensajes de error, en caso de que haya error en un formulario
class Formulario extends Component {
  state = {
    displayStudent: false,
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
    esEstudiante: false,
    carrera: "",
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
      esEstudiante: true,
      carrera: true,
      ItSaved: true,
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
  checkStudent = React.createRef();

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.esEstudiante !== this.state.esEstudiante) {
      this.setState({
        esEstudiante: this.state.esEstudiante,
      });
    }
  };

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
      esEstudiante,
      carrera,
    } = this.state;

    Axios.post("https://coins-implementacion-software.herokuapp.com/Registro/api/insert", {
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
      esEstudiante: esEstudiante,
      carrera: carrera,
    }, {
      headers: {
             "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
             "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
           }}).then((res) => {
      const {
        isNombre1,
        isNombre2,
        isApellido1,
        isApellido2,
        isCorreo,
        isTelefono,
        isID,
        isMonto,
        esEstudiante,
        isCarrera,
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
          ItSaved: ItSaved,
          esEstudiante: esEstudiante,
          carrera: isCarrera,
        },
      });
      this.displayError();
    });
  };

  displayError = () => {
    const {
      nombre1,
      nombre2,
      apellido1,
      apellido2,
      telefono,
      correo,
      id,
      ItSaved,
      carrera,
    } = this.state.validaciones;
    if (!nombre1) {
      this.setState({ error: "tienes un error en tu primer nombre" });
    } else if (!nombre2) {
      this.setState({ error: "tienes un error en tu segundo nombre" });
    } else if (!apellido1) {
      this.setState({ error: "tienes un error en primer apellido" });
    } else if (!apellido2) {
      this.setState({ error: "tienes un error en tu segundo apellido" });
    } else if (!correo) {
      this.setState({ error: "tienes un error en tu correo" });
    } else if (!telefono) {
      this.setState({ error: "tienes un error en tu telefono" });
    } else if (!id) {
      this.setState({ error: "tienes un error en tu id" });
    } else if (!carrera) {
      this.setState({ error: "tienes un error en el campo de carrera" });
    } else if (!ItSaved) {
      this.setState({ error: "El id o el correo esta repedito, prueba otro" });
    } else {
      window.location.reload();
    }
  };

  render() {
    var { esEstudiante } = this.state;
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
                      id="nombre1"
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
                      id="nombre2"
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
                      id="apellido1"
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
                      id="apellido2"
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
                    id="correo"
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
                    id="telefono"
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
                      id="tipoID"
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
                      id="id"
                      name="id"
                      onChange={this.actualizar}
                      placeholder="Identificacion"
                      ref={this.ID_ref}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="div-checkbox">
                <label>Es estudiante actual</label>
                <input
                  ref={this.checkStudent}
                  type="checkbox"
                  name="checkStudent"
                  id="checkStudent"
                  className="checkbox"
                  onChange={(e) => {
                    this.setState({ esEstudiante: e.target.checked });
                  }}
                />
              </div>
              {esEstudiante && (
                <div>
                  <Form.Group>
                    <Form.Label column="sm">
                      Escribe la carrera del estudiante{" "}
                    </Form.Label>
                    <Form.Control
                      id="carrera"
                      name="carrera"
                      onChange={this.actualizar}
                      placeholder="Carrera"
                      ref={this.checkStudent}
                    />
                  </Form.Group>
                </div>
              )}

              <Button
                /* onSubmit={this.handleSubmit} */
                onClick={this.handleSubmit}
                variant="outline-dark"
                className="Button"
                type="submit"
                id="boton"
              >
                Guardar
              </Button>
            </Form>
            <div id="error3">
              <ErrorMessage id="error2">{this.state.error}</ErrorMessage>
            </div>
          </Container>
        </header>
      </div>
    );
  }
}

export default Formulario;
