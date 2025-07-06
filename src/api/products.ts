import axios from 'axios';

const API_URL = 'http://localhost:8080/agro';

export interface Product {
  id?: number;
  title: string;
  image: string;
  price: number;
}

export const getProducts = async () => {
  const response = await axios.get<Product[]>(API_URL);
  return response.data;
};

export const createProduct = async (product: Omit<Product, 'id'>) => {
  const response = await axios.post<Product>(API_URL, product);
  return response.data;
};

export const updateProduct = async (id: number, product: Product) => {
  const response = await axios.put<Product>(`${API_URL}/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};