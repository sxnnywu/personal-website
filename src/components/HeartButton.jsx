import { useEffect, useState } from "react";
import axios from "axios";

function HeartButton() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("/api/heart-count").then(res => setCount(res.data.count));
  }, []);

  const handleClick = () => {
    axios.post("/api/heart-increment").then(res => {
      setCount(res.data.count);
    });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "1.2rem",
      }}
    >
      ❤️ {count}
    </button>
  );
}

export default HeartButton;
