import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HomePage from "./components/home";
import NavBar from "./components/navbar";
import Signup from "./components/signup";
import UsersTable from "./components/users";
import Posts from "./components/posts";
import Images from "./components/images";
import Comments from "./components/comments";
import { Switch, Route } from "react-router-dom";
/* import PageHeader from "./components/common/pageHeader";
 */ import Signin from "./components/signin";
import userService from "./services/usersService";
import SignupBiz from "./components/signupBiz";
import Logout from "./components/logout";
import CreateCard from "./components/createCard";
class App extends Component {
  state = { user: null };
  componentDidMount() {
    this.setState({
      user: userService.getCurrentUser(),
    });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <header>
          <NavBar user={user} />
          <ToastContainer />
        </header>
        <Switch>
          <Route path="/signupBiz" component={SignupBiz} exact />
          <Route path="/create-card" component={CreateCard} exact />
          <Route path="/logout" component={Logout} exact />
          <Route path="/comments" component={Comments} exact />
          <Route path="/images" component={Images} exact />
          <Route path="/posts" component={Posts} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/users" component={UsersTable} exact />
          <Route path="/" component={HomePage} exact />
          {/*  <Route path="/pageNotFound" component={PageHeader}>
            <PageHeader title="404 - Page Not Found" />
          </Route>
          <Redirect path="*" to="/pageNotFound" /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
