import React, { useState } from "react";

export default function Modal1({ ideas, setIdeas }) {
  const [formData, setFormData] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newIdeas = [...ideas, formData];
    setIdeas(newIdeas);
    console.log(ideas);
  };

  return (
    <>
      <form>
        <h3 style={{ textAlign: "center" }}>Add new Ideas...</h3>
        <label>Tag</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="tags"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option selected>Open this select menu</option>
          <option value="Idea">Idea</option>
          <option value="Primary">Primary</option>
          <option value="Work">Work</option>
          <option value="Optional">Optional</option>
        </select>
        <br />
        <label>Idea</label>
        <input className="form-control" name="idea" onChange={handleChange} />
        <br />
        <label>User</label>
        <input className="form-control " name="user" onChange={handleChange} />
        <button
          className="btn btn-primary mt-3"
          style={{ float: "right" }}
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}
