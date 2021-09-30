import React from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux'
function SagaFnApp() {
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    const handleClick = () => {
        dispatch({ type: 'FETCH_TODO_ID', todoId: tododIdRef.current.value })
    }
    const tododIdRef = React.useRef(null)
    return (
        <div className="App">
            <label>Enter todoId</label>
            <input type="number" id="todoid" ref={tododIdRef} />
            <br />
            <button onClick={handleClick}>Click to fetch for single todo</button>
            <br />
            Data fetched: {JSON.stringify(data.FnSagaReducer.data)}
            <br />
            Status {JSON.stringify(data.FnSagaReducer.fetching)}
            <br />
            Todo id {JSON.stringify(data.FnSagaReducer.todoId)}
        </div>
    );
}
export default SagaFnApp;