import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Radio, Rate } from 'antd';

// styles
import styles from './styles.less';

class ConsentSurvey extends Component {

  static propTypes = {
    name: PropTypes.string,
    consent_survey: PropTypes.array,
  }

  static defaultProps = {
    name: '',
    consent_survey: [],
  }
  render() {
    const { consent_survey, name } = this.props;

    return (
      <table className={styles.consent_survey}>
        <thead>
          <tr>
            <th>問題</th>
            <th>同意度</th>
          </tr>
        </thead>
        <tbody>
          <Form.List name={`${name}/consent_survey`}>
            {field => {

              return (
                <>
                  {consent_survey.map((str, key) => (
                    <tr key={key}>
                      <td>{str} {key}</td>
                      <td>
                        <Form.Item name={key} noStyle>
                          <Rate />
                        </Form.Item>
                      </td>
                    </tr>
                  ))}
                </>
              )
            }}
          </Form.List>
        </tbody>
      </table>
    );
  }
}

export default ConsentSurvey;