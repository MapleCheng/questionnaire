import React, { Component } from 'react';
import { connect } from 'dva';
import styled from 'styled-components';
import { Button, Form, Card, Divider, Typography, Space, Row } from 'antd';
import { getQuestions } from '../../models/questionnaire';

// custom components
import QuestionsView from '../../components/QuestionsView';

const FillStyled = styled.div`
  max-width: 768px;
  width: calc(100% - 20px);
  margin: 0 auto;
`;

const QuestionStyled = styled.div`
  background: #fff;
  padding: 20px;
  margin: 10px auto;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0,0,0, .3);
`;

@connect(
  state => ({
    questions: state.questionnaire.questions
  })
)
class Read extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    getQuestions(dispatch);
  }

  render() {

    const { questions } = this.props;

    console.log(questions)

    return (
      <FillStyled>
        <QuestionStyled>
          <Card.Meta
            title={questions.title}
            description={questions.description}
          />
        </QuestionStyled>

        <Divider orientation='center'>
          <Typography.Title level={4} style={{ margin: 0 }}>題目</Typography.Title>
        </Divider>

        <Form onFinish={this.handleFinish}>
          {
            questions.questions.map((item, key) => (
              <QuestionStyled key={key}>
                <QuestionsView
                  {...item}
                  name={`question-${key}`}
                />
              </QuestionStyled>
            ))
          }

          <Button htmlType='submit'>submit</Button>
        </Form>
      </FillStyled>
    );
  }

  handleFinish = (e) => {
    console.log(e)
  }
}

export default Read;