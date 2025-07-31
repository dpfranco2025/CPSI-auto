import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">
          🧠 Gerador Inteligente de CPSI
        </h1>
        <p className="text-lg text-gray-700 mb-10 max-w-xl">
          Automatize a criação de documentos jurídicos como Editais de Licitação, Termos de Referência e Contratos Públicos para Solução Inovadora (CPSI).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Link
          to="/edital"
          className="bg-white shadow-lg rounded-xl p-6 border border-blue-200 hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">📄 Gerar Edital</h2>
          <p className="text-gray-600">Monte automaticamente um edital de licitação com base nas diretrizes oficiais da AGU.</p>
        </Link>

        <Link
          to="/termo"
          className="bg-white shadow-lg rounded-xl p-6 border border-blue-200 hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-2">📑 Termo de Referência</h2>
          <p className="text-gray-600">Elabore um Termo de Referência completo com campos interativos e lógica condicional.</p>
        </Link>

        <Link
          to="/contrato"
          className="bg-white shadow-lg rounded-xl p-6 border border-blue-200 hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">📃 Contrato CPSI</h2>
          <p className="text-gray-600">Gere automaticamente a minuta contratual baseada na LC 182/2021 e modelos oficiais.</p>
        </Link>
      </div>
    </div>
  );
}
