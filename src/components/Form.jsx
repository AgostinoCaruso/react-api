import { useState } from "react";

function Form({ addCard, search }) {



    const [formData, setFormData] = useState({
        id: 0,
        name: "",
        species: "",
        alive: false,
        location: "",
        episodes: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const card = {
            id: Math.random(),
            name: formData.name,
            species: formData.species,
            alive: formData.alive,
            location: formData.location,
            episodes: formData.episodes,
        };

        addCard(card);
        setFormData({
            id: 0,
            name: "",
            species: "",
            alive: false,
            location: "",
            episodes: 0,
        });
    }

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        let inputValue = type == "checkbox" ? checked : value;
        if (name == "episodes") {
            inputValue = value ? parseInt(value, 10) : 0;
        }

        setFormData({ ...formData, [name]: inputValue });
    }


    return (
        <>

            {/* <input 
            type="text"
            id="search"
            name="search"
            onChange={handleSearch}
            /> */}

            <form onSubmit={handleSubmit} className=" flex flex-col" >
                <input
                    type="text"
                    name="name"
                    placeholder="Name..."
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="species"
                    placeholder="Species..."
                    value={formData.species}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="alive">Alive?</label>
                <input
                    type="checkbox"
                    name="alive"
                    checked={formData.alive}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    type="text"
                    name="location"
                    placeholder="Location..."
                    value={formData.location}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <input
                    type="number"
                    name="episodes"
                    placeholder="N' episodes..."
                    value={formData.episodes}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <button type="submit" className="">Invia</button>
            </form>
        </>
    );
}

export default Form;