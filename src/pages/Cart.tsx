import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Carrinho de Compras</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Seu carrinho está vazio</p>
          <Link
            to="/"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col sm:flex-row border-b py-4"
              >
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-32 h-32 object-cover rounded mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{item.product.title}</h3>
                  <p className="text-lg text-green-600 mb-2">
                    R$ {item.product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.product.id!, item.quantity - 1)}
                      className="px-2 py-1 border rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id!, item.quantity + 1)}
                      className="px-2 py-1 border rounded-r"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.product.id!)}
                      className="ml-4 text-red-500"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
              <div className="flex justify-between mb-2">
                <span>Itens ({totalItems})</span>
                <span>R$ {totalPrice.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={clearCart}
                className="mt-4 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Limpar Carrinho
              </button>
              <button className="mt-4 w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};