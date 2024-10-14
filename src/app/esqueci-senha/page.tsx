import React from 'react';
import './esqueci-senha.css';
export default function ForgotPasswordPage() {
  return (
    <div className="container">
      <h1 className="title">Recuperar senha</h1>
      <form className="form">
        <div className="inputGroup">
          <label htmlFor="email" className="label">E-mail cadastrado:</label>
          <input type="email" id="email" name="email" className="input" required />
        </div>
        <button type="submit" className="button">Recuperar senha</button>
      </form>
      <div className="backToLogin">
        <a href="/login" className="link">Voltar para o login</a>
      </div>
    </div>
  );
}