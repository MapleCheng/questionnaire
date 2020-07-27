
const nullMessage = '必填！請填寫完整！'

export default {
  questionnaire: (data, r) => {
    let err = {};

    r.forEach((item, index) => {
      const name = `question-${index}`;

      const mode = item.mode;

      if (mode === 0) {
        if (data[`${name}/consent_survey`]) {
          if (data[`${name}/consent_survey`].length !== item.consent_survey.length) {
            err[name] = nullMessage
          }
        } else {
          err[name] = nullMessage
        }
      } else if ((mode === 1 || mode === 2) && data[`${name}/choice`] === undefined) {
        err[name] = nullMessage
      } else if (mode === 3 && data[`${name}/TrueOrFalse`] === undefined) {
        err[name] = nullMessage
      } else if (mode === 4 && (data[`${name}/short`] === '')) {
        err[name] = nullMessage
      }
    });

    return err;
  },
}