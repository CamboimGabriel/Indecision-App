import React, { useState, useEffect } from "react";
import AddOption from "./components/AddOption";
import Action from "./components/Action";
import Options from "./components/Options";
import Header from "./components/Header";
import OptionModal from "./components/OptionModal";
import "./styles/styles.scss";

const IndecisionApp = () => {
  const json = localStorage.getItem("options")
    ? JSON.parse(localStorage.getItem("options"))
    : [];

  const [options, setOptions] = useState(json);
  const [error, setError] = useState(undefined);
  const [selected, setSelected] = useState([]);
  const [visible, setVisible] = useState(false);

  const app = {
    title: "Indecision",
    subtitle: "Put your life in the hands of a computer.",
  };

  useEffect(() => {
    const json = JSON.stringify(options);
    localStorage.setItem("options", json);
  }, [options]);

  const handleClearSelection = () => {
    setVisible(false);
  };

  const onFormSubmit = (value) => {
    value.preventDefault();

    const newOption = value.target.elements.option.value;

    if (newOption === "") setError("Enter a valid value for this item");
    else if (options.indexOf(newOption) > -1)
      setError("This option already exists");
    else {
      if (error) setError(undefined);
      setOptions([...options, newOption]);
      value.target.elements.option.value = "";
    }
  };

  const removeOption = (option) => {
    const index = options.indexOf(option);
    options.splice(index, 1);
    setOptions(Array.from(options));
  };

  return (
    <div>
      <Header title={app.title} subtitle={app.subtitle} />
      <div className="container">
        <Action
          disabled={options.length === 0}
          options={options}
          message={(value) => {
            setSelected(value);
            setVisible(true);
          }}
        />
        <div className="widget">
          <Options
            options={options}
            remove={removeOption}
            onClick={() => setOptions([])}
          />
          {options.length === 0 && (
            <p className="widget__message">
              Please add an option to get started!
            </p>
          )}
          <AddOption onFormSubmit={onFormSubmit} error={error} />
          <OptionModal
            selectedOption={selected}
            visible={visible}
            close={handleClearSelection}
          />
        </div>
      </div>
    </div>
  );
};

export default IndecisionApp;
