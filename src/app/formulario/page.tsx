'use client';
import { useState } from 'react';

export default function Formulario() {
  const [pergunta, setPergunta] = useState('');
  const [tipo, setTipo] = useState('enade'); // Tipo de questão, default enade

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envia a pergunta e o tipo (ENADE ou POSCOMP) para a API
    const res = await fetch('/api/questoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pergunta, tipo }),
    });

    if (res.ok) {
      alert('Questão cadastrada com sucesso!');
      setPergunta(''); // Limpa o campo
      setTipo('enade'); // Volta ao valor padrão
    } else {
      alert('Erro ao cadastrar a questão');
    }
  };

  return (
    <div>
      <h1>Cadastrar Questão</h1>
      <form onSubmit={handleSubmit}>
        <label>Pergunta:</label>
        <input
          type="text"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
        />

        <label>Tipo de Questão:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="enade">ENADE</option>
          <option value="poscomp">POSCOMP</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}


