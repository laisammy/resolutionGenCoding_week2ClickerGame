import { useState } from "react";
import catImg from "./assets/cat.png";
import popImg from "./assets/pop.png";
import popSFX from "./assets/popSFX.mp3";

export default function CatClick({totalClickCount, setTotalClickCount, itemsOwned, clicksPerSecond}) {
    const defaultImg = catImg;
    const pressedImg = popImg;
    const audio = new Audio(popSFX);

    const [image, setImage] = useState(defaultImg);

    function click() {
        let multiplier = 1;

        audio.currentTime = 0;
        audio.play();

        const food = itemsOwned.find(i => i.name === "Cat Food");
        if (food) multiplier += food.amount;

        setTotalClickCount(prev => prev + multiplier);
    }

    return (
        <div>
            <div className="flex flex-col items-center">
                <button 
                onClick={click}
                onMouseDown={() => setImage(pressedImg)} 
                onMouseUp={() => setImage(defaultImg)}
                className="bg-amber-100 rounded-xl"
                >
                <img src={image} />
                </button>

                <p className="text-xl font-medium">Click Count: {totalClickCount}</p>
                <p className="text-xs">Autopops Per Second: {clicksPerSecond}</p>
            </div>
        </div>
    );
}