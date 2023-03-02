import React, { useEffect } from "react";
import { Card, Col, Row } from "antd";
import "./CryptoDetailCard.css"

const CryptoDetailCard: React.FC<any> = (props: any) => {
    return (
        <Card>
            <Row>
                <p className="card-title">{props.detail?.name}</p>
            </Row>
            <Row>
                <p className="current-price">${props.detail?.c}</p>
            </Row>
            <Row>
                <Col span={12}>
                    <p>volume: </p>
                    <p>{props.detail?.v}</p>
                </Col>
                <Col span={12}>
                    <p>change: </p>
                    <p>{props.detail?.p}</p>
                </Col>
            </Row>
        </Card>
    );
};

export default CryptoDetailCard;