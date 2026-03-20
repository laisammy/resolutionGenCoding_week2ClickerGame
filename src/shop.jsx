import catClick from "./catClick";

export default function shop() {
    const shopItems = [
        {
            name: "Cat Food",
            description: "Feed the cat! Gives you more marbles per click!!",
            cost: 50,
            startingCost: 50,
        },
        {
            name: "Autopop",
            description: "Too lazy? Buy this for auto pops!",
            cost: 20,
            startingCost: 20,
        }
    ]

    function createShopItems() {
        document.querySelectorAll(".shop-item").forEach((element) => {
            element.remove();
        });

        shopItems.forEach((item) => {
            const shopItem = document.createElement("div");
            shopItem.className = "shop-item";

            shopItem.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
            <button onclick = "buyItem('${item.name}')">
                Buy $${item.cost}
            </button>
            `;

            shopContainer.appendChild(shopItem);
        });
    }

    function buyItem(itemName) {
        const item = shopItems.find((i) => i.name === itemName);
        if (totalClickCount >= item.cost) {
            totalClickCount -= item.cost;
            count.textContent = totalClickCount;

            let amount = 1;

            const itemInArray = itemsOwned.find((obj) => obj.name === item.name);
            if (itemInArray) {
                itemInArray.amount++;
                console.log(`Found ${item.name}, added 1!`);
                amount = itemInArray.amount;
            } else {
                itemsOwned.push({ name: item.name, amount: 1 });
                console.log(`Added ${item.name} to itemsOwned!`);
            }

            console.log(`Bought ${itemName}!`);
        } else {
            console.log(`Not enough clicks! Need ${item.cost}`);
        }
    }

    setInterval(() => {
        const catOwned = itemsOwned.find((i) => i.name === "Cat");
        if (catOwned) {
            for (let i = 0; i < catOwned.amount; i++) {
                catClick();
            }
        }
        
    }, 1000);

    return(
        <div>
            <h1 className="text-xl">Shop</h1>
        </div>
    )
}