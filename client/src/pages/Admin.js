import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className='d-flex flex-colemn'>
      <Button
        variant='outline-dark' 
        className='mt-3'
        onClick={() => setTypeVisible(true)}
        >Add type</Button>
      <Button
        variant='outline-dark' 
        className='mt-3'
        onClick={() => setBrandVisible(true)}
        >Add brand</Button>
      <Button
        variant='outline-dark' 
        className='mt-3'
        onClick={() => setDeviceVisible(true)}
        >Add device</Button>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
    </Container>
  );
}

export default Admin;
