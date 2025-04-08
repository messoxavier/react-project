import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from '../components/Login/LoginForm';
import CadastroForm from '../components/Cadastro/CadastroForm';
import Home from '../pages/Home/Home'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/cadastro" element={<CadastroForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
