import catClick from "./catClick";

export default function shop({totalClickCount, setTotalClickCount, itemsOwned, setItemsOwned}) {
    const shopItems = [
        { name: "Cat Food", cost: 50 },
        { name: "Autopop", cost: 20 }
    ];

    function buyItem(itemName) {
        const item = shopItems.find(i => i.name === itemName);

        if (totalClickCount < item.cost) return;

        setItemsOwned(prev => {
            const existing = prev.find(i => i.name === itemName);
            if (existing) {
                return prev.map(i => 
                    i.name === itemName ? {...i, amount: i.amount + 1} : i
                );
            }
            return [...prev, {name: itemName, amount: 1}];
        })
    }
    return(
        <div>
            <h1 className="text-2xl flex flex-col items-center">Shop</h1>

            {shopItems.map(item => (
                <div key = {item.name}
                className="flex flex-row items-center justify-between w-full max-w-md mx-auto my-2 p-2 bg-amber-100 rounded-xl"
                >
                    <h3 className="text-2xl text-black">
                        {item.name}
                    </h3>
                    <button 
                    onClick = {() => buyItem(item.name)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-xl"
                    >
                        Buy ${item.cost}
                    </button>
                </div>
            ))}
        </div>
    )
}