import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header.tsx";

function BaseLayout() {

    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )

}

export default BaseLayout;