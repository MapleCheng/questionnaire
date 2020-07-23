import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
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
  margin: 10px;
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
            />
          ))}

          <Button onClick={() => this.handleAddQuestion(0)}>ADD</Button>
          <Button
            htmlType='submit'
            type='primary'
            variant='contained'
          >Submit</Button>
        </Form>
      </NewStyled>
    );
  }

  handleAddQuestion = (mode) => {
    console.log(question_key)
    const { questions } = this.state;

    let tempArray = [...questions, {
      name: `name-${question_key}`,
      mode,
    }];

    this.setState({ questions: tempArray });

    question_key++;
  }

  handleSubmit = (e) => {
    console.log(e)
  }
}

export default New;