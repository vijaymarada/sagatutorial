import './App.css';
import SagaApp from './21-ReduxSagaClassComp/SagaApp'
import SagaFnApp from './22-ReduxSagaFunctionComp/SagaFnApp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <SagaApp></SagaApp>
       <SagaFnApp></SagaFnApp>
      </header>
    </div>
  );
}

export default App;
