import React, { Component } from 'react'
import {
    Route,
} from "react-router-dom";
import Barra from '../../Componentes/Barra';

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


