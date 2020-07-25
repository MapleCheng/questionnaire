import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Form, Input, Divider, Typography, Space, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { connect } from 'dva';

// custom components
import Question from '../../components/Question';
import { addQuestions } from '../../models/questionnaire';

// funcations
import dataConsolidation from '../../utils/dataConsolidation';


// styled
const NewStyled = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
`;

const QuestionStyled = styled.div`
  background: #fff;
  padding: 20px;
  margin: 10px auto;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0,0,0, .3);
`;

// question key
let question_key = 0;

@connect()
class New extends Component {

  state = {
    questions: []
  }

  componentDidMount() {
    this.handleAddQuestion(0)
  }

  render() {
    const { questions } = this.state;

    return (
      <NewStyled>
        <Form onFinish={this.handleSubmit}>
          <QuestionStyled>
            <Form.Item
              name="title"
                rules={[{required: true, message: `請輸入標題`}]}
            >
              <Input
                placeholder="問卷標題"
                autoComplete='off'
              />
            </Form.Item>
            <Form.Item name="description">
              <Input.TextArea
                placeholder="問卷描述"
                autoComplete='off'
              />
            </Form.Item>
          </QuestionStyled>

          <Divider orientation='center'>
            <Typography.Title level={4} style={{ margin: 0 }}>題目</Typography.Title>
          </Divider>

          {questions.map((item, index) => (
            <Question
              {...item}
              key={index}
              question_key={index}
              onRemove={this.handleRemoveQuestion}
            />
          ))}

          <Form.Item>

            <Button
              type="dashed"
              style={{ width: '100%' }}
              onClick={this.handleAddQuestion}
            ><PlusOutlined /> 新增</Button>
          </Form.Item>

          <Row justify='center'>
            <Space>
              <Button
                type='default'
                variant='contained'
                onClick={this.handleCancel}
              >取消</Button>
              <Button
                htmlType='submit'
                type='primary'
                variant='contained'
              >送出</Button>
            </Space>
          </Row>
        </Form>
      </NewStyled>
    );
  }

  handleRemoveQuestion = (e) => {
    const { questions } = this.state;

    questions.splice(e, 1);

    this.setState({ questions })
  }

  handleAddQuestion = () => {
    let { questions } = this.state;

    questions = [...questions, {
      name: `question-${question_key}`,
    }];

    this.setState({ questions });

    question_key++;
  }

  handleCancel = () => {

  }

  handleSubmit = (e) => {
    const { dispatch } = this.props;
    const { questions } = this.state;

    const output = dataConsolidation(e, questions);
    
    addQuestions(dispatch, output)
  }
}

export default New;