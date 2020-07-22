import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// antd
import { Button } from 'antd';

// state
import img404 from '../../assets/404.svg';

class Err404 extends Component {
  render() {
    return (
      <div style={{ width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src={img404} style={{ width: '50%' }} alt="" />
        <span style={{ fontSize: 18, color: 'dodgerblue', margin: 20 }}>當上帝關了一扇門 必打開另一扇窗"</span>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to='/'
        >回首頁</Button>
      </div>
    );
  }
}

export default Err404;