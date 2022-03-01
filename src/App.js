import "./App.css";
import { useReducer, useRef } from "react";

//init state
const initState = {
  job: "",
  jobs: [],
};

//action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const set_job = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const add_job = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const delete_job = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "set_job":
      return {
        ...state,
        job: action.payload,
      };
    case "add_job":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case "delete_job":
      return {
        ...state,
        jobs: state.jobs.splice(action.payload, 1),
      };
    default:
      throw new Error("Invalid action");
  }
};

//dispatch
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(add_job(job));
    dispatch(set_job(""));

    inputRef.current.focus()
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Todo</h1>
      <input ref={inputRef} value={job} onChange={(e) => dispatch(set_job(e.target.value))} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(delete_job(job))}>&times;</span>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}

export default App;
