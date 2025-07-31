import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">
          🧠 Gerador Inteligente de CPSI
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Automatize a criação de documentos jurídicos como Editais de Licitação, Termos de Referência e Contratos Públicos para Solução Inovadora (CPSI).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 - Edital */}
        <Link
          to="/edital"
          className="bg-white shadow-xl rounded-xl overflow-hidden border border-blue-200 hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <img
            src="https://images.unsplash.com/photo-1581093458411-c147c2f6f1f0?auto=format&fit=crop&w=600&q=80"
            alt="Edital"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">📄 Gerar Edital</h2>
            <p className="text-gray-600">Monte automaticamente um edital de licitação com base nas diretrizes oficiais da AGU.</p>
          </div>
        </Link>

        {/* Card 2 - Termo de Referência */}
        <Link
          to="/termo"
          className="bg-white shadow-xl rounded-xl overflow-hidden border border-green-200 hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <img
            src="https://images.unsplash.com/photo-1573497019417-9b5d3dfdb87d?auto=format&fit=crop&w=600&q=80"
            alt="Termo"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">📑 Termo de Referência</h2>
            <p className="text-gray-600">Elabore um Termo de Referência completo com campos interativos e lógica condicional.</p>
          </div>
        </Link>

        {/* Card 3 - Contrato CPSI */}
        <Link
          to="/contrato"
          className="bg-white shadow-xl rounded-xl overflow-hidden border border-purple-200 hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <img
            src="https://images.unsplash.com/photo-1616587221216-655d7481a203?auto=format&fit=crop&w=600&q=80"
            alt="Contrato"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">📃 Contrato CPSI</h2>
            <p className="text-gray-600">Gere automaticamente a minuta contratual baseada na LC 182/2021 e modelos oficiais.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
