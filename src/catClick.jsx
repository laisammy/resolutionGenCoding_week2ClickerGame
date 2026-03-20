import { useState } from "react";

export default function CatClick({totalClickCount, setTotalClickCount, itemsOwned}) {
  const defaultImg = "src/assets/cat.png";
  const pressedImg = "src/assets/pop.png";

  const [image, setImage] = useState(defaultImg);

  function click() {
    let multiplier = 1;

    const food = itemsOwned.find(i => i.name === "Cat Food");
    if (food) multiplier += food.amount;

    setTotalClickCount(prev => prev + multiplier);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <button 
        onClick={click}
        onMouseDown={() => setImage(pressedImg)} 
        onMouseUp={() => setImage(defaultImg)}
        className="bg-amber-100 rounded-xl"
        >
          <img src={image} />
        </button>

        <p className="text-xl">Click Count: {totalClickCount}</p>
      </div>
    </div>
  );
}