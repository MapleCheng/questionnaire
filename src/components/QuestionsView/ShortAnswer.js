import React, { Component } from 'react';
import { Form, Input } from 'antd';

class ShortAnswer extends Component {
  render() {
    const { name } = this.props;
    return (
      <Form.Item name={`${name}/short`}>
        <Input.TextArea
          autoComplete='off'
        />
      </Form.Item>
    );
  }
}

export default ShortAnswer;