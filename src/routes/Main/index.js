import React, { Component } from 'react';
import { Button, Row } from 'antd';
import styled from 'styled-components';
import { Link, withRouter } from 'dva/router';

// assets
import homeSVG from '../../assets/home.svg';

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  flex: 1;

  .home-img {
    width: 50%;
    max-width: 500px;
  }
`;

@withRouter
class Main extends Component {
  render() {
    const { history } = this.props;
    return (
      <MainStyled>
        <img className='home-img' src={homeSVG} alt='' />
        <Row style={{margin: '20px auto'}}>
          <Button
            type="primary"
            style={{ margin: '0 5px' }}
            onClick={() => history.push('/new')}
          >新增問卷</Button>
          <Button
            type="primary"
            style={{ margin: '0 5px' }}
            onClick={() => history.push('/fill')}
          >填寫問卷</Button>
        </Row>
      </MainStyled>
    );
  }
}

export default Main;