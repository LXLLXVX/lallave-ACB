import "./Privacy.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Privacy() {
  return (
    <>
    <Header></Header>
    <div className="politica-privacidad">
      <h1>Política de Privacidad</h1>
      <section>
        <h2>1. Responsable del Tratamiento</h2>
        <p>
          La Asociación de Clubes de Baloncesto (ACB), con domicilio en [DIRECCIÓN] y CIF [CIF], 
          es responsable del tratamiento de los datos personales recogidos a través de este sitio web.
        </p>
      </section>
      <section>
        <h2>2. Finalidad del Tratamiento</h2>
        <p>
          Los datos personales proporcionados serán utilizados para la gestión de usuarios, 
          el envío de comunicaciones y la mejora de nuestros servicios, siempre con el consentimiento del usuario.
        </p>
      </section>
      <section>
        <h2>3. Derechos de los Usuarios</h2>
        <p>
          Los usuarios pueden ejercer sus derechos de acceso, rectificación, cancelación y oposición enviando 
          una solicitud a [EMAIL] con la referencia "Protección de Datos".
        </p>
      </section>
      <section>
        <h2>4. Seguridad de los Datos</h2>
        <p>
          La ACB implementa medidas de seguridad adecuadas para proteger los datos personales frente a accesos no autorizados.
        </p>
      </section>
      <section>
        <h2>5. Legislación Aplicable</h2>
        <p>
          Esta política de privacidad se rige por la legislación española y cualquier disputa se resolverá 
          en los tribunales competentes.
        </p>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Privacy;
