import React, { Component } from 'react';
import { Form, Radio, Row, Col } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

class TrueOrFalse extends Component {
  render() {

    const { name } = this.props;
    return (
      <Form.Item name={`${name}/TrueOrFalse`}>
        <Radio.Group style={{width: '100%'}}>
          <Row justify='space-between'>
            <Col span={11}>
              <Radio.Button value={0} style={{width: '100%', textAlign: 'center'}} ><CheckCircleOutlined /></Radio.Button>
            </Col>
            <Col span={11}>
              <Radio.Button value={1} style={{width: '100%', textAlign: 'center'}} ><CloseCircleOutlined /></Radio.Button>
            </Col>
          </Row>
        </Radio.Group>
      </Form.Item>
    );
  }
}

export default TrueOrFalse;