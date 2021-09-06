import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { NavLink, useHistory} from 'react-router-dom'
import Button from '@restart/ui/esm/Button';
import {observer} from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: 'white' }}>BuyTheDevice</NavLink>
        {
          user.isAuth
            ? <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant='outline-light' onClick={() => history.push(ADMIN_ROUTE)}>Admin panel</Button>
              <Button variant='outline-light' onClick={() => history.push(LOGIN_ROUTE)} className='ml-4'>Logout</Button>
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