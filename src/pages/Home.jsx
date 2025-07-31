import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">🧠 Automação Jurídica Inteligente - LABORI</h1>
      <p className="text-lg text-gray-700 mb-10 max-w-xl">
        Crie automaticamente documentos jurídicos padronizados da AGU com base em formulários interativos. Escolha abaixo o tipo de documento que deseja gerar:
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <Link to="/edital" className="bg-white shadow-md rounded-xl px-6 py-4 hover:bg-blue-50 transition border border-blue-400 text-blue-800 font-semibold">
          📑 Gerar Edital CPSI
        </Link>
        <Link to="/termo" className="bg-white shadow-md rounded-xl px-6 py-4 hover:bg-green-50 transition border border-green-400 text-green-800 font-semibold">
          📄 Gerar Termo de Referência
        </Link>
        <Link to="/contrato" className="bg-white shadow-md rounded-xl px-6 py-4 hover:bg-purple-50 transition border border-purple-400 text-purple-800 font-semibold">
          ⚖️ Gerar Contrato CPSI
        </Link>
      </div>
    </div>
  );
}
