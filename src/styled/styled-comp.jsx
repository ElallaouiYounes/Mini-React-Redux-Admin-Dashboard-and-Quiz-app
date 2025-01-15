import styled, {keyframes} from "styled-components";
;

export const LoginCont = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 30px;
`
export const County = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InputContainer = styled.div`
    display: flex;
    gap: 5px;
    width: 400px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 5px;
    &:focus-within{
        border: 2px solid #764ABC;
    }
`
export const Input = styled.input`
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 10px;
    background-color: transparent;
`
export const Icon = styled.div`
width: 10%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const Label = styled.label`
font-weight: 600;
`

const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-1px); }
  40% { transform: translateX(1px); }
  60% { transform: translateX(-1px); }
  80% { transform: translateX(1px); }
  100% { transform: translateX(0); }
`;


export const Button = styled.button`
width: 100%;
height: 40px;
background-color: #764ABC;
color: white;
border: none;
border-radius: 5px;
font-weight: bolder;
font-size: larger;
cursor: pointer;
&:hover{
    background-color: transparent;
    border: 2px solid #764ABC;
    color: #764ABC;
    animation: ${shake} 0.3s ease-in-out;
}
`
export const SButton = styled.button`
width: 80%;
height: 40px;
background-color: #764ABC;
color: white;
border: none;
border-radius: 5px;
font-weight: bolder;
font-size: larger;
cursor: pointer;
&:hover{
    background-color: transparent;
    border: 1px solid #764ABC;
    color: #764ABC;
}
`;

export const Dovery = styled.div`
  width: 20%;
  height: 100dvh;
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;
export const SidDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 60px;
    width: 100%;
    align-items: center;
`;

export const NewInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 10px;
  background-color: transparent;
`;

export const Add = styled(Button)`
  background-color: #4caf50;
  &:hover {
    background-color: white;
    color: #4caf50;
    border: 2px solid #4caf50;
  }
`;

export const NewInputContainer = styled.div`
    display: flex;
    gap: 5px;
    width: 400px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 5px;
    &:focus-within{
        border: 2px solid #764ABC;
    }
    &:hover{
        animation: ${shake} 0.3s ease-in-out;
    }
`
export const ErrorContainer = styled.div`
    display: flex;
    gap: 5px;
    width: 400px;
    height: 40px;
    border: none;
    outline: none;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    border-radius: 5px;
    background-color: #ff0000ac;
    &:hover{
        animation: ${shake} 0.3s ease-in-out;
    }
`

export const Update = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 4px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`

export const Delete = styled(Update)`
  background-color: #f44336;
`

export const SuccesContainer = styled.div`
    display: flex;
    gap: 5px;
    width: 400px;
    height: 40px;
    border: none;
    outline: none;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    border-radius: 5px;
    background-color: #4caf50;
    &:hover{
        animation: ${shake} 0.3s ease-in-out;
    }
`
export const QuizButton = styled.button`
width: 30%;
height: 40px;
background-color: #4caf50;
color: white;
border: none;
border-radius: 5px;
font-weight: bolder;
font-size: larger;
cursor: pointer;
&:hover{
    animation: ${shake} 0.3s ease-in-out;
}
`