import React, { Component } from 'react';
import { connect } from 'dva';
import styled from 'styled-components';
import { Button, Form, Card, Divider, Typography, Space, Row, Alert } from 'antd';
import { getQuestions } from '../../models/questionnaire';

// custom components
import QuestionsView from '../../components/QuestionsView';
import { withRouter } from 'dva/router';
import dataConsolidation from '../../utils/dataConsolidation';
import errorMessage from '../../utils/errorMessage';

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

@withRouter
@connect(
  state => ({
    questions: state.questionnaire.questions
  })
)
class Read extends Component {

  state = {
    err: {}
  }

  componentDidMount() {
    const { dispatch } = this.props;
    getQuestions(dispatch);
  }

  render() {

    const { questions } = this.props;
    const { err } = this.state;

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

                {err[`question-${key}`] &&
                  <Alert
                    message={err[`question-${key}`]}
                    type="error"
                  />
                }
              </QuestionStyled>
            ))
          }

          <Row justify='center' style={{ marginBottom: '2rem' }}>
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
      </FillStyled>
    );
  }

  handleCancel = () => {
    const { history } = this.props;

    history.push('/');
  }

  handleFinish = (e) => {
    console.log(e);

    const err = errorMessage.questionnaire(e, this.props.questions.questions) || {};

    this.setState({ err });

    if (Object.keys(err).length === 0) {
      const payload = dataConsolidation.fillQuestionnaire(e, this.props.questions.questions);

      console.log(payload);
    }
  }
}

export default Read;