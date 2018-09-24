import React from "react";
import styled from "styled-components";

const Suggestions = props => {
  const options = props.results.map(stock => (
    <Button key={stock.name}>{stock.name}</Button>
  ));
  return <List>{options}</List>;
};

export default Suggestions;

const List = styled.ul`
  background: #319cd6;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px;
`;

const Button = styled.button`
  background: #77d9d4;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px;
`;
