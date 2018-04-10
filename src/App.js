import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // COMPONENT STATE
    this.state = {
      displayDropdown: false
    };
  }
  toggleDropdown = () => {
    this.setState({ displayDropdown: !this.state.displayDropdown });
  };
  render() {
    return (
      <div className="App">
        {/* DESKTOP NAV */}
        <nav className="nav-full">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </nav>
        {/* MOBILE NAV */}
        <nav
          className="nav-mobile"
          style={{ backgroundColor: "#333", color: "#FFF" }}
        >
          <div onClick={event => this.toggleDropdown()}>Menu</div>
        </nav>
        {/* DISPLAY CONDITIONALLY BASED ON STATE */}
        {this.state.displayDropdown ? (
          <div className="nav-dropdown">
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        ) : null}
        {/* SAME THING BELOW WITH INLINE STYLING*/}
        <div
          className="nav-dropdown"
          style={{ display: this.state.displayDropdown ? "block" : "none" }}
        >
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    );
  }
}

export default App;
