import React from 'react'
import {
    Route,
} from "react-router-dom";
import Barra from '../../Componentes/Barra';

// esto es lo que se renderiza en todas las paginas por defecto
function Default ({children})  {
        return (
            <div>
                <Barra/>
                {children}
            </div>
        )
}


export default function DefaultLayout({ component: Component, ...rest }) {

    return (
        <Route {...rest} render={props => (
        <Default>
            <Component {...props} />
        </Default>)} 
        />


    )
}


