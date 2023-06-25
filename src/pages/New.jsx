import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './styles.css'


export default function New() {
  const handleAddToCart=()=>{
 
    window.location.href='/Cart'
    }

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
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/394110/02/fnd/IND/fmt/png/Anzarun-Camo-Women',
      Catogory:"Men's shoes",
      Colour:'1 color',
      MRP: '129.99',
    },
    {
        id: 3,
        name: "Puma Anzarun Camo ",
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2eaf301-687e-4235-9dc6-d1cb70f927be/blazer-mid-77-shoes-fW78R7.png',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP:'2,699',
      },
      {
        id: 4,
        name: "Puma Mayze UT",
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/389862/02/sv01/fnd/IND/fmt/png/Mayze-UT-Women',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP: '5,399',
      },
      {
        id: 5,
        name: "Nike",
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        Catogory:"Men's shoes",
        Colour:'1 color',
        MRP:'1,299',
      },
      {
        id: 6,
        name: "Adidas",
        image: 'https://img01.ztat.net/article/spp-media-p1/c2974f2a86244b598a1c9ac80183b03a/27d59517911c4db0b278da55177cb31a.jpg?imwidth=1800&filter=packshot',
        Catogory:"Men's shoes",
        Colour:'1 color',
        MRP: '899.99',
      },
      {
        id: 7,
        name: "Reebok",
        image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP:'399.99',
      },
      {
        id: 8,
        name: "Adidas",
        image: 'https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UY1000_.jpg',
        Catogory:"Men's shoes",
        Colour:'1 color',
        MRP: '999.99',
      },
      {
        id: 9,
        name: "Nike",
        image: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_2326%2Cy_2185/MTkzMjEwNDg3MDU4NDc0OTE1/usatsi_19186924.jpg',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP:'599.99',
      },
      {
        id: 10,
        name: "Skechers",
        image: 'https://www.rei.com/dam/content_team_010818_52427_htc_running_shoes_hero2_lg.jpg',
        Catogory:"Men's shoes",
        Colour:'1 color',
        MRP: '799.99',
      },
      {
        id: 11,
        name: "Clarks",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOviTQCG07_FgQUG43fple-J2uT2ZfLOCDg&usqp=CAU',
        Catogory:"Men's shoes",
        Colour:'1 color',
        MRP:'1999.99',
      },
      {
        id: 12,
        name: "Steve Madden",
        image: 'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/q/h/z/7-mrj1852-7-aadi-black-original-imagdwgudezandfs-bb.jpeg?q=90&crop=false',
        Catogory:"Men's shoes",
        Colour:'1 color',
        MRP: '1299.99',
      },
      {
        id: 13,
        name: "Clarks",
        image: 'https://media.istockphoto.com/id/1279005448/photo/diabetic-measurement-tools-shoe-and-apple-on-table.jpg?b=1&s=612x612&w=0&k=20&c=yfW05oUT0IBUqbUI3TCWmp7dy4aAfuFUPI5TFqt3NIA=',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP:'299.99',
      },
      {
        id: 14,
        name: "Asian",
        image: 'https://n3.sdlcdn.com/imgs/k/o/l/544X640_sharpened_2/ASIAN-HATTRICK-35-Navy-Men-SDL946102321-1-b11eb.webp',
        Catogory:"Women's shoes",
        Colour:'1 color',
        MRP: '399.99',
      },
      {
          id: 15,
          name: "Skechers",
          image: 'https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechers_india/default/dw0d3e9d0d/images/large/196989229881-1.jpg?sw=310&sfrm=jpg',
          Catogory:"Women's shoes",
          Colour:'1 color',
          MRP:'2999.99',
        },
        {
          id: 16,
          name: "Asian",
          image: 'https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-wool-runnerjpg.jpg?q=h_1090,w_1938,x_0,y_0',
          Catogory:"Women's shoes",
          Colour:'1 color',
          MRP: '399.99',
        },
        {
          id: 17,
          name: "New Balance",
          image: 'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/w/w/a/5-wcstlik4-7-new-balance-black-white-original-imagzkkhgzwbmjk9.jpeg?q=90&crop=false',
          Catogory:"Men's shoes",
          Colour:'1 color',
          MRP:'2999.99',
        },
        {
          id: 18,
          name: "Nike",
          image: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-69510,resizemode-75,msid-89481876/magazines/panache/200-pairs-of-louis-vuitton-x-nike-air-force-1-shoes-designed-by-virgil-abloh-fetch-25-million-at-sothebys-auction/image-93.jpg',
          Catogory:"Men's shoes",
          Colour:'1 color',
          MRP: '1299.99',
        },
        {
          id: 19,
          name: "Nike ",
          image: 'https://dks.scene7.com/is/image/GolfGalaxy/18NIKWRMX270XXXXXLFS_Fantastic_Fuschia?qlt=70&wid=600&fmt=pjpeg',
          Catogory:"Women's shoes",
          Colour:'1 color',
          MRP:'999.99',
        },
        {
          id: 20,
          name: "Adidas",
          image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-adidas-running-shoes-1645131039.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
          Catogory:"Men's shoes",
          Colour:'1 color',
          MRP: '899.99',
        },
        {
          id: 21,
          name: "New Balance",
          image: 'https://img.freepik.com/free-photo/one-black-sneaker-shoe-isolated-white_93675-131266.jpg',
          Catogory:"Men's shoes",
          Colour:'1 color',
          MRP:'2999.99',
        },
        {
          id: 22,
          name: "Adidas",
          image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4b244e94fdfd401d9a35af8d00752100_9366/ultraboost-23-shoes.jpg',
          Catogory:"Men's shoes",
          Colour:'1 color',
          MRP: '1399.99',
        },
        {
          id: 23,
          name: "Asian",
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/School_plimsolls.jpg',
          Catogory:"Women's shoes",
          Colour:'1 color',
          MRP:'99.99',
        },
        {
          id: 24,
          name: "Asian",
          image: 'https://t4.ftcdn.net/jpg/00/65/48/11/360_F_65481195_VbssfvvCCR5LuuSRrpHw9JWMjZrFf2m1.jpg',
          Catogory:"Men's shoes",
          Colour:'1 color',
          MRP: '899.99',
        },
        {
            id: 25,
            name: "Converse",
            image: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwc732218f/images/k_08/A03544C_K_08X1.jpg?sw=406',
            Catogory:"Men's shoes",
            Colour:'1 color',
            MRP:'1999.99',
          },
          {
            id: 26,
            name: "New Balance",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WilpmITaMCaeAUjG7zpi39Sn4siPwfenQk8aRMsWnbyytgQTZk70hIn5xc0L50mW_t4&usqp=CAU',
            Catogory:"Men's shoes",
            Colour:'1 color',
            MRP: '3999.99',
          },
          {
              id: 27,
              name: "CHSSIH Roller Skates",
              image: 'https://m.media-amazon.com/images/I/51ty31GwpZL.AC_UF1000,1000_QL80.jpg',
              Catogory:"Women's shoes",
              Colour:'1 color',
              MRP:'10,999.99',
            },
            {
              id: 28,
              name: "Nike",
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWo7ws20bp5hJ6rud7ooOHVSurBJtEwBGsRg&usqp=CAU',
              Catogory:"Men's shoes",
              Colour:'1 color',
              MRP: '1999.99',
            },
            {
              id: 29,
              name: "Reebok",
              image: 'https://5.imimg.com/data5/WT/DA/HN/ANDROID-19051907/product-jpeg.jpg',
              Catogory:"Men's shoes",
              Colour:'1 color',
              MRP:'929.99',
            },
            {
              id: 30,
              name: "Reebok",
              image: 'https://images.reebok.eu/reebok-club-c-85-vintage-shoes_19729375_44892534_2048.jpg?c=1',
              Catogory:"Men's shoes",
              Colour:'1 color',
              MRP: '1899.99',
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
