import { Component } from "react";
import cardService from "../services/cardService";
import Card from "./card";
import PageHeader from "./common/pageHeader";
class MyCards extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    if (data.length) {
      this.setState({
        cards: data,
      });
    }
  }
  render() {
    const { cards } = this.state;

    return (
      <>
        <PageHeader title="My Cards" para="Here you can see all your cards" />
        <div className="container">
          <div className="row">
            <div className="col-4-md">
              {cards.map((card) => (
                <Card key={card.bizDescription} card={card} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyCards;
