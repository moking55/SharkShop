import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
    let navigate = useNavigate();
    return (
        <Card className="rounded-0 m-1">
            <Card.Img className="rounded-0" variant="top" src={props.prod_img} style={{height: 130,overflow: 'hidden', objectFit: 'cover'}} />
            <Card.Body>
                <Card.Title>{props.prod_name}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <div className="d-flex justify-content-between">
                    <small className="text-muted my-auto">{props.prod_prices[0]} - {props.prod_prices[props.prod_prices.length - 1]} บาท</small>
                    <small className="text-muted my-auto"><Button onClick={() => navigate(`/product/${props.productID}`)} className="btn-sm" variant="secondary">เลือกซื้อสินค้า</Button></small>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default ProductCard;