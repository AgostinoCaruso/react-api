import { useState } from "react";
import Card from "./Card";
import Form from "./Form";

import ArrayObj from "../data/arrayObj";


function Main() {

    const [arrayCard, setArrayCard] = useState([...ArrayObj]);
    const addCard = ((newCard) => {
        setArrayCard([...arrayCard, newCard]);
    });


    const handleDelete = (itemID) => {
        const newArray = arrayCard.filter((item) => item.id != itemID);
        setArrayCard(newArray);
    };  

    return (
        <main>
            <Form addCard={addCard} />
            <Card array={arrayCard} handleDelete={handleDelete} />
        </main>
    );
}

export default Main;