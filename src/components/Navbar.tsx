import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();

  return (
    <nav className="bg-green-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          AgroTech Marketplace
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-green-200">
            Home
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/products/new" className="hover:text-green-200">
                Vender Produto
              </Link>
              <Link to="/products/my" className="hover:text-green-200">
                Meus Produtos
              </Link>
              <Link to="/profile" className="hover:text-green-200">
                Perfil
              </Link>
              <Link to="/cart" className="flex items-center hover:text-green-200">
                Carrinho
                {totalItems > 0 && (
                  <span className="ml-1 bg-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button
                onClick={logout}
                className="hover:text-green-200"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-green-200">
                Login
              </Link>
              <Link to="/register" className="hover:text-green-200">
                Cadastre-se
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};