import { useForm } from 'react-hook-form';
import type { Product } from '../../api/products';

interface ProductFormProps {
  onSubmit: (data: Omit<Product, 'id'>) => void;
  initialData?: Product;
}

export const ProductForm = ({ onSubmit, initialData }: ProductFormProps) => {
  const { register, handleSubmit, reset } = useForm<Omit<Product, 'id'>>({
    defaultValues: initialData || {
      title: '',
      image: '',
      price: 0,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome do Produto</label>
        <input
          {...register('title', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">URL da Imagem</label>
        <input
          {...register('image', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Preço</label>
        <input
          type="number"
          {...register('price', { required: true, valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        {initialData ? 'Atualizar Produto' : 'Cadastrar Produto'}
      </button>
    </form>
  );
};