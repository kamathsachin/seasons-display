import React from "react";

const Loader = (props) => {
  return (
    <div class="ui active inverted dimmer">
      <div class="ui big text loader">{props.displayMessage}</div>
    </div>
  );
};

Loader.defaultProps = {
  displayMessage: "Loading...",
};

export default Loader;
