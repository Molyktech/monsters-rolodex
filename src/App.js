import React, { Component } from "react";
import { CardList } from "./components/card-list/CardList.component";
import { SearchField } from "./components/search/SearchField.component";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  };
  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue);
    });
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchField handleChange={this.handleChange} placeholder="Search Monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
