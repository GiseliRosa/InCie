import { NextResponse } from 'next/server';
import pool from '../formulario/db'; // Ajuste o caminho se necessário
import { randomUUID } from 'crypto';

export async function POST(req) {
  try {
    const { pergunta, tipo } = await req.json();

    // Gerar UUID
    const id = randomUUID();
    let tabela = tipo === 'poscomp' ? 'poscomp_questoes' : 'enade_questoes';

    const query = `
      INSERT INTO ${tabela} (id, pergunta, resposta_correta) 
      VALUES ($1, $2, $3)
    `;

    await pool.query(query, [id, pergunta, '']); // Aqui, você pode definir uma resposta correta se necessário

    return NextResponse.json({ message: 'Questão cadastrada com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar questão:', error);
    return NextResponse.json({ error: 'Erro ao cadastrar questão', detalhes: error.message }, { status: 500 });
  }
}

