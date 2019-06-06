import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import { Form, Grid } from "semantic-ui-react";
import Spinner from "react-spinkit";

class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <Grid textAlign="center" style={{ height: '100vh' }}>
          <Form className="loginForm" size="large">
            <Form.Field>
              <h1 class="login">Login</h1>
              <form onSubmit={this.handleLogin}>
                <label htmlFor="username"></label>
                <Form.Input
                  type="text"
                  name="username"
                  icon="user"
                  iconPosition="left"
                  placeholder="Username/E-Mail"
                  autoFocus
                  required
                  onChange={this.handleChange}
                />
                <label htmlFor="password"></label>
                <Form.Input
                  type="password"
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  required
                  onChange={this.handleChange}
                />
                <button class="ui red button" type="submit" disabled={isLoading}>
                  Login
          </button>
                <a class="ui black button" href="/register">Register</a>
              </form>
              {isLoading && <Spinner name="circle" color="blue" />}
              {err && <p style={{ color: "red" }}>{err}</p>}
            </Form.Field>
          </Form>
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm);
