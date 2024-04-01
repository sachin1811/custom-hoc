import React from "react";

//just a normal function
//takes a component
const hoc = (WrappedComp) => {
  //return a React component
  const NewComp = () => {
    const [count, setCount] = React.useState(0);
    //jsx
    return (
      <WrappedComp
        increment={() => setCount((count) => count + 1)}
        count={count}
        decrement={() =>
          setCount((count) => {
            return count ? count - 1 : count;
          })
        }
      />
    );
  };
  return NewComp;
};

export default hoc;
