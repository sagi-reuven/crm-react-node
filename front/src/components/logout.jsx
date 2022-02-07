import { Component } from "react";
import userService from "../services/usersService";

class Logout extends Component {
  componentDidMount() {
    userService.logoutUser();
    window.location = "/signin";
  }
  render() {
    return null;
  }
}

export default Logout;
