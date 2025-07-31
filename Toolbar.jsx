
import React from 'react';

export default function Toolbar({ editor }) {
  if (!editor) return null;

  return (
    <div style={{ marginBottom: '10px' }}>
      <button onClick={() => editor.chain().focus().toggleBold().run()}>Negrito</button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()}>Itálico</button>
      <button onClick={() => editor.chain().focus().setParagraph().run()}>Parágrafo</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>Título</button>
    </div>
  );
}
