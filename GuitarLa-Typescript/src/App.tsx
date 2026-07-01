import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { useCart } from './hooks/useCart'

function App() {

  const { data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart()

  return (
    <div className="min-h-screen flex flex-col flex-1 bg-[url('/img/cursos_bg.jpg')] bg-black/70 bg-blend-overlay bg-cover bg-center bg-no-repeat">
      <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      
      <main className="mx-auto max-w-7xl m-12 px-4 ">
          <h2 className="text-center font-bold text-amber-600 text-4xl">Nuestra Colección</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {data.map((guitar) => (
                  <Guitar 
                    key={guitar.id}
                    guitar={guitar}
                    addToCart={addToCart}
                  />
              ))}
          </div>
      </main>


      <footer className="bg-slate-800 items-center p-4">
          <div className="h-10 w-full">
              <p className="text-white font-bold text-center mt-4">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>
    </div>
  )
}

export default App
