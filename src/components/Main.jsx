import Card from "./Card";
import Form from "./Form";

import ArrayObj from "./arrayObj";


function Main() {
    return (
        <main>
            <Form />
            <Card array={ArrayObj}/>
        </main>
    );
}

export default Main;