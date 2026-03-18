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

    return(
        <div>
            <h1 className="text-xl">Shop</h1>
        </div>
    )
}