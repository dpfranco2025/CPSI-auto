
import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './Toolbar';
import html2pdf from 'html2pdf.js';
import { saveAs } from 'file-saver';

export default function EditorPreviewCPSI({ dados }) {
  const [finalizado, setFinalizado] = useState(false);

  const gerarConteudo = () => {
    return `
      <h2>Minuta do Edital - CPSI</h2>
      <p><strong>Órgão contratante:</strong> ${dados.orgao}</p>
      <p><strong>Objeto:</strong> Desenvolvimento de solução inovadora voltada à melhoria de ${dados.objeto}.</p>
      <p><strong>Fundamento Legal:</strong> ${dados.fundamento}</p>
      <p><strong>Data de publicação:</strong> ${dados.data}</p>
      <p>Outras cláusulas contratuais seguem conforme o modelo oficial da AGU.</p>
    `;
  };

  const editor = useEditor({
    extensions: [StarterKit],
    content: gerarConteudo(),
  });

  const handleExport = (type) => {
    const content = editor.getHTML();
    setFinalizado(true);

    const element = document.createElement('div');
    element.innerHTML = content;

    if (type === 'pdf') {
      html2pdf().set({
        margin: 1,
        filename: 'edital-cpsi.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      }).from(element).save();
    } else if (type === 'doc') {
      const blob = new Blob([`<html><body>${content}</body></html>`], {
        type: 'application/msword'
      });
      saveAs(blob, 'edital-cpsi.doc');
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = encodeURIComponent('Confira esta minuta de edital CPSI gerada pelo sistema LABORI: ');

    let shareUrl = '';
    if (platform === 'email') {
      shareUrl = `mailto:?subject=Minuta%20CPSI&body=${text}%20${url}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${text}%20${url}`;
    } else if (platform === 'teams') {
      shareUrl = `https://teams.microsoft.com/share?href=${url}&msg=${text}`;
    }
    window.open(shareUrl, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-800">
        🔍 Visualização e Edição Final do Edital CPSI
      </h1>
      <div className="border rounded-md p-4 bg-white shadow">
        <Toolbar editor={editor} />
        <EditorContent editor={editor} className="prose max-w-none min-h-[400px]" />
      </div>

      <div className="text-center mt-6 space-x-4">
        <button
          onClick={() => handleExport('pdf')}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          📄 Exportar como PDF
        </button>
        <button
          onClick={() => handleExport('doc')}
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
        >
          📝 Exportar como Word
        </button>
        <div className="inline-flex mt-4 space-x-2">
          <button
            onClick={() => handleShare('email')}
            className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700 transition"
          >
            ✉️ Compartilhar por Email
          </button>
          <button
            onClick={() => handleShare('whatsapp')}
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
          >
            📲 WhatsApp
          </button>
          <button
            onClick={() => handleShare('teams')}
            className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition"
          >
            💬 Microsoft Teams
          </button>
        </div>
        {finalizado && (
          <p className="text-sm text-gray-600 mt-2">Arquivo gerado com sucesso!</p>
        )}
      </div>
    </div>
  );
}
