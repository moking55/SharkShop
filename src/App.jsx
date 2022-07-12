import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Homepage from './Home';
import HelpPage from './HelpPage';
import ProductInfo from './ProductInfo';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar variant="dark" className="custom-nav-background py-2" expand="lg">
          <Container>
            <Navbar.Brand>
              <img style={{ padding: 5, height: 70 }} src="/image/logo.png" alt="Web logo" />
              Shark Shop
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="me-auto">
                <Link to="/" className="nav-link">เติมเงินเกมออนไลน์</Link>
                <Link to="/help" className="nav-link">วิธีซื้อ</Link>
                <Link to="/topup" className="nav-link">เติมเงิน</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/product/:productID" element={<ProductInfo />} />
        </Routes>
      </Router>
      <footer className="text-center py-3">
        <small className="text-muted">Built and maintained by <a style={{ textDecoration: 'none' }} href="//github.com/moking55">Codename_T</a> contributed with <b>Memilk</b>. This project are in this <a style={{ textDecoration: 'none' }} href="https://github.com/moking55/SharkShop">repository</a>.</small>
      </footer>

    </React.Fragment>
  );
}

export default App;
