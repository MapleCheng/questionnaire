


export default {
  // 新增問卷合併data
  newQuestionnaire: (data, r) => {

    const questions = r.map((item, key) => {

      const mode = data[`${item.name}/mode`];

      let result = {
        question: data[`${item.name}/question`],
        mode,
      }

      if (mode === 0) {

        result.consent_survey = [];

        data[`${item.name}/consent_survey`].forEach(element => {
          if (element) {
            result.consent_survey.push(element);
          }
        });
      } else if (mode === 1 || mode === 2) {

        result.choice = [];

        data[`${item.name}/choice`].forEach(element => {
          if (element) {
            result.choice.push(element);
          }
        });
      }

      return result;
    })


    return {
      title: data.title,
      description: data.description,
      questions,
    }
  },

  fillQuestionnaire: (data, r) => {

    const results = r.map((item, index) => {

      let result = {};

      const name = `question-${index}`;

      const mode = item.mode;

      if (mode === 0 && data[`${name}/consent_survey`]) {

        result.answer = [];

        console.log(data)

        data[`${name}/consent_survey`].forEach(element => {

          if (element) {
            result.answer.push(element);
          }
        });
      } else if (mode === 1 || mode === 2) {
        result.answer = data[`${name}/choice`];
      } else if (mode === 3) {
        result.answer = data[`${name}/TrueOrFalse`];
      } else if (mode === 4) {
        result.answer = data[`${name}/short`]
      }

      return result;
    });

    return results;
  }
}