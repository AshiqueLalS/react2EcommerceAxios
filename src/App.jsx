import { useState } from 'react'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


function App() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
            .then((res)=>{
              setProducts(res.data)
            })
           
  },[products])

  function getinputval(event){
     console.log(event.target.value)
  }

  return (
    <>
      <Navbar bg="primary" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Cart">Cart</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange= {getinputval}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container>
     

    <h1 className='text-secondary'>Products</h1>
    <Row>
      {products.map((product,index)=>{

        return(

              <Col xs={6} sm={6} lg={4} xl={3} key={index}>
                <Card className='card' >
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <p className='text-success'>$ {product.price}</p>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                    <Button className='me-2' variant="primary">View Product</Button>
                    <Button variant='warning'>Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
        )
      })}
    </Row>
    </Container>
    </>
  )
}

export default App

