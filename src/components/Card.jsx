
function Card({ array }) {
    return (
        <div>
            {array.map((ele) => (
                <div key={ele.id} >
                    <h3>{ele.title}</h3>
                    <span>{ele.content}</span>
                </div>
            ))}
        </div>
    );
}   

export default Card;