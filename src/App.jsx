import { useState, useEffect } from "react";
import Shop from "./shop";
import CatClick from "./catClick";
import Inventory from "./inventory";

export default function App() {
    const [totalClickCount, setTotalClickCount] = useState(0);
    const [itemsOwned, setItemsOwned] = useState([]);

    const autoItem = itemsOwned.find(i => i.name === "Autopop");
    const clicksPerSecond = autoItem ? autoItem.amount : 0;


    useEffect(() => {
        const interval = setInterval(() => {
            const auto = itemsOwned.find(i => i.name === "Autopop");
            if (auto) {
            setTotalClickCount(prev => prev + auto.amount);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [itemsOwned]);

    return (
        <div className="bg-orange-200 flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold pt-20">CatPop!</h1>
            <div className="flex flex-row items-center justify-center h-screen gap-x-15">
                <Inventory
                    itemsOwned={itemsOwned}
                />
                <CatClick
                    totalClickCount={totalClickCount}
                    setTotalClickCount={setTotalClickCount}
                    itemsOwned={itemsOwned}
                    clicksPerSecond={clicksPerSecond}
                />

                <Shop
                    totalClickCount={totalClickCount}
                    setTotalClickCount={setTotalClickCount}
                    itemsOwned={itemsOwned}
                    setItemsOwned={setItemsOwned}
                />
            </div>
        </div>
    );
}
