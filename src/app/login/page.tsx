import React from 'react';
import Link from 'next/link';
import './login.css'; // Importa o arquivo CSS

export default function LoginPage() {
  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <form className="form">
        <div className="inputGroup">
          <label htmlFor="email" className="label">E-mail:</label>
          <input type="email" id="email" name="email" className="input" required />
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="label">Senha:</label>
          <input type="password" id="password" name="password" className="input" required />
        </div>
        <button type="submit" className="button">Entrar</button>

        {/* Link para recuperação de senha */}
        <div className="forgotPassword">
          <Link href="/esqueci-senha" className="link">Esqueceu sua senha?</Link>
        </div>

        {/* Mensagem de inscrição */}
        <div className="signupMessage">
          <span className="text">Não tem uma conta?</span> <Link href="/inscrever-se" className="link">Inscrever-se</Link>
        </div>
      </form>
    </div>
  );
}