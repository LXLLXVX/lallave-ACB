import "./legal.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Legal() {

  return (
    <>
    <Header></Header>
    <div className="aviso-legal">
      <h1>Aviso Legal</h1>
      <section>
        <h2>1. Información General</h2>
        <p>
          Este sitio web es propiedad de la Asociación de Clubes de Baloncesto (ACB), con
          domicilio en [DIRECCIÓN], y CIF [CIF]. Para cualquier consulta, puede
          contactarnos a través del correo electrónico [EMAIL] o el teléfono [TELÉFONO].
        </p>
      </section>
      <section>
        <h2>2. Propiedad Intelectual</h2>
        <p>
          Todos los contenidos de este sitio web, incluyendo textos, imágenes, logotipos,
          y diseño, están protegidos por derechos de propiedad intelectual y son propiedad
          de la ACB o de sus respectivos titulares.
        </p>
      </section>
      <section>
        <h2>3. Uso del Sitio Web</h2>
        <p>
          El usuario se compromete a utilizar este sitio web de manera lícita y respetuosa,
          absteniéndose de realizar cualquier actividad que pueda dañar su funcionamiento
          o los derechos de terceros.
        </p>
      </section>
      <section>
        <h2>4. Protección de Datos</h2>
        <p>
          La ACB cumple con la normativa vigente en materia de protección de datos. Para más
          información, consulte nuestra Política de Privacidad.
        </p>
      </section>
      <section>
        <h2>5. Legislación Aplicable</h2>
        <p>
          Este aviso legal se rige por la legislación española y cualquier disputa se
          someterá a los tribunales competentes.
        </p>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Legal;
