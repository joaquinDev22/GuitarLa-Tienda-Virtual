import type { CartItem, Guitar } from "../types"

type CartProps = {
    cart: CartItem[]
    removeFromCart: (id: Guitar['id'] ) => void
    decreaseQuantity: (id: Guitar['id'] ) => void
    increaseQuantity: (id: Guitar['id'] ) => void
    clearCart: () => void
    isEmpty: boolean
    cartTotal: number
}

export default function Cart({cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal} : CartProps) {
  return (
    <>
        {isEmpty ? (
            <p className="text-center font-bold text-gray-700 py-4">El carrito esta vacio</p>
            ) : (
            <>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="pb-3 text-sm font-semibold">Imagen</th>
                            <th className="pb-3 text-sm font-semibold">Nombre</th>
                            <th className="pb-3 text-sm font-semibold">Precio</th>
                            <th className="pb-3 text-sm font-semibold">Cantidad</th>
                            <th className="pb-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map( guitar => (
                            <tr key={guitar.id} className="border-b border-gray-200 last:border-none">
                                <td className="py-4">
                                    <img className="w-12 h-auto" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra"/>
                                </td>
                                <td className="py-4 text-sm">{guitar.name}</td>
                                <td className="py-4 font-bold text-sm">${guitar.price}</td>
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <button type="button" className="bg-black text-white w-7 h-7 flex items-center justify-center rounded hover:bg-gray-800 transition-colors" onClick={() => decreaseQuantity(guitar.id)}> -
                                        </button>
                                            <span className="text-sm">{guitar.quantity}</span>
                                        <button type="button" className="bg-black text-white w-7 h-7 flex items-center justify-center rounded hover:bg-gray-800 transition-colors" onClick={() => increaseQuantity(guitar.id)}> +
                                        </button>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <button className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold hover:bg-red-700 transition-colors text-xs" type="button"
                                    onClick={() => removeFromCart(guitar.id)}>
                                    X </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="text-right mt-4 text-gray-700"> Total a pagar: <span className="font-black text-black text-lg">${cartTotal}</span>
                </p>
                 <button className="bg-black text-white w-full mt-5 p-3 font-bold uppercase rounded-lg hover:bg-gray-800 transition-colors" onClick={clearCart}> Vaciar Carrito
                </button>
            </>
        )}
    </>
  )
}
