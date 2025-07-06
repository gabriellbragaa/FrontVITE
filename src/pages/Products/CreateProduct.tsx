import { useNavigate } from 'react-router-dom';
import { ProductForm } from '../../components/Product/ProductForm';
import { createProduct } from '../../api/products';


export const CreateProduct = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: Omit<Product, 'id'>) => {
    try {
      await createProduct(data);
      navigate('/');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Cadastrar Novo Produto</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};