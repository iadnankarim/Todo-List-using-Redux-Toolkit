// import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";

// const ADD_TASK = "task/add";
// const DELETE_TASK = "task/delete";
// const EDIT_TASK = "task/edit";
// const FETCH_TASK = "task/fetch";

// const intitailState = {
//   task: [],
//   isLoading: false,
// };

// function reducer(state = intitailState, action) {
//   switch (action.type) {
//     case ADD_TASK:
//       return {
//         ...state,
//         task: [...state.task, action.payload],
//       };

//     // case DELETE_TASK:
//     //   return {
//     //     ...state,
//     //     task: [...state.task, action.payload],
//     //   };
//     case DELETE_TASK:
//       return {
//         ...state,
//         task: state.task.filter((_, index) => index !== action.payload),
//       };

//     // case FETCH_TASK:
//     //   return {
//     //     ...state,
//     //     task: [...state.task, action.payload],
//     //   };
//     case FETCH_TASK:
//       return {
//         ...state,
//         task: action.payload, // Replace the task array instead of appending
//       };
//     // case DELETE_TASK:
//     //   return {
//     //     ...state,
//     //     task: state.task.filter((currTask, index) => index !== action.payload), // Properly filter out the task
//     //   };

//     // case EDIT_TASK:
//     //   const updatedTask = state.task.filter((currTask, index) => {
//     //     return index !== action.payload;
//     //   });
//     //   return {
//     //     ...state,
//     //     task: [...state.task, action.payload],
//     //   };

//     // default:
//     //   return state;
//   }
// }

// //step 1: create the redux store using the reducer
// // const store = createStore(reducer);
// // console.log(store);

// // console.log("initial State : ", store.getState());

// // store.dispatch({ type: ADD_TASK, payload: "buy code" });
// // console.log("updated state", store.getState());

// //step 1: create the redux store using the reducer
// export const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(reduxThunk))
// );
// console.log(store);

// // log the initail State find
// console.log("Initial State:", store.getState());

// //dispatch an action to add a task
// //action koo kisy call krna hai with the help of actioon
// // store.dispatch({ type: ADD_TASK, payload: "add This Task" });
// // console.log("updated state", store.getState());

// // store.dispatch({ type: DELETE_TASK, payload: 1 });
// // console.log("update state", store.getState());

// // store.dispatch({ type: ADD_TASK, payload: "buy Code" });
// store.dispatch(addTask("buy Code"));
// store.dispatch(addTask("buy Mango"));
// store.dispatch(addTask("buy Banana"));
// console.log("Updated State:", store.getState());

// // store.dispatch(addTask("buy Mango"));
// // console.log("updated State", store.getState());

// store.dispatch(deleteTask(1));
// console.log("Deleted State", store.getState());

// //is mai action create call kiya hai
// export function addTask(data) {
//   return { type: ADD_TASK, payload: data };
// }

// export function deleteTask(id) {
//   return { type: DELETE_TASK, payload: id };
// }

// // export function FETCH_TASK() {
// //   return async (dispatch) => {
// //     try {
// //       const res = await fetch(
// //         "https://jsonplaceholder.typicode.com/todos?_limit=3"
// //       );
// //       const task = await res.json();
// //       dispatch({ type: FETCH_TASK, payload: task });
// //     } catch (error) {
// //       console.log("err:", error);
// //     }
// //   };
// // }

// // export const fetchTask = () => {
// //   return async (dispatch) => {
// //     try {
// //       const res = await fetch(
// //         "https://jsonplaceholder.typicode.com/todos?_limit=3" // Corrected URL
// //       );
// //       // const task = await res.json();
// //       // dispatch({ type: "FETCH_TASK", payload: task }); // Ensure correct action type
// //       const task = await res.json();
// //       dispatch({ type: FETCH_TASK, payload: task.map((t) => t.title) }); // Map to titles only
// //     } catch (error) {
// //       console.log("Error fetching tasks:", error);
// //     }
// //   };
// // };
// export const fetchTask = () => async (dispatch) => {
//   try {
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/todos?_limit=3"
//     );
//     const data = await res.json();
//     dispatch({ type: FETCH_TASK, payload: data.map((task) => task.title) });
//   } catch (error) {
//     console.error("Error fetching tasks:", error);
//   }
// };

// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk"; // Corrected import
// import { composeWithDevTools } from "@redux-devtools/extension";

import { configureStore, createSlice } from "@reduxjs/toolkit";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

// const initialState = {
//   task: [],
//   isLoading: false,
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TASK:
//       return {
//         ...state,
//         task: [...state.task, action.payload],
//       };
//     case DELETE_TASK:
//       return {
//         ...state,
//         task: state.task.filter((_, index) => index !== action.payload),
//       };
//     case FETCH_TASK:
//       return {
//         ...state,
//         task: [...action.payload], // Replace task list with fetched tasks
//       };
//     default:
//       return state;
//   }
// }

//! export const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(thunk)) // Use `thunk` here
// );
const initialState = {
  task: [],
};

//createSlice mai object pass krna hota hai with multiple properties
const reducer = createSlice({
  //name jo bi create krha hai hn or jo task krha hn us ka naam ayga
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
    },
    deleteTask(state, action) {
      state.task = state.task.filter((_, index) => index !== action.payload);
    },
  },
});

console.log(reducer);

export const { addTask, deleteTask } = reducer.actions;

export const store = configureStore({
  reducer: {
    reducer: reducer.reducer,
  },
});

console.log(store.dispatch(addTask("buy kro lo")));
console.log(store.dispatch(addTask("buy  phone")));
console.log(store.dispatch(addTask("buy apple")));

console.log(store.getState());

// export function addTask(data) {
//   return { type: ADD_TASK,  payload: data };
// }

// export function deleteTask(id) {
//   return { type: DELETE_TASK, payload: id };
// }

export const fetchTask = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=3"
    );
    const data = await res.json();
    dispatch({ type: FETCH_TASK, payload: data.map((task) => task.title) });
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};
