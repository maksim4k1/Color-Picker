import "./App.css";
import Wrapper from './components/Wrapper' // нужно создать
import Circle from './components/Circle' // нужно создать
import { useReducer } from "react";

function reducer(state, {type, payload}){
  switch(type){
    case "CHANGE_COLOR": {
      return payload;
    } default: {
      return state;
    }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  function colorHandler(colorNum){
    dispatch({type: "CHANGE_COLOR", payload: colorNum});
  }

  return (
    <div className={`bg color-${state}`}>
      <Wrapper>
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <Circle key={num} num={num} color={state} onChangeColor={colorHandler}/>
          );
        })}
      </Wrapper>
    </div>
  );
}
