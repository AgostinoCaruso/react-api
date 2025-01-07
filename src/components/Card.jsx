
function Card({ array, handleDelete }) {
    return (
        <section className=" grid grid-cols-4 gap-1">
            {array.map((ele) => 
                <div key={ele.id} >
                    <h3>{ele.name}</h3>
                    <br />
                    <span>{ele.species}</span>
                    <br />
                    <span>{ele.status === "Alive" || true ? "vivo" : "morto"}</span>
                    <br />
                    <span>Luogo d'origine: {ele.origin.name}</span>
                    <br />
                    <span>Numero degli episodi:{ele.episode.length}</span>
                    <br />
                    <span className=" cursor-pointer" onClick={() => handleDelete(ele.id)}>❌Delete</span>
                    <hr />
                </div>
            )}
        </section>
    );
}

export default Card;