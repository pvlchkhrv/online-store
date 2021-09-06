import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/Star_big.png';

const DevicePage = () => {
  const device = { id: 1, name: '12 pro', price: 1200, rating: 5, img: 'https://images.samsung.com/uk/smartphones/galaxy-s21/buy/02_ImageCarousel/01_FamilyShot/S21_Family_KV_PC_img.jpg?imwidth=2560' }
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-xolumn align-items-center justify-content-around'
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>From {device.price} $</h3>
            <Button variant='outline-dark'>Add to basket</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DevicePage;