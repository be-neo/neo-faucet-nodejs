import React from 'react';
import { Row, Col, Alert, Input } from 'antd';
import { get } from 'axios';

export default class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'abc'
    }
  }

  checkAddress = async address => {
    get(`${this.props.config.faucetSite}/check/${address}`);
  }

  render() {
    return(
      <Row>
        <Col xs={{ span: 20, push: 2 }} md={{ span: 16, push: 4 }} lg={{ span: 12, push: 6 }} xl={{ span: 8, push: 8 }} >
          <h2>Address: {this.state.address}</h2>
          <Input onChange={() => window.location.replace('http://localhost:4002/123')} />
          <Alert
            message="Ready for refill"
            description="Your address hasn't used the faucet recently, you're good to go."
            type="success"
            showIcon
          />
        </Col>
      </Row>
    );
  }
}
