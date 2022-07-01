import React, { Component } from "react";
import './style.css';
import AuthButton from "./AuthButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering in React.
        </h1>
        <AuthButton isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}

export default App;
