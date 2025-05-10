import 'react';
import './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {




  return (

    
    <footer className="footer">

      <div className='footer-links'>

      <Link to="/legal" className="footer-link">
        Aviso Legal
      </Link>

<b> </b>
<b>| </b>

      <Link to="/privacy" className="footer-link">
        Política de Privacidad
      </Link>

<b> </b>
<b>| </b>

      <Link to="/cookies" className="footer-link">
        Política de Cookies
      </Link>

<b> </b>
<b>| </b>

      <Link to="/terms" className="footer-link">
        Términos y Condiciones
      </Link>

      </div>

      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/liga-endesa.png" alt="Liga Endesa" className="footer-logo-img" />
        </div>

        <div className="footer-social">
          <a href="https://www.facebook.com/ACBCOM" className="social-icon">
            <img src="/images/social-media/facebook.png" alt="Facebook" />
          </a>
          <a href="https://x.com/ACBCOM" className="social-icon">
            <img src="/images/social-media/x.png" alt="X" />
          </a>
          <a href="https://www.instagram.com/acbcom/" className="social-icon">
            <img src="/images/social-media/instagram.webp" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@acbcom" className="social-icon">
            <img src="/images/social-media/youtube.png" alt="YouTube" />
          </a>
          <a href="https://github.com/LXLLXVX" className="social-icon">
            <img src="/images/social-media/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
      
      <div className="footer-sponsors">
  <div className="sponsors-logos">
    <a href="https://www.endesa.com/es" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/endesa.png" alt="Endesa" />
    </a>
    <a href="https://www.movistar.es/" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/movistar.png" alt="Movistar" />
    </a>
    <a href="https://www.toyota.es/" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/toyota.png" alt="Toyota" />
    </a>
    <a href="https://www.ionos.es/" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/ionos.png" alt="Ionos" />
    </a>
    <a href="https://www.bancomediolanum.es/es-ES/" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/mediolanum.png" alt="Mediolanum" />
    </a>
    <a href="https://www.wilson.com/es-es/basketball/basketballs" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/wilson.png" alt="Wilson" />
    </a>
    <a href="https://www.azulmarino.com/es-es" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/azulmarino.png" alt="Azul Marino" />
    </a>
    <a href="https://www.kumhotyre.es/es/index.do#" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/kumho.png" alt="Kumho Tire" />
    </a>
    <a href="https://www.renfe.com/es/es" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/renfe.png" alt="Renfe" />
    </a>
    <a href="https://lotus-watches.com/es-ES" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/lotus.png" alt="Lotus" />
    </a>
    <a href="https://transaher.es/" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/transaher.png" alt="Transaher" />
    </a>
    <a href="https://www.quironsalud.com/" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/quironsalud.png" alt="Quirónsalud" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src="/images/sponsors/onebox.png" alt="Onebox" />
    </a>
  </div>
</div>


      <div className="footer-bottom">
        <p className="copyright">Copyright © ACB.COM, 2001-2025</p>
      </div>
    </footer>
  );
};



export default Footer;
