```jsx
import { useState } from "react";

const images = [
  "https://via.placeholder.com/300x200/ff7f7f",
  "https://via.placeholder.com/300x200/7fbfff",
  "https://via.placeholder.com/300x200/7fff7f",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length); // loops to start
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length); // loops to end
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <img
        src={images[index]}
        alt="slider"
        style={{ width: "300px", height: "200px", borderRadius: "10px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={prev}>⏮ Previous</button>
        <button onClick={next} style={{ marginLeft: "10px" }}>
          Next ⏭
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

```
