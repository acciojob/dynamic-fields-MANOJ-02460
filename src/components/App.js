
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [inputs, setInputs] = useState([{ name: "", age: "" }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;

    setInputs(values => values.map((input, inputIndex) => (
      inputIndex === index ? { ...input, [name]: value } : input
    )));
  };

  const handleAddMore = () => {
    setInputs(values => [...values, { name: "", age: "" }]);
  };

  const handleRemove = index => {
    setInputs(values => values.filter((_, inputIndex) => inputIndex !== index));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            name="name"
            placeholder="Name"
            type="text"
            value={input.name}
            onChange={event => handleChange(index, event)}
          />

          <input
            name="age"
            placeholder="Age"
            type="number"
            value={input.age}
            onChange={event => handleChange(index, event)}
          />

          <button type="button" onClick={() => handleRemove(index)}>
            Remove
          </button>
        </div>
      ))}

      <div style={{ marginTop: '20px' }}>
        <button type="button" onClick={handleAddMore}>Add More</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default App
