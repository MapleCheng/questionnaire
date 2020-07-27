import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Radio, Checkbox } from 'antd';
import styled from 'styled-components';

const Label = styled.label`
  .ant-checkbox-wrapper {
    width: 100%;
    height: 32px;
    border: 1px solid #40a9ff;
    background: #fff;
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    padding: 0 15px;
    transition: color 0.3s, background 0.3s, border-color 0.3s, -webkit-box-shadow 0.3s;

    span {
      line-height: 30px;
      padding: 0;
    }

    .ant-checkbox {
      display: none;
    }

    &.ant-checkbox-wrapper-checked {    
      color: #fff;
      background: #1890ff;
      border-color: #1890ff;
      box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.08);

      &:hover {
        color: #fff;
        background: #40a9ff;
      }
    }

    &:hover {
      color: #40a9ff;
    }
  }
`

class Choice extends Component {

  static propTypes = {
    name: PropTypes.string,
    consent_survey: PropTypes.array,
  }

  static defaultProps = {
    name: '',
    consent_survey: [],
  }

  render() {

    const { choice, name, mode } = this.props;

    if (mode === 1) {
      return (
        <Form.Item name={`${name}/choice`}>
          <Radio.Group style={{ width: '100%' }} buttonStyle="solid">
            {choice.map((str, key) => (
              <Radio.Button value={key} key={key} style={{ width: '100%' }}>{str}</Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
      );
    } else {
      return (

        <Form.Item name={`${name}/choice`}>
          <Checkbox.Group style={{ width: '100%' }}>
            {choice.map((str, key) => (
              <Label key={key}>
                <Checkbox value={key}>{str}</Checkbox>
              </Label>
            ))}
          </Checkbox.Group>
        </Form.Item>
      )
    }
  }
}

export default Choice;