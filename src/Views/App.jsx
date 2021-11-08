import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import Registro from './Registro'
import Visualizacion from '../Componentes/Visualizacion'
import DefaultLayout from './Layout/Default'
import Monto from './Monto'
import Placa from './Placa'
import Mensajes from './Mensajes'

//Aplicacion principal
export default class App extends Component {
    render() {
        return (

            <div>
                <Router>
                    <Switch>
                        <DefaultLayout path='/' exact component={Registro}/>
                        <DefaultLayout path='/Visualizacion' exact component={Visualizacion}/>
                        <DefaultLayout path='/Monto' exact component={Monto}/>
                        <DefaultLayout path='/Placa' exact component={Placa}/>
                        <DefaultLayout path='/Mensajes' exact component={Mensajes}/>
                    </Switch>
                </Router>
            </div>

        )
    }
}
