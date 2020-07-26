import React, { Component } from 'react';
import { Typography } from 'antd';

// custom components
import ConsentSurvey from './ConsentSurvey';
import Choice from './Choice';
import TrueOrFalse from './TrueOrFalse';
import ShortAnswer from './ShortAnswer';

class QuestionsView extends Component {
  render() {
    const { mode, question } = this.props;

    return (
      <div>
        <Typography.Title level={4}>{question}</Typography.Title>

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
      </div>
    );
  }
}

export default QuestionsView;