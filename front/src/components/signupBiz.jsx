import PageHeader from "./common/pageHeader";
import Form from "./common/form";
import Joi from "joi";
import { Redirect } from "react-router-dom";
import userService from "../services/usersService";
import { toast } from "react-toastify";

class BizSignUp extends Form {
  state = { form: { email: "", password: "", name: "" }, errors: {} };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: true };
    try {
      await userService.createUser(body);
      await userService.login(body.email, body.password);
      toast("Created a buisness user");
      window.location = "/create-card";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }

  render() {
    if (userService.getCurrentUser()) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <PageHeader title="Business Owner Sign Up Form" />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <small className="text-center fw-bold">have a new account it's free!!</small>
            </div>
          </div>
          <form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}

            <div className="mt-4 text-center">{this.renderButton("Next")}</div>
          </form>
        </div>
      </>
    );
  }
}

export default BizSignUp;
