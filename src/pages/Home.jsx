import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './styles.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
 
  const handleSubmit = (cardDetails) => {
    console.log(cardDetails);
    fetch("http://localhost:5000/home", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(cardDetails),
      
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "ok") {
          alert("Card details submitted successfully!");
          // Redirect to the cart page
          navigate('/Cart');
        } else {
          alert("Failed to submit card details!");
        }
      });
  };
  
      
  const inlineStyles = {
    fontFamily: 'serif',
    fontSize: '25px',
  };
  const shoes = [
    {
      id: 1,
      name: "Nike Blazer Mid'77",
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2eaf301-687e-4235-9dc6-d1cb70f927be/blazer-mid-77-shoes-fW78R7.png',
      Catogory:"Men's shoes",
      Colour:'1 color',
      MRP:'99.99',
    },
    {
      id: 2,
      name: "Nike Air Max 90",
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9e940d3-2192-434e-a017-072303ce2f14/air-max-90-shoes-N7Tbw0.png',
      Catogory:"Men's shoes",
      Colour:'1 color',
      MRP: '129.99',
    },
    {
      id: 3,
      name: "SUPERSTAR SHOES",
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '1999.99',
    },
    {
      id: 4,
      name: "Steve Madden",
      image: 'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/q/h/z/7-mrj1852-7-aadi-black-original-imagdwgudezandfs-bb.jpeg?q=90&crop=false',
      Catogory:"Men's shoes",
      Colour:'1 color',
      MRP: '1299.99',
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
        name: "Puma Twitch Runner",
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1200,h_1200/global/377981/02/sv01/fnd/IND/fmt/png/Twitch-Runner-Fresh-Unisex-Running-Shoes',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '2999.99',
    },
    {
        id: 10,
        name: "ULTRABOOST LIGHT ",
image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/62db17e107d847a6be894db8d1057ee5_9366/Ultraboost_Light_Shoes_Blue_IE1772_01_standard.jpg',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '1229.99',
    },
    {
        id: 11,
        name: "SUPERSTAR SHOES",
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '1399.99',
    },
    {
        id: 12,
        name: "SUPERSTAR XLG SHOES",
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a78564564f046a1ba44eeed2e9d95d9_9366/Superstar_XLG_Shoes_Black_IE5195_01_standard.jpg',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '1299.99',
    },
    {
        id: 13,
        name: "Mens Reebok Gusto",
        image: 'https://imagescdn.reebok.in/img/app/product/8/874703-10445808.jpg?auto=format,compress',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '1299.99',
    },
    {
        id: 14,
        name: " Reebok Zig Dynamica",
        image: 'https://imagescdn.reebok.in/img/app/product/8/871873-10388377.jpg?auto=format,compress',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '9999.99',
    },
    {
        id: 15,
        name: "Reebok Boston Runner",
        image: 'https://imagescdn.reebok.in/img/app/product/8/871847-10387794.jpg?auto=format,compress',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '999.99',
    },
    {
        id: 16,
        name: "Nike Air Max Plus",
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bc4ea557-e918-4ff5-af44-4bc71f97eb28/air-max-plus-shoes-pFKxz0.png',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '9999.99',
    },
    {
        id: 17,
        name: "Nike Blazer Mid'77",
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2eaf301-687e-4235-9dc6-d1cb70f927be/blazer-mid-77-shoes-fW78R7.png',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '1999.99',
    },
    {
        id: 18,
        name: "Nike Air Max 90",
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9e940d3-2192-434e-a017-072303ce2f14/air-max-90-shoes-N7Tbw0.png',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '12999.99',
    },
    {
        id: 19,
        name: "Puma Twitch Runner",
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1200,h_1200/global/377981/02/sv01/fnd/IND/fmt/png/Twitch-Runner-Fresh-Unisex-Running-Shoes',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '1999.99',
    },
    {
        id: 20,
        name: "ULTRABOOST LIGHT ",
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/62db17e107d847a6be894db8d1057ee5_9366/Ultraboost_Light_Shoes_Blue_IE1772_01_standard.jpg',
        Catogory: "Men's shoes",
        Colour: '1 color',
        MRP: '1999.99',
    },    
    {
      id: 21,
      name: "SUPERSTAR SHOES",
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '1999.99',
  },
  {
      id: 22,
      name: "SUPERSTAR XLG SHOES",
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a78564564f046a1ba44eeed2e9d95d9_9366/Superstar_XLG_Shoes_Black_IE5195_01_standard.jpg',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '1299.99',
  },
  {
      id: 23,
      name: "Mens Reebok Gusto",
      image: 'https://imagescdn.reebok.in/img/app/product/8/874703-10445808.jpg?auto=format,compress',
      Catogory: "Men's shoes",
Colour: '1 color',
      MRP: '11299.99',
  },
  {
      id: 24,
      name: " Reebok Zig Dynamica",
      image: 'https://imagescdn.reebok.in/img/app/product/8/871873-10388377.jpg?auto=format,compress',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '9999.99',
  },
  {
      id: 25,
      name: "Reebok Boston Runner",
      image: 'https://imagescdn.reebok.in/img/app/product/8/871847-10387794.jpg?auto=format,compress',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '999.99',
  },
  {
      id: 26,
      name: "Nike Air Max Plus",
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bc4ea557-e918-4ff5-af44-4bc71f97eb28/air-max-plus-shoes-pFKxz0.png',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '999.99',
    }
    
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
            <Card.Body style={{ width: '100%', height: '18rem' }} >
            <Card.Title style={{ fontSize: '12px'}}>#productId#{shoe.id}</Card.Title>
              <Card.Title>{shoe.name}</Card.Title>
              <Card.Text>{shoe.Catogory}</Card.Text>
              <Card.Text>{shoe.Colour}</Card.Text>
              <Card.Text>₹{shoe.MRP}</Card.Text>
             <Button onClick={() => handleSubmit(shoe)} variant="primary" style={{ backgroundColor: 'black',borderColor: 'black' }}className='mb-1 button-container me-5 ms-5 ' >Add to Cart</Button>
            </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  )
}
