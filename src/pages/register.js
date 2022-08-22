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
    const [sdname,setSdname]=useState({});
    const [sdevent,setSdevent]=useState({})
    const navigate=useNavigate();
const Submit= async ()=>{
  try {
     
    await axios.post('https://skc-api-db.herokuapp.com/api/register',{
      cname:cname,
      caddress:caddress,
      sname:sname,
      scontact:scontact,
      sdname:[
        {name:sdname}
         ],
      sdevent:[
        {event:sdevent}
      ],
    })

   alert("data Posted")
  
   
  } catch (error) {
   
    console.log(error)
  }
}
    return (
        <div className='rform'>
            <h1>Register</h1>
            <Form className='md-3'>
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
      <Form.Group className="mb-3" onChange={e=>setSno(e.target.value)}>
        <Form.Label>Enter Students Details</Form.Label>
        <Form.Select>
        <option>0</option> 
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </Form.Select>
      </Form.Group>
      {_.times(sno, (i) => (
            <ul> <Row>
            <Col>
              <Form.Control placeholder="Name" onChange={e=>setSdname(e.target.value)}/>
            </Col>

            <Col>
            <Form.Group onChange={e=>setSdevent(e.target.value)}>
              <Form.Select>
                <option value='Web Design'>Web Design</option>
                <option value="Dance">Dance</option>
                <option value="Debuging">Debuging</option>
                <option value="Paper Presentation">Paper Presentation</option>
                <option value="Others">Others</option>
              </Form.Select>
              </Form.Group>
            </Col>
          </Row></ul>
          ))}
          
            <Button type='submit' className='mb-3'  onClick={Submit()}>SUBMIT</Button>
          
      </Form>
        </div>
    );
}

export default Register;