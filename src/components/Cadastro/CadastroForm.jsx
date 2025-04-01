import './CadastroForm.css';
import { useState } from 'react';

function CadastroForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', nome, 'Email:', email, 'Senha:', senha);
  };

  return (
    <div className="form-wrapper">
    <form onSubmit={handleSubmit} className="cadastro-form">
      <h2>Cadastro</h2>

      <label>Nome completo</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome completo"
        required
      />

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
        placeholder="Crie uma senha"
        required
      />

      <button type="submit">Cadastrar</button>

      <div className="cadastro-links">
        <a href="#">Já tem uma conta?</a>
      </div>
    </form>
    </div>
  );
}

export default CadastroForm;
