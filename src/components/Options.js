import Option from "./Option";
import React from "react";
import RemoveAll from "./RemoveAll";

const Options = ({ options, remove, onClick }) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <RemoveAll onClick={onClick} />
    </div>

    {options.map((item, index) => (
      <Option
        key={item + index}
        option={item}
        remove={remove}
        count={index + 1}
      />
    ))}
  </div>
);

export default Options;
