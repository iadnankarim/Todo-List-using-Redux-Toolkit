import React, { useState } from "react";
import Todo from "./Components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { addTask, deleteTask } from "./Store";

function App() {
  const [userTask, setUserTask] = useState("");
  const tasks = useSelector((state) => state.reducer.task);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(userTask));
    setUserTask("");
  };

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  //dispatch
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="todo-app">
        <h1>To-do-List</h1>
        <div>
          <form className="row" onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new Task"
              value={userTask}
              onChange={(e) => setUserTask(e.target.value)}
            />
            <button type="submit">Add Tas</button>
          </form>
        </div>

        <ul className="list-container">
          {tasks?.map((curTask, index) => {
            return (
              <li key={index}>
                <p>
                  {index} : {curTask}
                </p>
                <div>
                  <MdDeleteForever
                    className="icon-style"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
