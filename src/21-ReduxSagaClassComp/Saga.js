import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
  yield takeLatest("FETCH_TODO_ID", fetchTodoIdSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}
// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    console.log("Response:- ",response)
    const dog = response.data.message;
    console.log("Message:- ",dog)
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", dog });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

// Function Component Saga
function fetchTodoId(todoid) {
  console.log(todoid)
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/"+todoid
  });
}
// worker saga: makes the api call when watcher saga sees the action
function* fetchTodoIdSaga(action) {
  try {
    const response = yield call(fetchTodoId,action.todoId);
    const data = response.data;
    console.log(data)
    // dispatch a success action to the store with the new dog
    yield put({ type: "FETCHED_TODO_ID_SUCCESS", data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "FETCHED_TODO_ID_FAILURE", error });
  }
}