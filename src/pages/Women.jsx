import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './styles.css'


export default function Women() {
  const inlineStyles = {
    fontFamily: 'serif',
    fontSize: '25px',
  };
  const handleAddToCart = () => {    window.location.href = '/Cart';
};
  const shoes = [
    {
        id: 1,
        name: "Puma Anzarun Camo",
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2eaf301-687e-4235-9dc6-d1cb70f927be/blazer-mid-77-shoes-fW78R7.png',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP:'2,699',
      },
      {
        id: 2,
        name: "Puma Mayze ",
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/389862/02/sv01/fnd/IND/fmt/png/Mayze-UT-Women',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP: '5,399',
      },
      {
        id: 3,
        name: "Reebok",
        image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP:'399.99',
      },
      {
        id: 4,
        name: "Nike",
        image: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_2326%2Cy_2185/MTkzMjEwNDg3MDU4NDc0OTE1/usatsi_19186924.jpg',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP:'599.99',
      },
      
      {
        id: 5,
        name: "Clarks",
        image: 'https://media.istockphoto.com/id/1279005448/photo/diabetic-measurement-tools-shoe-and-apple-on-table.jpg?b=1&s=612x612&w=0&k=20&c=yfW05oUT0IBUqbUI3TCWmp7dy4aAfuFUPI5TFqt3NIA=',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP:'299.99',
      },
      {
        id: 6,
        name: "Asian",
        image: 'https://n3.sdlcdn.com/imgs/k/o/l/544X640_sharpened_2/ASIAN-HATTRICK-35-Navy-Men-SDL946102321-1-b11eb.webp',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP: '399.99',
      },
      {
          id: 7,
          name: "Skechers",
          image: 'https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechers_india/default/dw0d3e9d0d/images/large/196989229881-1.jpg?sw=310&sfrm=jpg',
          Catogory:"Women's shoes",
          Colour:'1 color',
          MRP:'2999.99',
        },
        {
          id: 8,
          name: "Asian",
          image: 'https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-wool-runnerjpg.jpg?q=h_1090,w_1938,x_0,y_0',
          Catogory:"Women's shoes",
          Colour:'1 color',
          MRP: '399.99',
        },
        
        {
          id: 9,
          name: "Nike ",
          image: 'https://dks.scene7.com/is/image/GolfGalaxy/18NIKWRMX270XXXXXLFS_Fantastic_Fuschia?qlt=70&wid=600&fmt=pjpeg',
          Catogory:"Women's shoes",
          Colour:'1 color',
          MRP:'999.99',
        },
        
        {
          id: 10,
          name: "Asian",
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/School_plimsolls.jpg',
          Catogory:"Women's shoes",
          Colour:'1 color',
          MRP:'99.99',
        },
        
          {
              id: 11,
              name: "CHSSIH Roller Skates",
              image: 'https://m.media-amazon.com/images/I/51ty31GwpZL._AC_UF1000,1000_QL80_.jpg',
              Catogory:"Women's shoes",
              Colour:'1 color',
              MRP:'10,999.99',
        },
  ];
  return (
    <div className="home-page">
    <Container>
    <h1 className="mx-3"style={{ textAlign: 'center' }}> <span style={inlineStyles}>Welcome to BOOTCART </span></h1><br></br>
  
      <Row>
        {shoes.map((shoe) => (
          <Col key={shoe.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="shoe-card">
              <Card.Img variant="top" src={shoe.image}style={{ width: '100%', height: '18rem' }}/>
              <Card.Body style={{ width: '100%', height: '14rem' }} >
                <Card.Title>{shoe.name}</Card.Title>
                <Card.Text>{shoe.Catogory}</Card.Text>
                <Card.Text>{shoe.Colour}</Card.Text>
                <Card.Text>₹{shoe.MRP}</Card.Text>
              <Button onClick={handleAddToCart} variant="primary" style={{ backgroundColor: 'black',borderColor: 'black' }}className=' mb-1 button-container me-5 ms-5' >Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  )
}
