import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input, Select, Row, Form, Col, Button, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

// custom components
import ConsentSurvey from './ConsentSurvey';
import Choice from './Choice';
import TrueOrFalse from './TrueOrFalse';
import ShortAnswer from './ShortAnswer';

const QuestionStyled = styled.div`
  background: #fff;
  padding: 20px;
  margin: 10px auto;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0,0,0, .3);
`;

const FooterStyled = styled.div`
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #e6e6e6;
  margin-top: 24px;
  padding-top: 12px;
`

class Question extends Component {

  state = {
    mode: this.props.mode
  }

  static propTypes = {
    mode: PropTypes.number
  }

  static defaultProps = {
    mode: 0
  }
  render() {
    const { mode } = this.state;
    const { name } = this.props;
    return (
      <QuestionStyled>
        <Form.Item>
          <Row>
            <Col xs={24} sm={18}>
              <Form.Item
                name={`${name}/question`}
                style={{ flex: 1 }}
                rules={[{required: true, message: `請輸入${mode !== 0 ? "問題" : "標題"}`}]}
              >
                <Input
                  placeholder={mode !== 0 ? "問題" : "標題"}
                  autoComplete='off'
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={{ span: 5, offset: 1 }}>
              <Form.Item name={`${name}/mode`} initialValue={0}>
                <Select onChange={(e) => this.setState({ mode: e })}>
                  <Select.Option value={0}>滿意度調查</Select.Option>
                  <Select.Option value={1}>單選題</Select.Option>
                  <Select.Option value={2}>多選題</Select.Option>
                  <Select.Option value={3}>是非題</Select.Option>
                  <Select.Option value={4}>簡答題</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {/* 滿意度調查 */}
          {mode === 0 &&
            <ConsentSurvey {...this.props} />
          }
          {/* 單選題 */}
          {mode === 1 &&
            <Choice choiceMode='single' {...this.props} />
          }

          {/* 多選題 */}
          {mode === 2 &&
            <Choice choiceMode='multiple' {...this.props} />
          }

          {/* 是非題 */}
          {mode === 3 &&
            <TrueOrFalse {...this.props} />
          }

          {/* 簡答題 */}
          {mode === 4 &&
            <ShortAnswer {...this.props} />
          }
        </Form.Item>

        <FooterStyled>
          <Button shape="circle" danger icon={<DeleteOutlined />} onClick={this.handleRemove} />
        </FooterStyled>
      </QuestionStyled>
    );
  }

  handleRemove = () => {
    const { onRemove, question_key } = this.props;
    onRemove(question_key);
  }
}

export default Question;