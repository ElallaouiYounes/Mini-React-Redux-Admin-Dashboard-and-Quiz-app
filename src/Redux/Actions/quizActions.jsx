export const setQuestionNumber = (numberq) => ({
  type: "SET_QUESTION_NUMBER",
  payload: numberq,
});

export const setCheckedOption = (value) => ({
  type: "SET_CHECKED_OPTION",
  payload: value,
});

export const setShowResult = (value) => ({
  type: "SET_SHOW_RESULT",
  payload: value,
});

export const setUnExistedMessage = (message) => ({
  type: "SET_UNEXISTED_MESSAGE",
  payload: message,
});

export const setIsResultShown = (value) => ({
  type: "SET_IS_RESULT_SHOWN",
  payload: value,
});
