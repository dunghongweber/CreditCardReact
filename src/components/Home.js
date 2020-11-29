import React, { Component } from "react";
import Cards from "./Cards";
import axios from "axios";

class Home extends Component {
  //store data of all cards from API
  state = {
    cards: [],
  };
  componentDidMount() {
    axios.get("https://dh-react-card.herokuapp.com/all-cards").then((res) => {
      console.log(res);

      this.setState({
        cards: res.data,
      });
    });
  }

  addCard = (c) => {
    //find latest key
    let newKey = 1;
    this.state.cards.forEach((e) => {
      if (e.id >= newKey) {
        console.log(e.id);
        newKey = e.id + 1;
      }
    });
    //assign new key
    c.id = newKey;

    let cardsC = [...this.state.cards, c];
    this.setState({
      cards: cardsC,
    });
  };
  deleteCard = (id) => {
    let cardsC = this.state.cards.filter((c) => c.id !== id);
    this.setState({
      cards: cardsC,
    });
  };

  render() {
    return (
      <div className="Home container row">
        <Cards
          cardsList={this.state.cards}
          deleteCard={this.deleteCard}
        ></Cards>
      </div>
    );
  }
}
export default Home;
