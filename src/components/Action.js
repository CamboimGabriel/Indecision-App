import React from "react";

const Action = ({ disabled, options, message }) => {
  const onMakeDecision = () => {
    const option = options[Math.floor(Math.random() * options.length)];

    message(option);
  };

  return (
    <div>
      <button
        className="big-button"
        disabled={disabled}
        onClick={onMakeDecision}
      >
        What Should I Do?
      </button>
    </div>
  );
};

export default Action;
