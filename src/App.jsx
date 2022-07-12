import React from 'react';
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';
import NewsBoards from './assets/NewsBoards';
import Products from './data/products.json';
import ProductCard from './assets/ProductCards';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar variant="dark" className="custom-nav-background py-2" expand="lg">
        <Container>
          <Navbar.Brand>
            <img style={{ padding: 5, height: 70 }} g src="/image/logo.png" alt="Web logo" />
            Shark Shop
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="#home">เติมเงินเกมออนไลน์</Nav.Link>
              <Nav.Link href="#features">วิธีซื้อ</Nav.Link>
              <Nav.Link href="#pricing">เติมเงิน</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Heading Carousel */}
      <div >
        <Container className="py-3 mb-5">
          {/* Carousel */}
          <NewsBoards />
          <div style={{ background: '#DDDDDD' }} className="text-muted text-center rounded-bottom p-1">SharkShop ร้านขายบัตรเติมเกม ราคาถูก รับสินค้าหน้าเว็บทันที เปิด 24 ชั่วโมง เชื่อถือได้ 100%</div>
        </Container>
      </div>

      {/* Product list */}

      <Container>
        <h3 className="mb-3">สินค้าทั้งหมด</h3>
        <Row>
          {
            Products.map((product, index) => <Col key={index} md={3}><ProductCard prod_img={product.prod_img} prod_prices={product.prod_prices} prod_name={product.prod_name} /></Col>)
          }
        </Row>
      </Container>
      <footer className="text-center py-3">
        <small className="text-muted">Made with love by <a style={{ textDecoration: 'none' }} href="//github.com/moking55">Codename_T</a>. This project are in this repository.</small>
      </footer>
      
    </React.Fragment>
  );
}

export default App;
