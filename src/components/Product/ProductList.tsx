import { Product } from '../../../api/products';
import { ProductCard } from './ProductCard';
// Update the import path if the context is located elsewhere, for example:
import { useCart } from '../../context/CartContext';
// Or create the file at '../../../context/CartContext.tsx' if it does not exist.

interface ProductListProps {
  products: Product[];
  onDelete?: (id: number) => void;
  showAddToCart?: boolean;
  showDelete?: boolean;
}

export const ProductList = ({
  products,
  onDelete,
  showAddToCart = true,
  showDelete = false,
}: ProductListProps) => {
  const { addToCart } = useCart();

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="relative">
          <ProductCard product={product} onDelete={showDelete ? onDelete : undefined} />
          {showAddToCart && (
            <button
              onClick={() => addToCart(product)}
              className="absolute bottom-4 right-4 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 shadow-md"
              aria-label="Adicionar ao carrinho"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      ))}
    </div>
  );
};