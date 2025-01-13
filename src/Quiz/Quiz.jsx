import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setQuestionNumber,
  setCheckedOption,
  setShowResult,
  setUnExistedMessage,
  setIsResultShown,
} from '../Redux/Actions/quizActions';
import { Questions } from './Questions';
import {
  NewInputContainer,
  NewInput,
  Label,
  QuizButton,
} from '../styled/styled-comp';

const Quiz = () => {
  const dispatch = useDispatch();
  const {
    numberq,
    checked,
    showResult,
    unExistedMessage,
    isResultShown,
  } = useSelector((state) => state.quizRedu);

  useEffect(() => {
    dispatch(setCheckedOption(null));
    dispatch(setShowResult(false));
    dispatch(setIsResultShown(false));
  }, [numberq, dispatch]);

  const handleChange = (e) => {
    dispatch(setQuestionNumber(e.target.value));
  };

  const handleOptionChange = (e) => {
    dispatch(setCheckedOption(e.target.value));
  };

  const handleSubmit = () => {
    dispatch(setShowResult(true));
    dispatch(setIsResultShown(true));
  };

  // Listen for "Enter" key press and trigger submit
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleSubmit();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
  }, [dispatch]);

  const currentQuestion = Questions.find(
    (question) => question.id === parseInt(numberq)
  );

  return (
    <div className="flex flex-col w-[100%] h-screen items-center gap-10">
      <div className="w-[90%] flex flex-col gap-1 mt-6 pl-14">
        <Label htmlFor="question">Question Number : </Label>
        <NewInputContainer>
          <NewInput
            type="text"
            id="question"
            name="numberq"
            placeholder="Enter Question Number"
            onChange={handleChange}
          />
        </NewInputContainer>
      </div>

      {currentQuestion ? (
        <div className="w-[80%] flex justify-center flex-col gap-2" key={currentQuestion.id}>
          <div className="w-[100%] bg-purply p-6 text-white rounded-sm text-2xl font-semibold">
            <p>{currentQuestion.qs}</p>
          </div>

          {currentQuestion.options.map((op, index) => (
            <div
              key={index}
              className={`flex gap-2 items-center border border-gray-500 py-2 px-6 font-bold text-black rounded-sm ${
                showResult
                  ? op === currentQuestion.answer
                    ? "bg-green-500 text-white"
                    : op === checked && op !== currentQuestion.answer
                    ? "bg-red-400 text-white"
                    : ""
                  : ""
              }`}
            >
              <input
                type="radio"
                name="option"
                value={op}
                id={op}
                onChange={handleOptionChange}
                className="w-6 h-6 border-2 border-gray-400 rounded-sm bg-white checked:bg-purply checked:border-purply focus:outline-none transition duration-200"
                disabled={isResultShown}
              />
              <label htmlFor={op}>{op}</label>
            </div>
          ))}
          <div className="flex justify-center">
            <QuizButton onClick={handleSubmit}>See Result</QuizButton>
          </div>
        </div>
      ) : (
        <div className="w-[80%] flex justify-center flex-col gap-2">
          <div className="w-[100%] bg-red-400 p-6 text-white rounded-sm text-2xl font-semibold">
            <p>{unExistedMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;













// import React, { useState, useEffect } from "react";
// import {
//   NewInputContainer,
//   NewInput,
//   Label,
//   QuizButton,
// } from "../styled/styled-comp";
// import { Questions } from "./Questions";

// const Quiz = () => {
//   const [questionNb, setQuestionNb] = useState({ numberq: 1 });
//   const [checked, setChecked] = useState(null);
//   const [showResult, setShowResult] = useState(false);
//   const [unExisted, setUnExisted] = useState("Question does not exist. Please try a number between 1 and 20");
//   const [isResultShown, setIsResultShown] = useState(false); 

//   useEffect(() => {
//     setChecked(null);
//     setShowResult(false);
//     setIsResultShown(false); 
//   }, [questionNb.numberq]);

//   const handleChange = (e) => {
//     setQuestionNb({ ...questionNb, [e.target.name]: e.target.value });
//   };

//   const handleOptionChange = (e) => {
//     setChecked(e.target.value);
//   };

//   const handleSubmit = () => {
//     setShowResult(true);
//     setIsResultShown(true); 
//   };

//   const currentQuestion = Questions.find(
//     (question) => question.id === parseInt(questionNb.numberq)
//   );

//   return (
//     <div className="flex flex-col w-[100%] h-screen items-center gap-10">
//       <div className="w-[90%] flex flex-col gap-1 mt-6 pl-14">
//         <Label htmlFor="question">Question Number : </Label>
//         <NewInputContainer>
//           <NewInput
//             type="text"
//             id="question"
//             name="numberq"
//             placeholder="Enter Question Number"
//             onChange={handleChange}
//           />
//         </NewInputContainer>
//       </div>

//       {currentQuestion ? (
//         <div className="w-[80%] flex justify-center flex-col gap-2" key={currentQuestion.id}>
//           <div className="w-[100%] bg-purply p-6 text-white rounded-sm text-2xl font-semibold">
//             <p>{currentQuestion.qs}</p>
//           </div>

//           {currentQuestion.options.map((op, index) => (
//             <div
//               key={index}
//               className={`flex gap-2 items-center border border-gray-500 py-2 px-6 font-bold text-black rounded-sm ${
//                 showResult
//                   ? op === currentQuestion.answer
//                     ? "bg-green-500 text-white"
//                     : op === checked && op !== currentQuestion.answer
//                     ? "bg-red-400 text-white"
//                     : ""
//                   : ""
//               }`}
//             >
//               <input
//                 type="radio"
//                 name="option"
//                 value={op}
//                 onChange={handleOptionChange}
//                 className="w-6 h-6 border-2 border-gray-400 rounded-sm bg-white checked:bg-purply checked:border-purply focus:outline-none transition duration-200"
//                 disabled={isResultShown} 
//               />
//               <li className="list-none">{op}</li>
//             </div>
//           ))}
//           <div className="flex justify-center">
//             <QuizButton onClick={handleSubmit}>See Result</QuizButton>
//           </div>
//         </div>
//       ) : (
//         <div className="w-[80%] flex justify-center flex-col gap-2">
//           <div className="w-[100%] bg-red-400 p-6 text-white rounded-sm text-2xl font-semibold">
//             <p>{unExisted}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quiz;
