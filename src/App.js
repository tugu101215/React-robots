import React, { Component } from "react";
import "./styles.css";
import { CartList } from "./components/cart-list/index";
import { SearchBox } from "./components/search/index";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ""
    };
  }

  onSearchChanged = event => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ robots: data }));
  }

  render() {
    const { robots, searchField } = this.state;

    const filteredRobotos = robots.filter(el =>
      el.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1>Роботуудын хайлт</h1>
        <SearchBox onSearch={this.onSearchChanged} />
        <CartList robots={filteredRobotos} />
      </div>
    );
  }
}
