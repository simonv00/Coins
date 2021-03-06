import React, { Component } from "react";
import "./App.css";
import "./ModMonto.css";
/* import 'bootstrap/dist/css/bootstrap.min.css' */
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Axios from "axios";
import ErrorMessage from "./ErrorMessage";

// este componente es el que contiene el formulario de estudiantes, tiene cada una de las variables que se pasan al Backend
// y ademas tiene un objeto de validacion, para sacar mensajes de error, en caso de que haya error en un formulario
class ModMonto extends Component {
  state = {
    tipoID: "",
    id: "",
    monto: 0,
    error: "",
    validaciones: {
      tipoID: true,
      id: true,
      monto: true,
      ItSaved: true,
    },
  };

  //refs
  tID = React.createRef();
  ID_ref = React.createRef();
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
      id,
      tipoID,
      monto,
    } = this.state;

    Axios.post("https://coins-implementacion-software.herokuapp.com/Registro/api/changeMonto", {
      Numero_Documento: id,
      Tipo_Documento: tipoID,
      Saldo: monto,
    }).then((res) => {
      const {
        isID,
        isMonto,
        ItSaved,
      } = res.data;
      console.log(ItSaved);
      this.setState({
        validaciones: {
          ...this.validaciones,
          id: isID,
          monto: isMonto,
          ItSaved: ItSaved,
        },
      });
      this.displayError();
    });
  };

  displayError = () => {
    const {
      id,
      ItSaved,
      monto,
    } = this.state.validaciones;
    if (!id) {
      this.setState({ error: "tienes un error en el id ingresado" });
    } else if (!ItSaved) {
      this.setState({ error: "El id no existe" });
    } else if (!monto) {
        this.setState({ error: "El monto ingresado no es valido" });
    }else {
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
                    <Form.Label column="sm">Id </Form.Label>
                    <Form.Control
                      id="id"
                      name="id"
                      onChange={this.actualizar}
                      placeholder="Identificacion"
                      ref={this.ID_ref}
                    />
                  </Form.Group>
                </Col>
                <Col xs="auto">
                  <Form.Group>
                    <Form.Label column="sm">Monto </Form.Label>
                    <Form.Control
                      id="monto"
                      name="monto"
                      onChange={this.actualizar}
                      placeholder="Monto"
                      type="number"
                      ref={this.mon}
                    />
                  </Form.Group>
                </Col>
              </Row>
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
            <div id="error4">
              <ErrorMessage id="error5">{this.state.error}</ErrorMessage>
            </div>
          </Container>
        </header>
      </div>
    );
  }
}

export default ModMonto;
