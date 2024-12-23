import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTask, deleteTask, fetchTask } from "../Store";

const Todo = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.reducer.task);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    dispatch(addTask(task));
    setTask("");
  };

  const handleTaskDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleFetchTasks = () => {
    dispatch(fetchTask());
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>To-do List</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Add a new Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>

        {/* Fetch Button */}
        <button className="fetch-tasks-btn" onClick={handleFetchTasks}>
          Fetch Tasks
        </button>

        {/* Task List */}
        <ul>
          {tasks.map((currTask, index) => (
            <li key={index}>
              <p>{`${index + 1}: ${currTask}`}</p>
              <MdDeleteForever onClick={() => handleTaskDelete(index)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { MdDeleteForever } from "react-icons/md";
// // import { addTask, deleteTask, fetchTask } from "../Store";

// // const Todo = () => {
// //   const [task, setTask] = useState("");
// //   const tasks = useSelector((state) => state.task);

// //   const dispatch = useDispatch();

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     if (task.trim() === "") return;
// //     // Prevent empty task addition
// //     dispatch(addTask(task));
// //     setTask("");
// //   };

// //   const handleTaskDelete = (id) => {
// //     return dispatch(deleteTask(id));
// //   };

// //   const handleFetchTasks = () => {
// //     dispatch(fetchTask());
// //   };

// //   return (
// //     <div className="container">
// //       <div className="todo-app">
// //         <h1>
// //           <i className="fa-regular fa-pen-to-square"></i> To-do List
// //         </h1>

// //         <div className="row">
// //           <form onSubmit={handleFormSubmit}>
// //             {" "}
// //             {/* Change to onSubmit */}
// //             <input
// //               type="text"
// //               id="input-box"
// //               placeholder="Add a new Task"
// //               value={task}
// //               onChange={(e) => setTask(e.target.value)}
// //             />
// //             <button type="submit">Add Task</button>{" "}
// //             {/* Explicitly set type to "submit" */}
// //           </form>
// //         </div>

// //         <button onClick={handleFetchTasks}>Fetch Tasks</button>

// //         {/* <ul id="list-container">
// //           {tasks.map((currTask, index) => (
// //             <li key={index}>
// //               <p>
// //                 {index}: {currTask}
// //               </p>
// //               <div>
// //                 <MdDeleteForever
// //                   className="icon-style"
// //                   onClick={() => handleTaskDelete(index)}
// //                 />
// //               </div>
// //             </li>
// //           ))}
// //         </ul> */}
// //         <ul id="list-container">
// //           {tasks.map((currTask, index) => (
// //             <li key={index}>
// //               <p>{`${index + 1}: ${currTask}`}</p>
// //               <MdDeleteForever
// //                 className="icon-style"
// //                 onClick={() => handleTaskDelete(index)}
// //               />
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Todo;

// const Todo = () => {
//   const [task, setTask] = useState("");
//   const tasks = useSelector((state) => state.task); // Ensure this matches state structure

//   const dispatch = useDispatch();

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim() === "") return;
//     dispatch(addTask(task));
//     setTask("");
//   };

//   const handleTaskDelete = (id) => {
//     dispatch(deleteTask(id));
//   };

//   const handleFetchTasks = () => {
//     dispatch(fetchTask());
//   };

//   console.log("Tasks from Redux:", tasks); // Debug log

//   return (
//     <div className="container">
//       <div className="todo-app">
//         <h1>To-do List</h1>
//         <form onSubmit={handleFormSubmit}>
//           <input
//             type="text"
//             placeholder="Add a new Task"
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//           />
//           <button type="submit">Add Task</button>
//         </form>
//         <button onClick={handleFetchTasks}>Fetch Tasks</button>
//         <ul>
//           {tasks.map((currTask, index) => (
//             <li key={index}>
//               <p>{`${index + 1}: ${currTask}`}</p>
//               <MdDeleteForever onClick={() => handleTaskDelete(index)} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todo;
