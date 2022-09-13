import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import * as yup from 'yup'
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
import { login } from '../features/user';
function Login() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [show, setShow] = useState(false);
  const [fshow, fsetShow] = useState(false);
  const [ashow, asetShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fhandleClose = () => fsetShow(false);
  const fhandleShow = () => fsetShow(true);
  const ahandleClose = () => asetShow(false);
  const ahandleShow = () => asetShow(true);
const formik=useFormik({initialValues:{
username:"",
password:""
},
validationSchema:yup.object({
  username:yup.string()
  .required("This field is required"),
  password:yup.string()
  .required("*")
}),
onSubmit:(data)=>{
  console.log(data)
  axios.post("https://skc-api-db.herokuapp.com/api/auth/admin/login",data)
  .then((req,res)=>{
    
    console.log(req.data)
    
    if(req.data==="user not found"){
      toast.error(req.data)
    }else{
      dispatch(login({username:formik.values.username}))
      toast.success("Welcome to Skc Admin")
      navigate("/dashboard")

    }
    
  }).catch((err)=>{
    console.log(err)
  })
}


})
  return (
    < div className='login'>
    < div className='cl-login'>
      <Button variant="primary" onClick={handleShow}>
        College's Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>College's Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Enter Your UserName</Form.Label>
                    <Form.Control type='text' required/>
                    <Form.Label>Enter Your password</Form.Label>
                    <Form.Control type='password' required/>
                    <Button type='submit' variant='success'>SUBMIT</Button>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      < div className='a-login'>
      <Button variant="primary" onClick={ahandleShow}>
        Admin Login
      </Button>
      <Modal show={ashow} onHide={ahandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Your UserName</Form.Label>
                    <Form.Control type='text' onChange={formik.handleChange} required name="username" value={formik.values.username}/>
                    {<p className='text-danger'>{formik.errors.username}</p>}
                    <Form.Label>Enter Your password</Form.Label>
                    <Form.Control type="text" required name="password" value={formik.values.password} onChange={formik.handleChange}/>
                    {<p className='text-danger'>{formik.errors.password}</p>}
                    <Button type='submit' variant='success'>SUBMIT</Button>
                  
                </Form.Group>
            </Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ahandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      < div className='f-login'>
      <Button variant="primary" onClick={fhandleShow}>
       Faculty Login
      </Button>


      <Modal show={fshow} onHide={fhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Faculty Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
                <Form.Group>
                    <Form.Label>Enter Your UserName</Form.Label>
                    <Form.Control type='text' required/>
                    <Form.Label>Enter Your password</Form.Label>
                    <Form.Control type='password' required/>
                    <Button type='submit' variant='success'>SUBMIT</Button>
                </Form.Group>
            </Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={fhandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
    

  );
}
export default Login;