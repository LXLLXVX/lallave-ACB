import { useState, useEffect } from 'react';
import { insertRecord, getRecords, updateRecord, deleteRecord } from '../../services/crud/crudOperations';


const CrudTest = () => {
    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState({ name: '', team: '', number: '' });
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
            // Update
            const result = await updateRecord('players', editingPlayer.id, newPlayer);
            if (result.success) {
                setEditingPlayer(null);
                await loadPlayers();
            }
        } else {
            // Insert
            const result = await insertRecord('players', newPlayer);
            if (result.success) {
                await loadPlayers();
            }
        }
        setNewPlayer({ name: '', team: '', number: '' });
    };

    const handleDelete = async (id) => {
        const result = await deleteRecord('players', id);
        if (result.success) {
            await loadPlayers();
        }
    };

    const handleEdit = (player) => {
        setEditingPlayer(player);
        setNewPlayer({
            name: player.name,
            team: player.team,
            number: player.number
        });
    };

    return (
        <div className="crud-container">
            <h2>Gestión de Jugadores</h2>
            
            <form onSubmit={handleSubmit} className="crud-form">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={newPlayer.name}
                    onChange={(e) => setNewPlayer({...newPlayer, name: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Equipo"
                    value={newPlayer.team}
                    onChange={(e) => setNewPlayer({...newPlayer, team: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Número"
                    value={newPlayer.number}
                    onChange={(e) => setNewPlayer({...newPlayer, number: e.target.value})}
                />
                <button type="submit">
                    {editingPlayer ? 'Actualizar' : 'Añadir'} Jugador
                </button>
            </form>

            <div className="players-list">
                {players.map(player => (
                    <div key={player.id} className="player-card">
                        <h3>{player.name}</h3>
                        <p>Equipo: {player.team}</p>
                        <p>Número: {player.number}</p>
                        <div className="player-actions">
                            <button onClick={() => handleEdit(player)}>Editar</button>
                            <button onClick={() => handleDelete(player.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CrudTest;