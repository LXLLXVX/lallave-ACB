import './Copa.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Standing from '../../components/standing/Standing'

function Copa() {
    return (
        <>
            <Header />
            <div className="copa-container">

                <div className="copa-container-left">
                    <h1>Copa del Rey 2024/2025 - Baloncesto</h1>

                    <div className="section">
                        <h2>MVP Movistar</h2>
                        <img src="\images\copa\kendrick.jpg" alt="MVP Movistar" className="section-image" />
                        <p>El jugador más valioso (MVP) del torneo será premiado por su destacada actuación. Esta sección contiene la lista de MVPs anteriores y los jugadores que han brillado en la Copa del Rey 2024/2025.</p>
                    </div>

                    <div className="section">
                        <h2>Récords individuales</h2>
                        <img src="\images\copa\individuales.jpg" alt="Récords individuales" className="section-image" />
                        <p>Repasa los récords de jugadores, como el máximo anotador, el mayor número de rebotes, asistencias y más, en la historia de la Copa del Rey de Baloncesto.</p>
                    </div>

                    <div className="section">
                        <h2>Líderes históricos</h2>
                        <img src="\images\copa\historicos.jpg" alt="Líderes históricos" className="section-image" />
                        <p>Conoce a los jugadores y entrenadores que han dejado su huella en la historia de la Copa del Rey de Baloncesto, con estadísticas impresionantes y momentos clave.</p>
                    </div>

                    <div className="section">
                        <h2>Todos los entrenadores</h2>
                        <img src="\images\copa\entrenadores.jpg" alt="Entrenadores" className="section-image" />
                        <p>Una lista de todos los entrenadores que han dirigido en la Copa del Rey de Baloncesto, con información sobre sus logros y contribuciones al torneo.</p>
                    </div>

                    <div className="section">
                        <h2>Historias</h2>
                        <img src="\images\copa\historia.jpg" alt="Intrahistorias" className="section-image" />
                        <p>Conoce historias y anécdotas curiosas que han marcado la historia de la Copa del Rey, momentos inolvidables en la cancha y fuera de ella.</p>
                    </div>

                    <div className="section">
                        <h2>Debutantes</h2>
                        <img src="\images\copa\debutantes1.webp" alt="Debutantes" className="section-image" />
                        <p>Repasa los jugadores que han debutado en la Copa del Rey de Baloncesto en la temporada 2024/2025, y cómo se han destacado en sus primeros partidos.</p>
                    </div>

                    <div className="section">
                        <h2>Estadísticas</h2>
                        <img src="\images\copa\estadisticas.jpg" alt="Dosier estadístico" className="section-image" />
                        <p>Un análisis exhaustivo de las estadísticas de la Copa del Rey de Baloncesto, con detalles sobre puntos, rebotes, asistencias, eficiencia y mucho más.</p>
                    </div>

                </div>
                <div className="copa-container-right">
                    <div className="section">
                        <h2>STANDING</h2>
                        <Standing />
                    </div>
                </div>

            </div>
            <Footer />

        </>
    );
}

export default Copa;
