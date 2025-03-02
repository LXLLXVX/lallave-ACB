import clubes from "../../services/clubes/clubes"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import './Clubes.css'
import TeamCard from "../../components/team-card/TeamCard"

function Clubes() {
    return (
        <>
            <Header />
            <div className="clubes-container">
                {
                    clubes.map((c, index) => {
                        return <TeamCard key={index} url={c.url} image={c.image} />
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Clubes