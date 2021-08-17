import React, { useState } from "react";
import "./styles.css";

var foodEmojiObject = {
  "🥞": "pancakes",
  "🍔": "burger",
  "🥪": "sandwich",
  "🍱": "bento-box",
  "🍩": "doughnut",
  "🍪": "cookie",
  "🍕": "pizza",
  "🧆": "falafel",
  "🍝": "spaghetti",
  "🧁": "cupcake"
};

var emojisWeHave = Object.keys(foodEmojiObject);

export default function App() {
  const [foodEmoji, setFoodEmoji] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;

    var foodEmoji = foodEmojiObject[userInput];

    if (foodEmoji === undefined) {
      foodEmoji = "we dont know this!";
    }
    setFoodEmoji(foodEmoji); // react call to show output
  }

  function onCkickHandler(emoji) {
    var foodEmoji = foodEmojiObject[emoji];
    setFoodEmoji(foodEmoji);
  }

  return (
    <div className="App">
      <div className="printed-text">Fun with Food Emoji</div>
      <input
        style={{
          cursor: "pointer",
          backgroundColor: "#fb923c",
          background: "#E5E7EB",
          borderRadius: "0.5rem",
          padding: "0.5rem  1rem",
          border: "1px solid black",
          margin: "1rem 0.3rem"
        }}
        placeholder="enter a food emoji"
        onChange={onChangeHandler}
      />
      <div className="printed-text" style={{ color: "blue" }}>
        {foodEmoji}
      </div>
      <div className="printed-text">Emojies in our database</div>
      {emojisWeHave.map(function (emoji) {
        return (
          <span
            onClick={() => onCkickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
