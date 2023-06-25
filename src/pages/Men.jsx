import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './styles.css'

export default function Men() {
    const inlineStyles = {
        fontFamily: 'serif',
        fontSize: '25px',
      };
      const handleAddToCart=()=>{
 
        window.location.href='/Cart'
        }
      const shoes = [
        {
            id: 1,
            name: "Nike Blazer Mid'77",
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2eaf301-687e-4235-9dc6-d1cb70f927be/blazer-mid-77-shoes-fW78R7.png',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '5999.99',
        },
        {
            id: 2,
            name: "Nike Air Max 90",
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9e940d3-2192-434e-a017-072303ce2f14/air-max-90-shoes-N7Tbw0.png',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '6999.99',
        },
        {
            id: 3,
            name: "Puma Twitch Runner",
            image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1200,h_1200/global/377981/02/sv01/fnd/IND/fmt/png/Twitch-Runner-Fresh-Unisex-Running-Shoes',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '4999.99',
        },
        {
            id: 4,
            name: "ULTRABOOST LIGHT SHOES",
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/62db17e107d847a6be894db8d1057ee5_9366/Ultraboost_Light_Shoes_Blue_IE1772_01_standard.jpg',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '12999.99',
        },
        {
            id: 5,
            name: "SUPERSTAR SHOES",
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '2299.99',
        },
        {
            id: 6,
            name: "SUPERSTAR XLG SHOES",
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a78564564f046a1ba44eeed2e9d95d9_9366/Superstar_XLG_Shoes_Black_IE5195_01_standard.jpg',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1299.99',
        },
        {
            id: 7,
            name: "Mens Reebok Gusto",
            image: 'https://imagescdn.reebok.in/img/app/product/8/874703-10445808.jpg?auto=format,compress',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1499.99',
        },
        {
            id: 8,
            name: " Reebok Zig Dynamica",
            image: 'https://imagescdn.reebok.in/img/app/product/8/871873-10388377.jpg?auto=format,compress',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1999.99',
        },
        {
            id: 9,
            name: "Reebok Boston Runner",
            image: 'https://imagescdn.reebok.in/img/app/product/8/871847-10387794.jpg?auto=format,compress',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '2999.99',
        },
        {
            id: 10,
            name: "Nike Air Max Plus",
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bc4ea557-e918-4ff5-af44-4bc71f97eb28/air-max-plus-shoes-pFKxz0.png',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '15999.99',
        },
        {
            id: 11,
            name: "Nike Blazer Mid'77",
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2eaf301-687e-4235-9dc6-d1cb70f927be/blazer-mid-77-shoes-fW78R7.png',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1099.99',
        },
        {
            id: 12,
            name: "Nike Air Max 90",
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9e940d3-2192-434e-a017-072303ce2f14/air-max-90-shoes-N7Tbw0.png',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1299.99',
        },
        {
            id: 13,
            name: "Puma Twitch Runner",
            image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1200,h_1200/global/377981/02/sv01/fnd/IND/fmt/png/Twitch-Runner-Fresh-Unisex-Running-Shoes',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '2999.99',
        },
        {
            id: 14,
            name: "ULTRABOOST LIGHT SHOES",
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/62db17e107d847a6be894db8d1057ee5_9366/Ultraboost_Light_Shoes_Blue_IE1772_01_standard.jpg',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1229.99',
        },
        {
            id: 15,
            name: "SUPERSTAR SHOES",
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1399.99',
        },
        {
            id: 16,
            name: "SUPERSTAR XLG SHOES",
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a78564564f046a1ba44eeed2e9d95d9_9366/Superstar_XLG_Shoes_Black_IE5195_01_standard.jpg',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1299.99',
        },
        {
            id: 17,
            name: "Mens Reebok Gusto",
            image: 'https://imagescdn.reebok.in/img/app/product/8/874703-10445808.jpg?auto=format,compress',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1299.99',
        },
        {
            id: 18,
            name: " Reebok Zig Dynamica",
            image: 'https://imagescdn.reebok.in/img/app/product/8/871873-10388377.jpg?auto=format,compress',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '9999.99',
        },
        {
            id: 19,
            name: "Reebok Boston Runner",
            image: 'https://imagescdn.reebok.in/img/app/product/8/871847-10387794.jpg?auto=format,compress',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '999.99',
        },
        {
            id: 20,
            name: "Nike Air Max Plus",
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bc4ea557-e918-4ff5-af44-4bc71f97eb28/air-max-plus-shoes-pFKxz0.png',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '9999.99',
        },
        {
            id: 21,
            name: "Nike Blazer Mid'77",
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2eaf301-687e-4235-9dc6-d1cb70f927be/blazer-mid-77-shoes-fW78R7.png',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1999.99',
        },
        {
            id: 22,
            name: "Nike Air Max 90",
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9e940d3-2192-434e-a017-072303ce2f14/air-max-90-shoes-N7Tbw0.png',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '12999.99',
        },
        {
            id: 23,
            name: "Puma Twitch Runner",
            image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1200,h_1200/global/377981/02/sv01/fnd/IND/fmt/png/Twitch-Runner-Fresh-Unisex-Running-Shoes',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1999.99',
        },
        {
            id: 24,
            name: "ULTRABOOST LIGHT SHOES",
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/62db17e107d847a6be894db8d1057ee5_9366/Ultraboost_Light_Shoes_Blue_IE1772_01_standard.jpg',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1999.99',
        },
        {
            id: 25,
            name: "SUPERSTAR SHOES",
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1999.99',
        },
        {
            id: 26,
            name: "SUPERSTAR XLG SHOES",
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a78564564f046a1ba44eeed2e9d95d9_9366/Superstar_XLG_Shoes_Black_IE5195_01_standard.jpg',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '1299.99',
        },
        {
            id: 27,
            name: "Mens Reebok Gusto",
            image: 'https://imagescdn.reebok.in/img/app/product/8/874703-10445808.jpg?auto=format,compress',
            Catogory: "Men's shoes",
    Colour: '1 color',
            MRP: '11299.99',
        },
        {
            id: 28,
            name: " Reebok Zig Dynamica",
            image: 'https://imagescdn.reebok.in/img/app/product/8/871873-10388377.jpg?auto=format,compress',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '9999.99',
        },
        {
            id: 29,
            name: "Reebok Boston Runner",
            image: 'https://imagescdn.reebok.in/img/app/product/8/871847-10387794.jpg?auto=format,compress',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '999.99',
        },
        {
            id: 30,
            name: "Nike Air Max Plus",
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bc4ea557-e918-4ff5-af44-4bc71f97eb28/air-max-plus-shoes-pFKxz0.png',
            Catogory: "Men's shoes",
            Colour: '1 color',
            MRP: '999.99',
        },
    
    ];
 
return (
  <div>
  <Container>
  <h1 className="mx-3"style={{ textAlign: 'center' }}> <span style={inlineStyles}>Welcome to BOOTCART </span></h1><br></br>
      <Row>
        {shoes.map((shoe) => (
          <Col key={shoe.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="shoe-card">
              <Card.Img variant="top" src={shoe.image}style={{ width: '100%', height: '15rem' }}/>
              <Card.Body style={{ width: '100%', height: '14rem' }} >
                <Card.Title>{shoe.name}</Card.Title>
                <Card.Text>{shoe.Catogory}</Card.Text>
                <Card.Text>{shoe.Colour}</Card.Text>
                <Card.Text>₹{shoe.MRP}</Card.Text>
              <Button onClick={handleAddToCart} variant="primary" style={{ backgroundColor: 'black',borderColor: 'black' }}className='mb-1 button-container me-5 ms-5' >Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
      </div>
)
}
