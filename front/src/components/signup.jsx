import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import { createUser } from "../services/usersService";
import { toast } from "react-toastify";
class Signup extends Form {
  state = {
    form: {
      name: "",
      email: "",
      password: "",
    },
  };

  schema = {
    name: Joi.string().required().min(2),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
  };

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: false };
    try {
      await createUser(body);
      toast.success("👌 New Account Created! 🎉", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.props.history.replace("/signin");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({
          errors: { email: response.data },
        });
      }
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <PageHeader title="Sign Up Page" para="its free..." />
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              {this.renderInput("name", "First Name")}
              {this.renderInput("email", "Email")}
              {this.renderInput("password", "Password", "password")}
              <div className="mt-3">{this.renderButton("Sign Up ")}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
