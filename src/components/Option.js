import React from "react";

const Option = ({ option, remove, count }) => (
  <div className="option">
    <p className="option__text">
      {count}. {option}
    </p>
    <button onClick={() => remove(option)} className="button button--link">
      Remove
    </button>
  </div>
);

export default Option;
