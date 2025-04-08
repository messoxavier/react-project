import { Link } from 'react-router-dom';
import './LoginForm.css';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Senha:', senha);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          required
        />

        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          required
        />

        <button type="submit">Entrar</button>

        <div className="login-links">
          <a href="#">Esqueceu sua senha?</a>
          <span> | </span>
          <Link to="/cadastro">Cadastrar-se</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
