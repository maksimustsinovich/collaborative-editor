import Navigation from "../../components/Navigation/Navigation.tsx";
import {Outlet} from "react-router-dom";

function ApplicationLayout() {

    return (
        <>
            <Navigation/>
            <Outlet/>
        </>
    )

}

export default ApplicationLayout;