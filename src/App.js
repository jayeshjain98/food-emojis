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
      <h1>Fun with Food Emoji</h1>
      <input placeholder="enter a food emoji" onChange={onChangeHandler} />
      <h3 style={{ color: "blue" }}>{foodEmoji}</h3>
      <h2>Emojies in our database</h2>
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
