import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import Question from '../../components/Question';

// custom components

const NewStyled = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
`;

class New extends Component {
  render() {
    return (
      <NewStyled>
        <form onSubmit={this.handleSubmit}>
          <Question />
          <Button
            type='submit'
            color='primary'
            variant='contained'
          >Submit</Button>
        </form>
      </NewStyled>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e)
  }
}

export default New;