
export const addQuestions = (dispatch, payload) => (
  dispatch({ type: 'questionnaire/addQuestions', payload })
)

export default {

  namespace: 'questionnaire',

  state: {
    questions: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *addQuestions({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'setQuestion', payload });
    },
  },

  reducers: {
    setQuestion(state, action) {
      return action.payload;
    },
  },

};
