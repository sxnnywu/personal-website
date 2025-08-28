import React, { useEffect, useState } from "react";
import './HeartButton.css';

function HeartButton() {

  const [count, setCount] = useState(0);
  const API_URL = "http://localhost:4000";

  useEffect(() => {
    fetch(`${API_URL}/likes`)
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(err => console.error("Error fetching likes:", err));
  }, []);

  function handleClick() {
    setCount(prev => prev + 1);
    fetch(`${API_URL}/likes`, { method: "POST" })
      .catch(err => {
        console.error("Error incrementing likes:", err);
        setCount(prev => prev - 1);
      });
  }

  return (
    <div className="heart" onClick={handleClick}>
      ❤️ {count}
    </div>
  );
}

export default HeartButton;
