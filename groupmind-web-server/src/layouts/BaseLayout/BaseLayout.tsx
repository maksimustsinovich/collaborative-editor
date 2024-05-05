import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header.tsx";

function BaseLayout() {

    return (
        <>
            <Header/>
            <main style={{height:'100%'}}>
                <Outlet/>
            </main>
        </>
    )

}

export default BaseLayout;