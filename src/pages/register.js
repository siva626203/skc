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
import { useFormik } from 'formik'
import * as yup from 'yup'



function Register() {
  const formik=useFormik({
    initialValues:{
      cname:"",
      caddress:"",
      sname:"",
      scontact:0,
      stno:0
    },validationSchema:yup.object({
      cname:yup.string()
      .required("College Name Is required"),
      caddress:yup.string()
      .required("College Address is required"),
      sname:yup.string()
      .required("Staff Name is required"),
      scontact:yup.number()
      .required("Staff Contact Number is required"),
      stno:yup.number()
      .required("Student No is required")
      .min(3,"minimum 3 participation")
      .max(16,"maximum 16 participation")
    }),
    onSubmit:(data)=>{
      console.log(data)
      axios.post()
    }
  });
   return (
        <div className='rform'>
            <h1>Register</h1> 
            <Form className='md-3' onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Your College Name</Form.Label>
        <Form.Control type="text" placeholder="Enter college Name" onChange={formik.handleChange} name="cname" value={formik.values.cname}/> 
        {formik.errors.cname ?<p className='text-danger'>{formik.errors.cname}</p>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Your College Address</Form.Label>
        <Form.Control type="text" placeholder="Enter college Address" onChange={formik.handleChange} name="caddress" value={formik.values.caddress}/> 
        {formik.errors.caddress ?<p className='text-danger'>{formik.errors.caddress}</p>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Staff Name</Form.Label> 
       <Form.Control type="text" placeholder="Enter Staff Name" onChange={formik.handleChange} name="sname" value={formik.values.sname}/> 
       {formik.errors.sname ?<p className='text-danger'>{formik.errors.sname}</p>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Staff Contact</Form.Label>
        <Form.Control type="text" placeholder="Enter Staff No" onChange={formik.handleChange} name="scontact" value={formik.values.scontact}/> 
        {formik.errors.scontact ?<p className='text-danger'>{formik.errors.scontact}</p>:null}
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter No of Students Participation</Form.Label>
        <Form.Control type="text" placeholder="Enter No of Students" onChange={formik.handleChange} name="stno" value={formik.values.stno}/> 
        {formik.errors.stno ?<p className='text-danger'>{formik.errors.stno}</p>:null}
      </Form.Group>
            <Button type='submit' className='mb-3'>SUBMIT</Button>
      </Form>
        </div>
    );
}

export default Register;