import {
  useState,
  createContext,
  useCallback,
  useReducer,
  Dispatch,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./components/Person";
import Company from "./components/Company";

interface IState {
  personStep: number;
  companyStep: number;
}

interface IContext {
  state: IState;
  dispatch: Dispatch<{
    type: string;
    payload?: number;
  }>;
}

const initValue = {
  personStep: 0,
  companyStep: 0,
};

export const Context = createContext<IContext>({
  state: initValue,
  dispatch: () => {},
});

function App() {
  const [count, setCount] = useState(0);

  const reducer = useCallback((state: any, action) => {
    const { type, payload } = action;
    console.log("payload", payload);
    console.log("type", type);
    console.log("state", state);
    switch (type) {
      case "person":
        return {
          ...state,
          personStep: payload,
        };
      case "company":
        return {
          ...state,
          companyStep: payload,
        };
      default:
        return state;
    }
  }, []);

  const [state, dispatch] = useReducer(reducer, initValue);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          onClick={() => {
            dispatch({ type: "company", payload: 1 });
          }}
        >
          Company
        </p>
        <p
          onClick={() => {
            dispatch({ type: "person", payload: 1 });
          }}
        >
          Hello Vite + React!
        </p>
        <Context.Provider value={{ state, dispatch }}>
          <Person />
          <Company />
        </Context.Provider>
      </header>
    </div>
  );
}

export default App;
