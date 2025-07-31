
import React, { useState } from 'react';
import EditorPreviewCPSI from './EditorPreviewCPSI';

export default function FluxoExemploCPSI() {
  const [iniciado, setIniciado] = useState(false);
  const [dadosForm, setDadosForm] = useState({
    orgao: '',
    objeto: '',
    fundamento: '',
    data: ''
  });

  const handleChange = (e) => {
    setDadosForm({ ...dadosForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIniciado(true);
  };

  if (iniciado) {
    return <EditorPreviewCPSI dados={dadosForm} />;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>📋 Formulário Simulado - CPSI</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="orgao" placeholder="Órgão contratante" onChange={handleChange} required /><br />
        <input type="text" name="objeto" placeholder="Objeto da contratação" onChange={handleChange} required /><br />
        <input type="text" name="fundamento" placeholder="Fundamento legal" onChange={handleChange} required /><br />
        <input type="date" name="data" onChange={handleChange} required /><br />
        <button type="submit">✨ Gerar minuta personalizada</button>
      </form>
    </div>
  );
}
