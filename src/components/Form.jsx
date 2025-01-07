import { useState } from "react";

function Form({ addCard }) {

    const [formData, setFormData] = useState({
        id: 0,
        title: "",
        content: "",
        available: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const card = {
            id: Math.random(),
            title: formData.title,
            content: formData.content,
            available: formData.available
        };

        addCard(card);
        setFormData({
            id: 0,
            title: "",
            content: "",
            available: false,
        });
    }

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        let inputValue = type == "checkbox" ? checked : value;
        if (inputValue == "") {
            inputValue = "empty";
        }

        setFormData({...formData, [name]: inputValue});
    }


    return (
        <>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="title"
                    placeholder="Title..."
                    value={formData.title}
                    onChange={handleInputChange}
                />

                <button type="submit" className="">Invia</button>
            </form>
        </>
    );
}

export default Form;