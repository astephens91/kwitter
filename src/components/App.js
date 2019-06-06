import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, RegisterForm, Navbar } from ".";
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() =><React.Fragment> <Navbar/>><LoginForm /></React.Fragment>} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/register" render={() => <RegisterForm />} />

      </Switch>
    );
  }
}

export default App;
