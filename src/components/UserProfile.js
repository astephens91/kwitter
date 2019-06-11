// import React, { Component } from "react";
// import { getLoggedInUser } from "../actions"
// // import Navbar from "./Navbar";

// class UserProfile extends Component {
//   componentDidMount() {
//     this.props.getUserLoggedInUser();
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <p>This is the user profile</p>
//         <p>{this.props.user.username}</p>
//         <p>{this.props.user.displayName}</p>
//         <p>{this.props.user.about}</p>
//         <p>{this.props.user.createdAt}</p>
//         <p>{this.props.user.updatedAt}</p>
//       </React.Fragment>
//     // <Navbar />
    
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     user: state.users.user,
//   }
// }

// const mapDispatchToProps = {
//   getUserLoggedInUser
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
//   )(UserProfile);
