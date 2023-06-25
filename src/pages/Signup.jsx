import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';


export default function AddItem() {

  const inlineStyles = {
    fontFamily: 'serif',
    fontSize: '25px',
  };
        const handleClick = () => {
          alert('Signed Up');
        };
    
    return (
    <div>
      <Container className="">
        <h1 className="mx-3"style={{ textAlign: 'center' }}> <span style={inlineStyles}>BOOTCART Signup</span></h1><br></br>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="title"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="desc" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="text" name="desc" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" name="desc" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Pin</Form.Label>
            <Form.Control type="text" name="image" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" name="image" />
          </Form.Group>
          <Link to='/'>
          <Button variant="primary" onClick={handleClick} type="submit">
            Sign UP
          </Button></Link>
        </Form>
      </Container>
    </div>
  );

}