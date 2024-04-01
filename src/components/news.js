import React from "react";

const News = (props) => {
  return (
    <>
      <h4>Message Count</h4>
      <button onClick={props.increment}>+</button>
      <p>
        {props.count} {props.count > 1 ? "messages" : "message"}
      </p>
      <button onClick={props.decrement}>-</button>
    </>
  );
};

export default News;
