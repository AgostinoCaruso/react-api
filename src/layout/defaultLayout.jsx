import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function defaultLayout(){
    return(

        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default defaultLayout;