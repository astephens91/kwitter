import React, { Component } from "react";
import { connect } from "react-redux";
import { registerThenGoToUserProfile as register } from "../actions";
import { Form, Grid } from "semantic-ui-react";
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
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 350 }}>
            <Form className="registerForm" size="large">
              <Form.Field>
                <h1 className="register">Register</h1>
                <form onSubmit={this.handleRegister}>
                  <label htmlFor="displayName" />
                  <Form.Input
                    type="text"
                    name="displayName"
                    icon="mail"
                    iconPosition="left"
                    placeholder="Display Name"
                    autoFocus
                    required
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password" />
                  <Form.Input
                    type="password"
                    name="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    required
                    onChange={this.handleChange}
                  />
                  {/* <label htmlFor="password" />
                  <Form.Input
                    type="password"
                    name="confirmPassword"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Confirm Password"
                    required
                    onChange={this.handleChange}
                  /> */}
                  <label htmlFor="username" />
                  <Form.Input
                    type="text"
                    name="username"
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    required
                    onChange={this.handleChange}
                  />
                  <button
                    className="ui black button"
                    type="submit"
                    disabled={isLoading}
                  >
                    Submit
                  </button>
                </form>
                {isLoading && <Spinner name="circle" color="blue" />}
                {err && <p style={{ color: "red" }}>{err}</p>}
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.registerLoading,
    err: auth.registerError
  }),
  { register }
)(RegisterForm);
