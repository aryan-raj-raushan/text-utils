import React, { useState } from "react";
const TextForm = (props) => {
  const [text, setText] = useState("");

  const upperCase = () => {
    // console.log("button is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const lowerCase = () => {
    // console.log("button is clicked");
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleOnChange = (event) => {
    // console.log("onChange is fired");
    setText(event.target.value);
  };

  const removeSpace = () => {
    let newText3 = text.split(/[ ]+/);
    setText(newText3.join(" "));
    props.showAlert("Extra Space Removed", "success");
  };

  const handleCopy = () => {
    // let myText = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text Copied", "success");
  };

  const deleteText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  return (
    <>
      <div
        className="container mb-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter your text here"
          style={{
            backgroundColor: props.mode === "dark" ? "#2a1f5b" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <div className="container mt-3">
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={upperCase}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={lowerCase}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={removeSpace}
          >
            Remove Space
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={deleteText}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview!!!"}</p>
      </div>
    </>
  );
};

export default TextForm;
