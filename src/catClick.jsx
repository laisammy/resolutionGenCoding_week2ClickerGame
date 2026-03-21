import { useState } from "react";

export default function CatClick({totalClickCount, setTotalClickCount, itemsOwned, clicksPerSecond}) {
    const defaultImg = "src/assets/cat.png";
    const pressedImg = "src/assets/pop.png";
    const popSound = "src/assets/popSFX.mp3";
    const audio = new Audio(popSound);

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