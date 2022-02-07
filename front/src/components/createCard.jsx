import Form from "./common/form";
import Joi from "joi";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import { toast } from "react-toastify";
class CreateCard extends Form {
  state = {
    form: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
  };
  schema = {
    bizName: Joi.string().min(2).max(255).required(),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
    bizImage: Joi.string().min(11).max(1024).allow("").uri(),
  };
  async doSubmit() {
    const {
      form: { bizImage, ...body },
    } = this.state;
    if (bizImage) {
      body.bizImage = bizImage;
    }
    try {
      await cardService.createCard(body);
      toast("Awesome You Created A New Card");
      this.props.history.push("/my-cards");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({
          errors: {
            bizImage: response.data,
          },
        });
      }
    }
  }
  render() {
    return (
      <div className="container-fluid card-container">
        <div className="row">
          <div className="col-12">
            <PageHeader title="Create Card" para="As many as u like 😎" />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4 ">
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              {this.renderInput("bizName", "Business Name")}
              {this.renderInput("bizDescription", "Description")}
              {this.renderInput("bizAddress", "Address")}
              {this.renderInput("bizPhone", "Phone ")}
              {this.renderInput("bizImage", "Image ")}
              <div className="mt-3">{this.renderButton("Create Card ")}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCard;
