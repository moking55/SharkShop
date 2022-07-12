import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
                            <div className="d-flex h-100 flex-column">
                                <div className="my-auto">
                                    <h2>{productInfo.prod_name}</h2>
                                    <small>{productInfo.prod_info}</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="mt-3">
                <Card className="border-0 shadow">
                    <Card.Body>
                        <Row className="p-3">
                            <Col md={9}>
                                <h5>รายการเติมเงิน:</h5>
                                <table className="table table-bordered mt-4 text-center">
                                    <tbody>
                                        <tr style={{ height: 150, verticalAlign: 'middle' }}>
                                            {productInfo["prod_prices"].map((price, index) => {
                                                return <td key={index}>
                                                    <img src={productInfo.prod_money_icon} alt="money" style={{ width: 60 }} />
                                                    <p className="m-0">{price} ฿</p>
                                                </td>
                                            })}

                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                            <Col md={3}>
                                <Button className="w-100">ซื้อสินค้า</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    )
}

export default ProductInfo;