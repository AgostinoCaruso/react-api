
function Card({ array, handleDelete }) {
    return (
        <section className=" grid grid-cols-4 gap-1">
            {array.map((ele) => 
                <div key={ele.id} >
                    <h3>{ele.title}</h3>
                    <span>{ele.content}</span>
                    <span>{ele.available == true ? "pronto" : "non ci sta"}</span>
                    <span className=" cursor-pointer" onClick={() => handleDelete(ele.id)}>❌Delete</span>
                </div>
            )}
        </section>
    );
}   

export default Card;