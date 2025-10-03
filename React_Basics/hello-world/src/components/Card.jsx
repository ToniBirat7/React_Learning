import React from "react";

const Card = ({ props }) => {
  console.log("Props", props);
  return (
    <>
      <h1>This is Card {props}</h1>
    </>
  );
};

export default Card;
