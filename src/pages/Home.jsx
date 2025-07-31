import React from 'react';
import { Link } from 'react-router-dom';
import editalImg from '../assets/edital.jpg';
import termoImg from '../assets/termo.jpg';
import contratoImg from '../assets/contrato.jpg';

export default function Home() {
  const cards = [
    {
      title: '📄 Edital de Licitação',
      image: editalImg,
      path: '/edital',
      color: 'text-blue-700',
      desc: 'Monte automaticamente um edital de licitação com base nas diretrizes oficiais da AGU.',
    },
    {
      title: '📑 Termo de Referência',
      image: termoImg,
      path: '/termo',
      color: 'text-green-700',
      desc: 'Elabore um Termo de Referência completo com campos interativos e lógica condicional.',
    },
    {
      title: '📃 Contrato Público CPSI',
      image: contratoImg,
      path: '/contrato',
      color: 'text-purple-700',
      desc: 'Gere automaticamente a minuta contratual baseada na LC 182/2021 e modelos oficiais.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-10">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6">🧠 Gerador Inteligente de CPSI</h1>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
        Automatize a criação de documentos jurídicos como Editais de Licitação, Termos de Referência e Contratos Públicos para Solução Inovadora (CPSI).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map(({ title, image, path, desc, color }, idx) => (
          <Link
            to={path}
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <img src={image} alt={title} className="rounded-t-xl h-40 w-full object-cover" />
            <div className="p-6">
              <h2 className={`text-xl font-bold mb-2 ${color}`}>{title}</h2>
              <p className="text-gray-600 text-sm">{desc}</p>
              <div className="mt-4 text-right">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full hover:bg-blue-200">
                  Acessar →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
