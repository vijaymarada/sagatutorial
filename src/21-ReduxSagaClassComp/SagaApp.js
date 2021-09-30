import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import { connect } from "react-redux";
class SagaApp extends Component {
  render() {
    const { fetching, dog, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Redux Saga - Class Component</h1>
        </header>
        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}
        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={() => this.props.dispatch({ type: "API_CALL_REQUEST" })}>Request a Dog</button>
        )}
        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fetching: state.reducer.fetching,
    dog: state.reducer.dog,
    error: state.reducer.error
  };
};
export default connect(mapStateToProps)(SagaApp);