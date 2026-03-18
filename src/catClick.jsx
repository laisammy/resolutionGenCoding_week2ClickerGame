import { useState } from "react";

export default function catClick() {
  const defaultImg = "src/assets/cat.png";
  const pressedImg = "src/assets/pop.png";

  const [image, setImage] = useState(defaultImg);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
      id="catClick"
      onMouseDown={() => setImage(pressedImg)}
      onMouseUp={() => setImage(defaultImg)}
      onMouseLeave={() => setImage(defaultImg)}
      onTouchStart={() => setImage(pressedImg)}
      onTouchEnd={() => setImage(defaultImg)}

      className="bg-amber-100 w-100 h-100 rounded-2xl"
      >
        <img src={image} alt="meow :3" />
      </button>
    </div>
  );
}
