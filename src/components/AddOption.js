import React from "react";

const AddOption = ({ onFormSubmit, error }) => (
  <div>
    <form onSubmit={onFormSubmit}>
      {error && <p className="addOption__error">{error}</p>}
      <div className="addOption">
        <input type="text" name="option" className="addOption__input" />
        <button className="button">Add Option</button>
      </div>
    </form>
  </div>
);

export default AddOption;
