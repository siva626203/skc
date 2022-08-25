import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function Login() {
  const [show, setShow] = useState(false);
  const [fshow, fsetShow] = useState(false);
  const [ashow, asetShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fhandleClose = () => fsetShow(false);
  const fhandleShow = () => fsetShow(true);
  const ahandleClose = () => asetShow(false);
  const ahandleShow = () => asetShow(true);

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