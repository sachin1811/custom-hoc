import React from "react";

const posts = (props) => {
  return (
    <>
      <h4>Posts Count</h4>
      <button onClick={props.increment}>+</button>
      <p>
        {props.count} {props.count > 1 ? "posts" : "post"}
      </p>
      <button onClick={props.decrement}>-</button>
    </>
  );
};

export default posts;
