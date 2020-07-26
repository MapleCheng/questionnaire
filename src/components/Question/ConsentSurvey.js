import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';

class ConsentSurvey extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <Form.List name={`${name}/consent_survey`}>
          {(fields, { add, remove }) => {
            if (fields.length === 0) {
              fields = [{
                fieldKey: 0,
                isListField: true,
                key: 0,
                name: 0,
              }]

              add();
            }
            return (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    required={false}
                    key={field.key}
                  >
                    <Row>
                      <Col flex={1}>
                        <Form.Item
                          {...field}
                          noStyle
                        >
                          <Input
                            placeholder={`問題${index + 1}`}
                            onFocus={fields.length - 1 === index ? () => add() : null}
                            autoComplete='off'
                          />
                        </Form.Item>
                      </Col>
                      <Col>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className='dynamic-delete-button'
                            style={{ margin: '0 8px' }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        ) : null}
                      </Col>
                    </Row>
                  </Form.Item>
                ))}
              </>
            );
          }}
        </Form.List>
      </div>
    );
  }
}

export default ConsentSurvey;