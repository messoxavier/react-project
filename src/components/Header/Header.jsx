import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/vite.svg" alt="Logo do sistema" className="logo" />
        <h1 className="title">Meu Sistema</h1>
      </div>

      <nav className="header-nav">
        <Link to="/home">Início</Link>
        <Link to="/">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>
    </header>
  );
}

export default Header;
