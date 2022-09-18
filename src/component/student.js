import React, { Fragment } from "react"
import { useSelector } from "react-redux";

class Student extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return<Fragment>
            {(currentUser.status==="college")?<h1>Student Form</h1>:null}
            

        </Fragment>
    }
}
export default Student