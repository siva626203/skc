import React from "react";
import {Route,Redirect}from 'react-router-dom'
const Productedadmin=({component,...rest})=>{
var Rendercomponet=component;
return(
    <Route
        {...rest} 
        render={
            props=>{
                true ?(<Rendercomponet {...props}/>):(<Redirect
                to={{pathname:"/login"}}
                />)
            }
        }
    />
)
}