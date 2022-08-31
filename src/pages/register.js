import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useDispatch } from 'react-redux';
import _ from "lodash";
import register from '../features/register';
import { Button } from 'react-bootstrap';
import {Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios'


function Register(props) {
 
    const[sno,setSno]=useState(0)
    const [cname,setCname]=useState("");
    const [caddress,setCaddress]=useState("");
    const [sname,setSname]=useState("");
    const [scontact,setScontact]=useState(0);
    const [sdname,setSdname]=useState();
    const [sdevent,setSdevent]=useState()
    const navigate=useNavigate();
const Submit= async (e)=>{
     let data={cname:cname,
      caddress:caddress,
      sname:sname,
      scontact:scontact,
     };
          await axios.post('https://skc-api-db.herokuapp.com/api/register',data)

   alert("data Posted")
  
   

  e.preventDefault();
}
   return (
        <div className='rform'>
            <h1>Register</h1> 
            <Form className='md-3' onSubmit={Submit()}>
            <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Your College Name</Form.Label>
        <Form.Control type="text" placeholder="Enter college Name" onChange={e=>setCname(e.target.value)}/> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Your College Address</Form.Label>
        <Form.Control type="text" placeholder="Enter college Address" onChange={e=>setCaddress(e.target.value)}/> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Staff Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Staff Name" onChange={e=>setSname(e.target.value)}/> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Staff Contact</Form.Label>
        <Form.Control type="text" placeholder="Enter Staff No" onChange={e=>setScontact(e.target.value)}/> 
      </Form.Group>
            <Button type='submit' className='mb-3'>SUBMIT</Button>
      </Form>
        </div>
    );
}

export default Register;