import { useState } from "react";

function Form({ addBook, books }) {



    const [formData, setFormData] = useState({
        id: 0,
        title: "",
        status: false,
        description: "",
        pageCount: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let n = 0;
        let newID = books.forEach((ele)=>{
            if(ele.id>n){
                n=ele.id;
            }
        });
        newID = n+1;
        const book = {
            id: newID,
            title: formData.title,
            status: formData.status,
            longDescription: formData.description,
            pageCount: formData.pageCount,
        };

        addBook(book);
        setFormData({
            id: 0,
            title: "",
            status: false,
            description: "",
            pageCount: 0,
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
            <form onSubmit={handleSubmit} className=" flex flex-col" >
                <input
                    type="text"
                    name="title"
                    placeholder="Title..."
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="status">Published?</label>
                <input
                    type="checkbox"
                    name="status"
                    checked={formData.status}
                    onChange={handleInputChange}
                />
                <br />
                <textarea
                    type="text"
                    name="description"
                    placeholder="Description..."
                    value={formData.description}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <input
                    type="number"
                    name="pageCount"
                    placeholder="N' page..."
                    value={formData.pageCount}
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