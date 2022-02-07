import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import userService from "../services/usersService";
class Signup extends Form {
  state = {
    form: {
      password: "",
      email: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
  };
  async doSubmit() {
    const { email, password } = this.state.form;
    try {
      await userService.login(email, password);
      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: response.data });
      }
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <PageHeader title="Sign In" para="Registered users only" />
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              {this.renderInput("email", "Email")}
              {this.renderInput("password", "Password", "password")}
              <div className="mt-3">{this.renderButton("Sign In ")}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
