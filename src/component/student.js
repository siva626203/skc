import React, { Fragment } from "react"
import { useSelector } from "react-redux";
import { login } from "../features/user";

function Student(){
    let currentUser=useSelector(state=>state.user.value)
    console.log(currentUser.status)
   return<Fragment>
    {(currentUser.status==="college")?<h1>Student Form</h1>
    
    : null}
   </Fragment>
}

export default Student;