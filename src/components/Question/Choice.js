import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Row, Col, Checkbox, Radio } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';

class Choice extends Component {

  static propTypes = {
    choiceMode: PropTypes.oneOf(['single', 'multiple'])
  }

  static defaultProps = {
    choiceMode: ''
  }

  render() {
    const { choiceMode, name } = this.props;
    return (
      <div>
        <Form.List name={`${name}/choice`}>
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
                    <Row align="middle">
                      <Col>
                        {choiceMode === 'single' &&
                          <Radio defaultChecked={false} disabled />
                        }

                        {choiceMode === 'multiple' &&
                          <Checkbox defaultChecked={false} disabled style={{ marginRight: 8 }} />
                        }
                      </Col>
                      <Col flex={1}>
                        <Form.Item
                          {...field}
                          noStyle
                        >
                          <Input
                            placeholder={`選項${index + 1}`}
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

export default Choice;