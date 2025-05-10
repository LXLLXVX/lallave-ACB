import { useState, useEffect } from 'react';
import { insertRecord, getRecords, updateRecord, deleteRecord } from '../../services/crud/crudOperations';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './CrudTest.css';

const CrudTest = () => {
    const positions = [
        "Base",
        "Escolta",
        "Alero",
        "Ala-Pívot",
        "Pívot"
    ];

    const teams = [
        "Real Madrid",
        "FC Barcelona",
        "Baskonia",
        "UCAM Murcia",
        "Unicaja",
        "Gran Canaria",
        "Valencia Basket",
        "Joventut Badalona",
        "Lenovo Tenerife",
        "Baxi Manresa",
        "Casademont Zaragoza",
        "Río Breogán",
        "Surne Bilbao",
        "Básquet Girona",
        "Monbus Obradoiro",
        "UCAM Murcia",
        "Morabanc Andorra",
        "Coviran Granada"
    ];

    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState({
        name: '',
        position: '',
        team: '',
        number: '',
        age: ''
    });
    const [editingPlayer, setEditingPlayer] = useState(null);

    useEffect(() => {
        loadPlayers();
    }, []);

    const loadPlayers = async () => {
        const result = await getRecords('players');
        if (result.success) {
            const playersArray = result.data ? Object.entries(result.data).map(([id, data]) => ({
                id,
                ...data
            })) : [];
            setPlayers(playersArray);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingPlayer) {
            const result = await updateRecord('players', editingPlayer.id, newPlayer);
            if (result.success) {
                setEditingPlayer(null);
                await loadPlayers();
            }
        } else {
            const result = await insertRecord('players', newPlayer);
            if (result.success) {
                await loadPlayers();
            }
        }
        setNewPlayer({ name: '', position: '', team: '', number: '', age: '' });
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este jugador?')) {
            const result = await deleteRecord('players', id);
            if (result.success) {
                await loadPlayers();
            }
        }
    };

    const handleEdit = (player) => {
        setEditingPlayer(player);
        setNewPlayer({
            name: player.name,
            position: player.position,
            team: player.team,
            number: player.number,
            age: player.age
        });
    };

    return (
        <>
            <Header />
            <div className="crud-container">
                <h2>Gestión de Jugadores</h2>
                
                <form onSubmit={handleSubmit} className="crud-form">
                    <input
                        type="text"
                        placeholder="Nombre del Jugador"
                        value={newPlayer.name}
                        onChange={(e) => setNewPlayer({...newPlayer, name: e.target.value})}
                        required
                    />
                    <select
                        value={newPlayer.position}
                        onChange={(e) => setNewPlayer({...newPlayer, position: e.target.value})}
                        required
                    >
                        <option value="">Selecciona una posición</option>
                        {positions.map((pos, index) => (
                            <option key={index} value={pos}>{pos}</option>
                        ))}
                    </select>
                    <select
                        value={newPlayer.team}
                        onChange={(e) => setNewPlayer({...newPlayer, team: e.target.value})}
                        required
                    >
                        <option value="">Selecciona un equipo</option>
                        {teams.map((team, index) => (
                            <option key={index} value={team}>{team}</option>
                        ))}
                    </select>
                    <input
                        type="number"
                        placeholder="Número"
                        value={newPlayer.number}
                        onChange={(e) => setNewPlayer({...newPlayer, number: e.target.value})}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Edad"
                        value={newPlayer.age}
                        onChange={(e) => setNewPlayer({...newPlayer, age: e.target.value})}
                        required
                    />
                    <button type="submit">
                        {editingPlayer ? 'Actualizar' : 'Añadir'} Jugador
                    </button>
                </form>

                <div className="players-list">
                    {players.map(player => (
                        <div key={player.id} className="player-card">
                            <h3>{player.name}</h3>
                            <p>Posición: {player.position}</p>
                            <p>Equipo: {player.team}</p>
                            <p>Número: {player.number}</p>
                            <p>Edad: {player.age}</p>
                            <div className="player-actions">
                                <button onClick={() => handleEdit(player)}>Editar</button>
                                <button onClick={() => handleDelete(player.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CrudTest;