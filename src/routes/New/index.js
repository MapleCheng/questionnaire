import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

// custom
import Question from '../../components/Question';

// custom components

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

let question_key = 0;

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
            <Form.Item name="questionnaire_title">
              <Input
                placeholder="問卷標題"
                autoComplete='off'
              />
            </Form.Item>
            <Form.Item name="questionnaire_description">
              <Input.TextArea
                placeholder="問卷描述"
                autoComplete='off'
              />
            </Form.Item>
          </QuestionStyled>

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

          <Button
            htmlType='submit'
            type='primary'
            variant='contained'
          >Submit</Button>
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

  handleSubmit = (e) => {
    console.log(e)
  }
}

export default New;