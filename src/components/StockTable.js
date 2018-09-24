import React, { Component } from "react";
import styled from "styled-components";
import { Top100 } from "../constants/Top100";

import StockRow from "./StockRow";

export default class StockTable extends Component {
  state = {
    query: "",
    results: [...Top100]
  };

  getSuggestions = () => {
    let result = Top100.filter(stock => stock.symbol === this.state.query);

    this.setState({
      results: result
    });
  };

  handleInputChange = e => {
    this.setState(
      {
        query: e.target.value.toUpperCase()
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getSuggestions();
          }
        } else if (!this.state.query) {
          this.setState({
            results: [...Top100]
          });
        }
      }
    );
  };
  render() {
    return (
      <div>
        <input
          placeholder="Search Stocks"
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        <StyledTable>
          <thead>
            <tr>
              <StyledTh>Stock Name</StyledTh>
              <StyledTh>Share Value</StyledTh>
              <StyledTh>Loss | Gain</StyledTh>
              <StyledTh> </StyledTh>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map((stock, idx) => (
              <StockRow
                key={idx}
                index={idx}
                name={stock.name}
                symbol={stock.symbol}
                handleClick={this.props.handleClick}
              />
            ))}
          </tbody>
        </StyledTable>
      </div>
    );
  }
}

const StyledTable = styled.table`
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  color: #015249;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  padding: 8px;
  background: white;
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
`;

const StyledTh = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #77d9d4;
  color: white;
`;

// const StyledTr = styled.tr`
//   tr:nth-child(even){background-color: #f2f2f2;
// `;

// #customers tr:nth-child(even){background-color: #f2f2f2;}

// #customers tr:hover {background-color: #ddd;}

// #customers th {
//     padding-top: 12px;
//     padding-bottom: 12px;
//     text-align: left;
//     background-color: #4CAF50;
//     color: white;
