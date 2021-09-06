import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { SHOP_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom'
import Button from '@restart/ui/esm/Button';
import {observer} from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: 'white' }}>BuyTheDevice</NavLink>
        {
          user.isAuth
            ? <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant='outline-light'>Admin panel</Button>
              <Button variant='outline-light' onClick={() => user.setIsAuth(false)} className='ml-4'>Logout</Button>
            </Nav>
            : <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Authorization</Button>
            </Nav>
        }
      </Container>
    </Navbar>
  );
})

export default NavBar;