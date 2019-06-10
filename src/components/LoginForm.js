import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import { Form, Grid, Divider, Segment } from "semantic-ui-react";
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Segment placeholder>
            <Divider vertical>Or</Divider>
          <Grid columns={2} stackable textAlign="centered">
            <Grid.Column style={{ maxWidth: 350 }}>
              <Form
                className="loginForm"
                size="large"
                onSubmit={this.handleLogin}
              >
                <h1 className="login">Login</h1>
                <label htmlFor="username" />
                <Form.Input
                  className="username"
                  type="text"
                  name="username"
                  icon="user"
                  iconPosition="left"
                  placeholder="Username/E-Mail"
                  autoFocus
                  required
                  onChange={this.handleChange}
                />
                <label htmlFor="password" />
                <Form.Input
                  className="password"
                  type="password"
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  required
                  onChange={this.handleChange}
                />
                <button
                  className="ui red button"
                  type="submit"
                  disabled={isLoading}
                >
                  Login
                </button>
                {isLoading && <Spinner name="circle" color="blue" />}
                {err && <p style={{ color: "red" }}>{err}</p>}
              </Form>
            </Grid.Column>
            <Grid.Column verticalAlign="middle" style={{ maxWidth: 350 }}>
              <a className="ui black button" href="/register">
                Register
              </a>
            </Grid.Column>
          </Grid>
        </Segment>
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
