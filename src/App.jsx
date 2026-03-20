import { useState, useEffect } from "react";
import Shop from "./shop";
import CatClick from "./catClick";

export default function App() {
  const [totalClickCount, setTotalClickCount] = useState(0);
  const [itemsOwned, setItemsOwned] = useState([]);

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
    <div className="bg-orange-200">
      <CatClick
        totalClickCount={totalClickCount}
        setTotalClickCount={setTotalClickCount}
        itemsOwned={itemsOwned}
      />

      <Shop
        totalClickCount={totalClickCount}
        setTotalClickCount={setTotalClickCount}
        itemsOwned={itemsOwned}
        setItemsOwned={setItemsOwned}
      />
    </div>
  );
}
