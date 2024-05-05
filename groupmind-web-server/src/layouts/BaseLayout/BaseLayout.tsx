import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";

function BaseLayout() {

    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )

}

export default BaseLayout;