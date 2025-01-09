import { useEffect } from "react";
import { useParams } from "react-router-dom";

function BookPage() {
    
    const { id } = useParams();

    useEffect(() => {

    }, []);

    return (
        <>
            <h1>Sono il libro: {id}</h1>
            <div key={id.id} >
                    <h3>{id.title}</h3>
                    <br />
                    <span>Status: {id.status === "PUBLISH" || true ? "published" : "unpublished"}</span>
                    <br />
                    <span>Description: {id.longDescription}</span>
                    <br />
                    <span>Page count:{id.pageCount}</span>
                    <br />
                </div>
        </>
        
    );
}

export default BookPage;