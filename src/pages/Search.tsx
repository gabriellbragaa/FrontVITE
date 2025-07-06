import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProducts, Product } from '../api/products';
import { ProductCard } from '../components/Product/ProductCard';
import { useCart } from '../context/CartContext';

export const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const searchProducts = async () => {
      if (query.trim()) {
        setLoading(true);
        try {
          const allProducts = await getProducts();
          const filtered = allProducts.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filtered);
        } catch (error) {
          console.error('Error searching products:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    searchProducts();
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Resultados para: <span className="text-green-600">"{query}"</span>
      </h1>
      
      {loading ? (
        <div>Carregando...</div>
      ) : results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl">Nenhum produto encontrado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              <button
                onClick={() => addToCart(product)}
                className="absolute bottom-4 right-4 bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};