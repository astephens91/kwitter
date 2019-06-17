import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { push } from "connected-react-router"

class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = event => {
    
    const kwitterURL = "https://kwitter-api.herokuapp.com";
   
    let token = this.props.auth.login.token;
    console.log(token)

    fetch(`${kwitterURL}/auth/logout`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => {
        
        return response.json();
      })
      .then(data => {
        console.log(data)
        
      })
      .catch(err => {
        console.log(err)
        
      });
      this.props.dispatch(push("/"))
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name= "logout"
            active={activeItem === "logout"}
            onClick={this.handleLogout}
            
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(MenuExampleSecondary)