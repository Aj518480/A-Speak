import React from "react";


function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Name</strong>
        </label>
        <input
          className="form-control"
          id="Name"
          type="text"
          value={q}
          placeholder="A-Speak User's Name"
          name="q"
          onChange={handleInputChange}
          required
        />

      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>

      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Get Started
        </button>
      </div>
    </form>
  );
}

export default Form;
