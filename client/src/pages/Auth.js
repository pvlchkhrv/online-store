import React from 'react';
import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation } from 'react-router-dom';


const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Enter you email...'
          />
          <Form.Control
            className='mt-3'
            placeholder='Enter you password...'
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {
              isLogin
                ? <div>No account yet? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink></div>
                : <div>Go to <NavLink to={LOGIN_ROUTE}>Login</NavLink></div>

            }

            <Button variant='outline-success'>
              {
                isLogin ? 'Login' : 'Register'
              }
            </Button>
          </Row>
        </Form>
      </Card>

    </Container>
  );
}

export default Auth;
