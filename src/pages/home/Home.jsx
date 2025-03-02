import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer.jsx"
import "./home.css"

const Home = () => {
  return (
    <>
      <Header />

      <main className="main-content">
        {/* Últimos Partidos */}
        <section className="matches">
          <h2>Últimos Partidos</h2>
          <ul>
            <li>Real Madrid <strong>85 - 79</strong> Barcelona</li>
            <li>Gran Canaria <strong>90 - 88</strong> Unicaja</li>
            <li>Baskonia <strong>78 - 84</strong> Valencia</li>
          </ul>
        </section>

        {/* Clasificación */}
        <section className="standings">
          <h2>Clasificación</h2>
          <ol>
            <li>1. Real Madrid - 40 pts</li>
            <li>2. Barcelona - 38 pts</li>
            <li>3. Gran Canaria - 36 pts</li>
            <li>4. Baskonia - 34 pts</li>
            <li>5. Unicaja - 32 pts</li>
          </ol>
        </section>

        {/* Noticias */}
        <section className="news">
          <h2>Últimas Noticias</h2>
          <div className="news-container">
            <div className="news-item">
              <img src="/images/noticias/gran-canaria.jpg" alt="Gran Canaria consigue una victoria épica" />
              <h3>Gran Canaria consigue una victoria épica</h3>
              <a href="#">Leer más</a>
            </div>

            <div className="news-item">
              <img src="/images/noticias/clasico.jpg" alt="Barcelona y Madrid luchan por el liderato" />
              <h3>Barcelona y Madrid luchan por el liderato</h3>
              <a href="#">Leer más</a>
            </div>

            <div className="news-item">
              <img src="/images/noticias/unicaja.jpg" alt="Unicaja sorprende con su remontada" />
              <h3>Unicaja sorprende con su remontada</h3>
              <a href="#">Leer más</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home
