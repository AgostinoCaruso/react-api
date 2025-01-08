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

    //axios call index
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

    //axios call destroy
    const handleDelete = (itemID) => {
        axios
            .delete(`${apiUrl}/books/${itemID}`)
            .then((res) => {
                console.log("item deleted:", res.data);
                setBooks( books.filter((book) => book.id != itemID));
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const addBook = (newBooks) => {
        //axios call post
        axios
            .post(`${apiUrl}/books`,newBooks)
            .then((res)=>{
                console.log("book added", res.data);
                setBooks([...books, newBooks]);
            })
            .catch((error)=>{
                console.log(error)
            })
    };

    useEffect(() => {
        getData(search);
    }, [search]);


    return (
        <main>
            <Form addBook={addBook} books={books} />
            <Card array={books} handleDelete={handleDelete} />
        </main>
    );
}

export default Main;