import React, { useState } from 'react';
import './Contato.css';

const Contato: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <div className="contato-container">
      <h2 className="contato-title">Página de Contato</h2>
      <p className="contato-description">Entre em contato conosco:</p>
      <ul className="contato-info">
        <li>Email: gustavo.freitas2@estudante.ifms.edu.br</li>
        <li>Telefone: (67) 98473-0208</li>
      </ul>
      <p className="contato-description">Ou preencha o formulário abaixo:</p>

      <form className="contato-form">
        <div className="form-group">
          <label htmlFor="nome" className="form-label">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="form-input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {nome && <p className="form-feedback"> {nome}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email && <p className="form-feedback"> {email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="mensagem" className="form-label">
            Mensagem:
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            className="form-textarea"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
          {mensagem && <p className="form-feedback"> {mensagem}</p>}
        </div>
        <div className="form-group">
          <button type="submit" className="form-button">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contato;