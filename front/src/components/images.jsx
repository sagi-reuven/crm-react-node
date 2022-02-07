import { Component } from "react";
import getImages from "../services/images";
import Image from "./image";
import PageHeader from "./common/pageHeader";
class Images extends Component {
  state = { imagesArray: [] };

  async componentDidMount() {
    const images = await getImages();
    this.setState({ imagesArray: images });
  }
  handleIncrement = (id) => {
    const { imagesArray } = this.state;
    const updated = imagesArray.map((img) => {
      if (img.id === id) {
        return { ...img, id: img.id + 1 };
      }
      return img;
    });
    this.setState({ imagesArray: updated });
  };

  handleDecrement = (id) => {
    const { imagesArray } = this.state;
    const updated = imagesArray.map((img) => {
      if (img.id === id) {
        return { ...img, id: img.id - 1 };
      }
      return img;
    });
    this.setState({ imagesArray: updated });
  };

  handleDelete = (id) => {
    const { imagesArray } = this.state;
    const updated = imagesArray.filter((img) => img.id !== id);
    this.setState({ imagesArray: updated });
  };
  render() {
    const { imagesArray } = this.state;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PageHeader
                title="Color Cards Page"
                para="here you can find cards with diffrent colors"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {imagesArray.map((image) => (
              <Image
                key={image.title}
                image={image}
                onIncrement={() => this.handleIncrement(image.id)}
                onDecrement={() => this.handleDecrement(image.id)}
                onDelete={() => this.handleDelete(image.id)}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Images;
