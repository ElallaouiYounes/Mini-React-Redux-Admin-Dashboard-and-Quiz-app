const initialState = {
  numberq: 1,
  checked: null,
  showResult: false,
  unExistedMessage:
    "Question does not exist. Please try a number between 1 and 20",
  isResultShown: false,
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUESTION_NUMBER":
      return { ...state, numberq: action.payload };
    case "SET_CHECKED_OPTION":
      return { ...state, checked: action.payload };
    case "SET_SHOW_RESULT":
      return { ...state, showResult: action.payload };
    case "SET_UNEXISTED_MESSAGE":
      return { ...state, unExistedMessage: action.payload };
    case "SET_IS_RESULT_SHOWN":
      return { ...state, isResultShown: action.payload };
    default:
      return state;
  }
};
