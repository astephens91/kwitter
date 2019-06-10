import React, { Component } from "react";
import { Menu, Button, Image } from "semantic-ui-react";
import {Link } from "react-router-dom";
import { connect } from "react-redux";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
          <Menu id="bar">
            <React.Fragment>
              <Link to="/home">
                <Menu.Item>
                  Kwitter{/* Logo Thumbnail goes here */}
                </Menu.Item>
              </Link>
              <Link to="/profile">
                 <Menu.Item>
                   
                     Profile
                   
                 </Menu.Item>
                </Link>
              <Menu.Menu position="right">

                <Menu.Item>
                  <Button style={{ backgroundColor: "#ff0000", color: "white"}}
                  /*Logout handler will go here */
                  >
                    Logout
                  </Button>
                </Menu.Item>
              </Menu.Menu>
            </React.Fragment>
          </Menu>
          </React.Fragment>
        ) 

  
    }};


