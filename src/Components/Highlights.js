import React, { useState } from "react";
import "./Highlights.css";
import Draggable from "react-draggable";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function Highlights({ allideas, ideas, setIdeas, editIdea }) {
  const [editData, setEditData] = useState(false);
  const [formData, setFormData] = useState("");
  let index = allideas.indexOf(ideas);
  function color() {
    let rgb = [];
    for (let i = 0; i < 3; i++) rgb.push(Math.floor(Math.floor(255-150*Math.random())));
    return "rgb(" + rgb.join(",") + ")";
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(allideas);
    let newdata = [...allideas];
    newdata[index] = formData;
    setIdeas(newdata);
    console.log(formData);
    // console.log(editData);
    setEditData(false); 
    // console.log(editData);
  };
  return (
    <>
      {editData ? (
        <Draggable>
          <div className="highlights" style={{ background: `${color()}` }}>
            <form>
              <label>Tag</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="tags"
                onChange={handleChange}
              >
                <option selected>Open this select menu</option>
                <option value="Idea">Idea</option>
                <option value="Primary">Primary</option>
                <option value="Work">Work</option>
                <option value="Optional">Optional</option>
              </select>
              <br />
              <label>Idea</label>
              <input
                className="form-control"
                name="idea"
                onChange={handleChange}
              />
              <br />
              <label>User</label>
              <input
                className="form-control"
                name="user"
                onChange={handleChange}
              />
              <button
                className="btn btn-primary mt-3"
                style={{ float: "right" }}
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </Draggable>
      ) : (
        <Draggable>
          <div className="highlights" style={{ background: `${color()}` }}>
            <div className="tags">
              <p className="tag">{ideas.tags}</p>
              <div>
                <EditIcon
                  onClick={(e) => {
                    setEditData(true);
                    // handleSubmit(e);
                    console.log("index", allideas.indexOf(ideas));
                  }}
                />
                <DeleteIcon
                  onClick={() => {
                    let newIdeas = [...allideas];
                    newIdeas.splice(index, 1);
                    setIdeas(newIdeas);
                  }}
                />
              </div>
            </div>
            <p className="idea">{ideas.idea}</p>
            <p className="user">- {ideas.user}</p>
          </div>
        </Draggable>
      )}
    </>
  );
}
