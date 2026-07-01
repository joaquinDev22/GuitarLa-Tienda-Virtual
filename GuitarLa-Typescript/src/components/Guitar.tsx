import type { Guitar } from '../types'

type GuitarProps = {
    guitar: Guitar, 
    addToCart: (item: Guitar) => void
}

export default function Guitar({ guitar, addToCart }: GuitarProps) {

    const { name, image, description, price } = guitar

    return (
        <div className="grid grid-cols-3 gap-4 items-center shadow-md bg-white/70 p-3 rounded-xl shadow-amber-200  ">
            <div className="col-span-1">
                <img 
                    className="w-full rounded-xl" 
                    src={`/img/${image}.jpg`} 
                    alt={`imagen guitarra ${name}`} 
                />
            </div>
            <div className="col-span-2">
                <h3 className="text-black font-bold uppercase text-xl mb-2">
                    {name}
                </h3>
                
                <p className="text-black text-sm mb-3">
                    {description}
                </p>
                
                <p className="font-black text-amber-500 text-3xl mb-4">
                    ${price}
                </p>
                
                <button 
                    type="button"
                    className="bg-black text-white w-full uppercase font-bold text-sm py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={() => addToCart(guitar)}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

