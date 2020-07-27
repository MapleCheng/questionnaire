


export default {
  // 新增問卷合併data
  newQuestion: (data, r) => {

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
  }
}