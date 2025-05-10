import "./Terms.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function TerminosCondiciones() {
  return (
    <>
    <Header></Header>
    <div className="terminos-condiciones">
      <h1>Términos y Condiciones</h1>
      <section>
        <h2>1. Introducción</h2>
        <p>
          Estos términos y condiciones regulan el uso del sitio web de la Asociación de Clubes de Baloncesto (ACB).
          Al acceder y utilizar este sitio, usted acepta cumplir con estas condiciones.
        </p>
      </section>
      <section>
        <h2>2. Uso Permitido</h2>
        <p>
          El usuario se compromete a utilizar este sitio de manera lícita, evitando cualquier actividad que pueda
          perjudicar su funcionamiento o los derechos de terceros.
        </p>
      </section>
      <section>
        <h2>3. Propiedad Intelectual</h2>
        <p>
          Todos los contenidos del sitio, incluidos textos, imágenes y logotipos, están protegidos por derechos de
          propiedad intelectual y pertenecen a la ACB o a sus respectivos propietarios.
        </p>
      </section>
      <section>
        <h2>4. Limitación de Responsabilidad</h2>
        <p>
          La ACB no se hace responsable de posibles daños derivados del uso del sitio, incluyendo errores técnicos o
          interrupciones del servicio.
        </p>
      </section>
      <section>
        <h2>5. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones
          entrarán en vigor desde su publicación en este sitio.
        </p>
      </section>
      <section>
        <h2>6. Legislación Aplicable</h2>
        <p>
          Estos términos y condiciones se rigen por la legislación española y cualquier disputa será resuelta por los
          tribunales competentes.
        </p>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
}