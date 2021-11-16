import React, { Component } from "react";
import "./App.css";
import "./VehiculoDoc.css";
/* import 'bootstrap/dist/css/bootstrap.min.css' */
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Axios from "axios";
import ErrorMessage from "./ErrorMessage";

// este componente es el que contiene el formulario de estudiantes, tiene cada una de las variables que se pasan al Backend
// y ademas tiene un objeto de validacion, para sacar mensajes de error, en caso de que haya error en un formulario
class VehiculoDoc extends Component {
  state = {
    id: "",
    error: "",
    validaciones: {
      id: true,
    },
    placas: [],
    documentRespuesta: "",
  };

  //refs
  ID_ref = React.createRef();

  handelRefresh = (e) =>{
    window.location.reload();
  }

  actualizar = (event) => {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      id,
    } = this.state;

    const body = {
        document: id.toString()
    }
    Axios.post("https://coins-implementacion-software.herokuapp.com/Registro/api/agregarPlaca", body).then((res) => {
        console.log(res)
        const datos = []
        const doc = res.data[0].document
        for(let k = 0; k < res.data[0].vehicles.length; k++){
            datos.push(res.data[0].vehicles[k].plate)
        }
        console.log(datos)
        console.log(document)
      this.setState({
        validaciones: {
          ...this.validaciones,
          placas: datos,
          documentRespuesta = doc
        },
      });
      this.displayError();
    });
  };

  displayError = () => {
    const {
      placas,
      doc,
    } = this.state.validaciones;
    if (doc == null) {
      this.setState({ error: "Ese ID no existe" });
    } else if (placas.length < 1) {
      this.setState({ error: "Esa persona no tiene placas" });
    } else {
      this.setState({ error: "" });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <Container>
            <Form>
              <Row>
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
              <Button
                onClick={this.handelRefresh}
                variant="outline-dark"
                className="Button"
                type="clean"
                id="botonClean"
              >
                Limpiar
              </Button>
              <Button
                onClick={this.handleSubmit}
                variant="outline-dark"
                className="Button"
                type="submit"
                id="boton"
              >
                Enviar
              </Button>
            </Form>
            <div id="Placas">{this.state.placas.map(number=>(
              <p>{number}</p>
            ))} </div>
            <div id="error6">
              <ErrorMessage id="error7">{this.state.error}</ErrorMessage>
            </div>
          </Container>
        </header>
      </div>
    );
  }
}

export default VehiculoDoc;