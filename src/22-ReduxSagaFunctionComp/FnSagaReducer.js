// reducer with initial state
const fninitialState = {
    fetching: false,
    data: null,
    error: null,
    todoId: null
};
export function FnSagaReducer(state = fninitialState, fnaction) {
    switch (fnaction.type) {
        case 'FETCH_TODO_ID':
            return { ...state, fetching: true, data: null, error: null, todoId: fnaction.todoId };
        case 'FETCHED_TODO_ID_SUCCESS':
            return { ...state, fetching: false, data: fnaction.data };
        case "FETCHED_TODO_ID_FAILURE":
            return { ...state, fetching: false, data: null, error: fnaction.error };
        default:
            return state;
    }
}