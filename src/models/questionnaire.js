
export const addQuestions = (dispatch, payload) => (
  dispatch({ type: 'questionnaire/addQuestions', payload })
)

export const getQuestions = (dispatch, payload) => (
  dispatch({ type: 'questionnaire/getQuestions', payload })
)

export const fillQuestions = (dispatch, payload) => (
  dispatch({ type: 'questionnaire/fillQuestions', payload })
)

export default {

  namespace: 'questionnaire',

  state: {
    questionnaire: {
      title: '',
      description: '',
      questions: []
    },
    answer: {
    },
  },

  effects: {
    *addQuestions({ payload }, { call, put }) {

      yield put({ type: 'setQuestionnaire', payload });
    },

    *getQuestions({ payload }, { call, put }) {
      const res = JSON.parse('{ "title": "dfsdfdfs", "description": "dsfdfsdfsdfs", "questions": [{ "question": "dfsdfsdfs", "mode": 0, "consent_survey": ["dfsdfsdfs", "dfsdfs"] }, { "question": "dfsdfs", "mode": 1, "choice": ["dfsdfs"] }, { "question": "dfsdfsdfs", "mode": 2, "choice": ["dfsdfsdfs"] }, { "question": "ffff", "mode": 3 }, { "question": "aaaaa", "mode": 4 }] }')

      yield put({ type: 'setQuestionnaire', payload: res });
    },

    *fillQuestions({ payload }, { call, put }) {

      yield put({ type: 'finishQuestionnaire', payload })
    },
  },

  reducers: {
    setQuestionnaire(state, action) {
      return {
        ...state,
        questionnaire: action.payload
      };
    },
  },

  finishedQuestionnaire(state, action) {
    return {
      ...state,
      answer: action.payload
    };

  }

};
