import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'antd';

class TrueOrFalse extends Component {
  render() {
    return (
      <Row justify='space-between'>
        <Col span={11}>
          <Button
            style={{ width: '100%' }}
            disabled
          >O</Button>
        </Col>
        <Col span={11}>
          <Button
            style={{ width: '100%' }}
            disabled
          >X</Button>
        </Col>
      </Row>
    );
  }
}

export default TrueOrFalse;