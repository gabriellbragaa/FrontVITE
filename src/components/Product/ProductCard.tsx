import type { Product } from '../../api/products';

interface ProductCardProps {
  product: Product;
  onDelete?: (id: number) => void;
}

export const ProductCard = ({ product, onDelete }: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <p className="text-lg text-green-600">R$ {product.price.toFixed(2)}</p>
      {onDelete && (
        <button
          onClick={() => onDelete(product.id!)}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Remover
        </button>
      )}
    </div>
  );
};