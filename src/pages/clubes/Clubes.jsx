import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Clubes.css";
import TeamCard from "../../components/team-card/TeamCard";
import { db } from "../../firebase/config";
import { ref, onValue } from "firebase/database";

function Clubes() {
    const [clubes, setClubes] = useState([]);

    useEffect(() => {
        const clubesRef = ref(db, "clubes");
        onValue(clubesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setClubes(Object.values(data));
            }
        });
    }, []);

    return (
        <>
            <Header />
            <div className="clubes-container">
                {
                    clubes.map((c, index) => (
                        <TeamCard key={index} url={c.url} image={c.image} />
                    ))
                }
            </div>
            <Footer />
        </>
    );
}

export default Clubes;
