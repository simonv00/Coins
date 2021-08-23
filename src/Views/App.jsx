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

export default class App extends Component {
    render() {
        return (

            <div>
                <Router>
                    <Switch>
                        <DefaultLayout path='/Registro' component={Registro}/>
                        <DefaultLayout path='/Visualizacion' component={Visualizacion}/>
                    </Switch>
                </Router>
            </div>

            /*             <Router>
                            <div>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="/inicio">inicio</Link>
                                        </li>
                                        <li>
                                            <Link to="/Registro">Regis</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <Switch>
                                    <Route path='/'>
            
                                    </Route>
                                    <Route path='/inicio'>
            
                                    </Route>
                                    <Route path='/Registro'>
                                        <Registro />
                                    </Route>
                                </Switch>
                            </div>
                        </Router> */
        )
    }
}
