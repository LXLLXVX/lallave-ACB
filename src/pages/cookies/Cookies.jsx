import "./cookies.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Cookies() {
  return (
    <>
    <Header></Header>
    <div className="politica-cookies">
      <h1>Política de Cookies</h1>
      <section>
        <h2>1. ¿Qué son las Cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.
          Se utilizan para mejorar la experiencia del usuario y proporcionar información a los propietarios del sitio.
        </p>
      </section>
      <section>
        <h2>2. Tipos de Cookies Utilizadas</h2>
        <ul>
          <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio web.</li>
          <li><strong>Cookies de análisis:</strong> Recogen información sobre el uso del sitio para mejorar nuestros servicios.</li>
          <li><strong>Cookies de personalización:</strong> Permiten recordar preferencias del usuario.</li>
          <li><strong>Cookies de publicidad:</strong> Se utilizan para mostrar anuncios relevantes.</li>
        </ul>
      </section>
      <section>
        <h2>3. Gestión de Cookies</h2>
        <p>
          Puede configurar su navegador para rechazar todas las cookies o indicar cuándo se envía una cookie.
          Sin embargo, si desactiva las cookies, algunas partes de nuestro sitio pueden no funcionar correctamente.
        </p>
      </section>
      <section>
        <h2>4. Legislación Aplicable</h2>
        <p>
          Esta política de cookies se rige por la legislación española y cualquier disputa se resolverá en los tribunales competentes.
        </p>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
}
export default Cookies;
