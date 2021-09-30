import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Registro from './Registro'
import Visualizacion from '../Componentes/Visualizacion'
import DefaultLayout from './Layout/Default'

//Aplicacion principal
export default class App extends Component {
    render() {
        return (

            <div>
                <Router>
                    <Switch>
                        <DefaultLayout path='/' exact component={Registro}/>
                        <DefaultLayout path='/Visualizacion' exact component={Visualizacion}/>
                    </Switch>
                </Router>
            </div>

        )
    }
}
