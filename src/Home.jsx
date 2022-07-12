import React from 'react';
import NewsBoards from './assets/NewsBoards';
import Products from './data/products.json';
import ProductCard from './assets/ProductCards';
import { Container, Col, Row } from 'react-bootstrap';

function Homepage() {
    return (
        <React.Fragment>
            {/* Heading Carousel */}
            <Container className="py-3 mb-5">
                {/* Carousel */}
                <NewsBoards />
                <div style={{ background: '#F66B0E' }} className="text-white text-center rounded-bottom p-1">SharkShop ร้านขายบัตรเติมเกม ราคาถูก รับสินค้าหน้าเว็บทันที เปิด 24 ชั่วโมง เชื่อถือได้ 100%</div>
            </Container>

            {/* Product list */}

            <Container>
                <h3 className="mb-3">สินค้าทั้งหมด</h3>
                <Row>
                    {
                        Products.map((product, index) => <Col key={index} md={3}><ProductCard productID={index} prod_img={product.prod_img} prod_prices={product.prod_prices} prod_name={product.prod_name} /></Col>)
                    }
                </Row>
            </Container>

        </React.Fragment>
    )
}

export default Homepage