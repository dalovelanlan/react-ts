import React, { useContext } from "react";
import { Context } from "../App";

function Person() {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      {state.personStep}
      <button onClick={() => dispatch({ type: "person", payload: 0 })}>
        返回
      </button>
    </div>
  );
}

export default Person;
