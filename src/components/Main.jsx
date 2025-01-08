import { useState, useEffect } from "react";
import Card from "./Card";
import Form from "./Form";

import axios from "axios";

const apiUrl = "http://localhost:3000";

function Main() {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    }

    const getData = (search) => {
        let options = null;
        if (search) {
            options = {
                params: { search },
            };
        }
        axios
            .get(apiUrl + "/books", options)
            .then((res) => {
                console.log(res.data);
                setBooks(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const handleDelete = (itemID) => {
        //axios call destroy
        axios
            .delete(`${apiUrl}/books/ ${itemID}`)
            .then((res) => {
                console.log("item deleted:", res.data);
                setBooks( books.filter((book) => book.id != itemID));
            })
            .catch((error) => {
                console.log(error);
            })
        // const newArray = books.filter((item) => item.id !== itemID);
        // setBooks(newArray);
    };

    const addBook = (newBooks) => {
        //axios call put
        setBooks([...books, newBooks]);
    };

    useEffect(() => {
        getData(search);
    }, [search]);


    return (
        <main>
            <Form addBook={addBook} search={updateSearch} />
            <Card array={books} handleDelete={handleDelete} />
        </main>
    );
}

export default Main;