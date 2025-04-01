import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className="home">
      <Header />

      <main className="home-content">
        <h1>Bem-vindo ao Sistema!</h1>
        <p>Esta é a página inicial.</p>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
