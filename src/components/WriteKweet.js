import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { handleCreateKweet } from "../actions";
import { connect } from "react-redux";

class WriteKweet extends Component {
  state = {
    kweet: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleCreateKweet(this.state.kweet)
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // console.log(this);
    const { handleSubmit, handleChange } = this;
    const { kweet } = this.state;
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field
          name="kweet"
          onChange={handleChange}
          id="form-textarea-control-opinion"
          control={TextArea}
          placeholder="Write Kweet..."
          value={kweet}
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Submit"
        />
      </Form>
    );
  }
}

export default connect(
      null
    ,
    { handleCreateKweet }
  )(WriteKweet);
