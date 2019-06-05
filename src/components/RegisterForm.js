import React, { Component } from "react";
import { connect } from "react-redux";
import {registerThenGoToUserProfile as register} from "../actions";
import Spinner from "react-spinkit";

class RegisterForm extends Component {
  state = { username: "", password: "" };

  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <h1>register</h1>
        <form onSubmit={this.handleRegister}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">nickname</label>
          <input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={isLoading}>
            Register
          </button>
        </form>
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.registerLoading,
    err: auth.registerError
  }),
  {register}
)(RegisterForm);
