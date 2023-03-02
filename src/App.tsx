import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import CryptoDetailCard from './components/crypto-detail-card/CryptoDetailCard';
import useCryptoDetail from './hook/useCryptoDetail';
import { Col, Row } from 'antd';

function App() {

  const cryptoDetail = useCryptoDetail();

  return (
    <div className="App">
      <Header />
      <Row gutter={[16, 16]}>
        {
          cryptoDetail && Object.values(cryptoDetail).map((detail: any) => {
            return (
              <Col xs={24} sm={12} md={12} lg={8}>
                <CryptoDetailCard key={detail?.id} detail={detail} />
              </Col>
            )
          })
        }
        <CryptoDetailCard detail={cryptoDetail.bitcoinDetail} />
      </Row>
    </div>
  );
}

export default App;
