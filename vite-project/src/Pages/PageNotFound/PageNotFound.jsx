import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-lg text-gray-700">Desculpe, a página que você está procurando não existe.</p>
      <Link to="/" className="mt-6 px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300">
        Voltar para a Home
      </Link>
    </div>
  );
}

export default PageNotFound;
