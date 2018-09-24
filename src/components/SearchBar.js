import React, { Component } from "react";
import Suggestions from "./Suggestions";
import { Top100 } from "../constants/Top100";
import styled from "styled-components";

class SearchBar extends Component {
  state = {
    query: "",
    results: []
  };

  getSuggestions = () => {
    let result = Top100.filter(stock => stock.symbol === this.state.query);

    this.setState({
      results: result
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getSuggestions();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <Search>
        <input
          placeholder="Search Stocks"
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </Search>
    );
  }
}

export default SearchBar;

const Search = styled.form`
  background: #319cd6;

  > input {
    background: #77d9d4;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 20px;
  }
`;
