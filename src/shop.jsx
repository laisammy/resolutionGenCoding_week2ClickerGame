import { useState } from "react";
import buySFX from "./assets/buySFX.mp3";

export default function shop({totalClickCount, setTotalClickCount, itemsOwned, setItemsOwned}) {
    const [shopItems, setShopItems] = useState([
        { name: "Cat Food", cost: 50 },
        { name: "Autopop", cost: 20 }
    ]);

    const buySFX_audio = new Audio(buySFX)

    function buyItem(itemName) {
        const item = shopItems.find(i => i.name === itemName);

        if (totalClickCount < item.cost) return;

        setTotalClickCount(prev => prev - item.cost);
        buySFX_audio.currentTime = 0;
        buySFX_audio.play();

        setItemsOwned(prev => {
            const existing = prev.find(i => i.name === itemName);
            if (existing) {
                return prev.map(i => 
                    i.name === itemName ? {...i, amount: i.amount + 1} : i
                );
            }
            return [...prev, {name: itemName, amount: 1}];
        })

        setShopItems(prev =>
            prev.map(i =>
                i.name === itemName
                    ? { ...i, cost: Math.round(i.cost * 1.5)}
                    : i
            )
        )
    }
    return(
        <div>
            <h1 className="text-3xl flex flex-col items-center font-semibold">Shop</h1>

            {shopItems.map(item => (
                <div key = {item.name}
                className="flex flex-row items-center justify-between w-full max-w-md mx-auto my-3 p-3 bg-amber-100 rounded-xl gap-x-10"
                >
                    <h3 className="text-2xl text-black font-semibold">
                        {item.name}
                    </h3>
                    <button 
                    onClick = {() => buyItem(item.name)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-xl font-medium"
                    >
                        Buy ${item.cost}
                    </button>
                </div>
            ))}
        </div>
    )
}

