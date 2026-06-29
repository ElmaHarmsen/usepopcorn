import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

function Text() {
  // External movie rating - data coming from the StarRating component
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StarRating maxRating={5} />
    <StarRating
      size={24}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      maxRating={5}
      defaultRating={3}
    />

    <Text />
  </React.StrictMode>,
);
