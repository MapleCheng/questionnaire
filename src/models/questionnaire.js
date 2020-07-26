
export const addQuestions = (dispatch, payload) => (
  dispatch({ type: 'questionnaire/addQuestions', payload })
)

export const getQuestions = (dispatch, payload) => (
  dispatch({ type: 'questionnaire/getQuestions', payload })
)

export default {

  namespace: 'questionnaire',

  state: {
    questions: {
      title: '',
      description: '',
      questions: []
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *addQuestions({ payload }, { call, put }) {  // eslint-disable-line

      console.log(payload)
      yield put({ type: 'setQuestion', payload });
    },

    *getQuestions({ payload }, { call, put }) {
      const res = JSON.parse('{ "title": "dfsdfdfs", "description": "dsfdfsdfsdfs", "questions": [{ "question": "dfsdfsdfs", "mode": 0, "consent_survey": ["dfsdfsdfs", "dfsdfs"] }, { "question": "dfsdfs", "mode": 1, "choice": ["dfsdfs"] }, { "question": "dfsdfsdfs", "mode": 2, "choice": ["dfsdfsdfs"] }, { "question": "ffff", "mode": 3 }, { "question": "aaaaa", "mode": 4 }] }')

      yield put({ type: 'setQuestion', payload: res });
    }
  },

  reducers: {
    setQuestion(state, action) {
      return {
        ...state,
        questions: action.payload
      };
    },
  },

};
