import React, { useState } from "react";
import Highlights from "./Components/Highlights";
import { Card } from "react-bootstrap";
import Modal from "./Components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [tag, setTag] = useState("All");
  const [ideas, setIdeas] = useState([
    {
      tags: "Primary",
      idea: `Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1 Idea 1.`,
      user: "John Doe 1",
    },
    {
      tags: "Work",
      idea: `Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2 Idea 2.`,
      user: "John Doe 2",
    },
    {
      tags: "Work",
      idea: `Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3 Idea 3.`,
      user: "John Doe 3",
    },
    {
      tags: "Idea",
      idea: `Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4 Idea 4.`,
      user: "John Doe 4",
    },
    {
      tags: "Optional",
      idea: `Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5 Idea 5.`,
      user: "John Doe 5",
    },
    {
      tags: "Idea",
      idea: `Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6 Idea 6.`,
      user: "John Doe 6",
    },
    {
      tags: "Optional",
      idea: `Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7 Idea 7.`,
      user: "John Doe 7",
    },
  ]);

  // function to add idea with form

  return (
    <div className="App">
      <h1 className="heading">Idea Management Tool</h1>
      <div className="page">
        <div className="toolbar">
          <Card>
            <Card.Header>
              <div className="filter">
                <label>Filter by : &nbsp; &nbsp;</label>
                <select
                  className="op"
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                >
                  <option className="op" value="All">
                    All
                  </option>
                  <option className="op" value="Idea">
                    Idea
                  </option>
                  <option className="op" value="Primary">
                    Primary
                  </option>
                  <option className="op" value="Work">
                    Work
                  </option>
                  <option className="op" value="Optional">
                    Optional
                  </option>
                </select>
                <br />
                <br />
              </div>
            </Card.Header>
            <Card.Body>
              <div className="create">
                <Modal ideas={ideas} setIdeas={setIdeas} />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="ideas">
          {tag === "All"
            ? ideas.map((i) => {
                return (
                  <Highlights
                    allideas={ideas}
                    ideas={i}
                    setIdeas={setIdeas}
                    // deleteIdea={deleteIdea}
                  />
                );
              })
            : ideas
                .filter((i) => i.tags === tag)
                .map((i) => {
                  return (
                    <Highlights
                      allideas={ideas}
                      ideas={i}
                      setIdeas={setIdeas}
                      // deleteIdea={deleteIdea}
                    />
                  );
                })}
        </div>
      </div>
    </div>
  );
}

export default App;
