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
    placas: [],
    documentRespuesta: "",
    validaciones: {
      tipoID: true,
      id: true,
      placas: true,
      ItSaved: true,
    },
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      id,
    } = this.state;

    const body = {
        document: id.toString()
    }
    console.log(body)
    Axios.post("https://jafemotos.herokuapp.com/person2/getByDocument", body).then((res) => {
        console.log(res)
        const datos = []
        var doc;
        if(res.data[0] !== undefined){
          doc = res.data[0].document
            for(let k = 0; k < res.data[0].vehicles.length; k++){
                datos.push(res.data[0].vehicles[k].plate)
                this.insertInDB(res.data[0].vehicles[k].plate, doc);
            }

        }
        console.log(datos)
        console.log(doc)
      this.setState({
        placas: datos,
        documentRespuesta: doc
      });
      console.log(this.state.placas)
      console.log(this.state.documentRespuesta)
      this.displayError();
    }).catch((error)=>{
        console.error(error)
    });


    
  };

  insertInDB = async (placa,id) => {
    await Axios.post("https://coins-implementacion-software.herokuapp.com/Registro/api/agregarPlaca", {
      Numero_Documento: id,
      Placa: placa,
    }).then((res) => {
      const {
        isID,
        isPlaca,
        ItSaved,
      } = res.data;
      console.log(res.data)
      console.log(isID);
      this.setState({
        validaciones: {
          ...this.validaciones,
          id: isID,
          placas: isPlaca,
          ItSaved: ItSaved,
        },
      });
      this.displayError();
    });
  }

  displayError = () => {
    if (this.state.placas.length < 1) {
      this.setState({ error: "Esa persona no existe" });
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
            <div id="Placas"><p>Placas: </p>{this.state.placas.map(number=>(
              <p key={number}>{number}</p>
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
