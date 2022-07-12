import { Carousel } from 'react-bootstrap';
import React from 'react';
import news from "../data/promo.json";

function NewsBoards() {
    return (
        <Carousel style={{ overflow: "hidden"}} className="rounded-top">
            {
                news.map((newsData, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={newsData.img_url}
                                alt={newsData.title}
                                style={{
                                    height: 280,
                                    objectFit: "cover",
                                }}
                            />

                            <Carousel.Caption>
                                <h3>{newsData.title}</h3>
                                <p>{newsData.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>)
}
export default NewsBoards