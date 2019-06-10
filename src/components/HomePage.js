import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Navbar from "./Navbar";
import WriteKweet from "./WriteKweet"

export class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        {/* This is where the Navbar will go */}
        <Navbar />
        <Grid container stackable>
          <Grid.Row columns={2} style={{ marginTop: "80px" }}>
            <Grid.Column floated="left" width={6}>
              <WriteKweet/>
              {/* this is where profilepicture component goes
                        this is where userfeed component goes */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default HomePage;
