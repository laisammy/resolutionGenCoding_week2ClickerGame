export default function inventory({itemsOwned}) {
    return(
        <div>
            <h1 className="text-3xl flex flex-col items-center font-semibold">Inventory</h1>
            {itemsOwned.length === 0 && (
                <p className="text-gray-400 text-center">You don't own any items!</p>
            )}

            {itemsOwned.map(item => (
                <div
                key={item.name}
                className="flex flex-row justify-between items-center bg-amber-100 p-2 rounded-lg my-2"
                > 
                    <span className="font-medium">{item.name}</span>
                    <span className="text-gray-700">x{item.amount}</span>
                </div>
            ))}
        </div>
    )
}