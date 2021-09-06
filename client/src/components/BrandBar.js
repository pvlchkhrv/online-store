import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row, Card } from 'react-bootstrap';
import { Context } from '../index';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className='d-flex'>
      {
        device.brands.map(brand =>
          <Card
            key={brand.id}
            className='p-3'
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'success' : 'light'}
            style={{ cursor: 'pointer', width: 100}}
          >
            {brand.name}
          </Card>
        )
      }
    </Row >
  );
}
)
export default BrandBar;