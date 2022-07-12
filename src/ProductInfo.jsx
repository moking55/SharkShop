import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from './data/products.json';
import { useParams } from 'react-router-dom';


function ProductInfo() {
    let { productID } = useParams();
    const productInfo = Product[productID];

    if (productInfo === undefined) {
        return (
            <div>
                <div className="text-center p-5" style={{ background: '#DDDD' }}>
                    <img src="/image/shopping-basket.png" alt="Basket" className="mb-4" />
                    <h3>เกิดข้อผิดพลาด</h3>
                    <p>ไม่พบสินค้าที่ต้องการหรือไม่มีอยู่</p>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div style={{ background: '#F66B0E', width: '100%' }}>
                <Container className="p-4">
                    <Row className="g-3 text-white">
                        <Col md={3}>
                            <img className="img-thumbnail" src={productInfo.prod_img} alt="product logo" style={{ width: '100%' }} />
                        </Col>
                        <Col md={9}>
                            <h3>{productInfo.prod_name}</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>

                <Row>
                    <Col md={4}>

                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ProductInfo;