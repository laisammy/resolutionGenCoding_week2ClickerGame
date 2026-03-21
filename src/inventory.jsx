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
                className="flex flex-row items-center justify-between w-full max-w-md mx-auto my-3 p-3 bg-amber-100 rounded-xl gap-x-25"
                > 
                    <span className="text-2xl text-black font-semibold">{item.name}</span>
                    <span className="text-gray-700">x{item.amount}</span>
                </div>
            ))}
        </div>
    )
}