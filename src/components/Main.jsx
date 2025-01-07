import { useState, useEffect } from "react";
import Card from "./Card";
import Form from "./Form";

import axios from "axios";


function Main() {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCharacters = async () => {
        try {
            const characterRequests = [];

            for (let id = 1; id <= 10; id++) {
                characterRequests.push(axios.get(`https://rickandmortyapi.com/api/character/${id}`));
            }

            const characterResponses = await Promise.all(characterRequests);
            const charactersData = characterResponses.map(response => response.data);
            setCharacters(charactersData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = (itemID) => {
        const newArray = characters.filter((item) => item.id !== itemID);
        setCharacters(newArray);
    };

    const addCard = (newCharacter) => {
        setCharacters([...characters, newCharacter]);
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main>
            <Form addCard={addCard} />
            <Card array={characters} handleDelete={handleDelete} />
        </main>
    );
}

export default Main;