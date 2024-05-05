import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.tsx";
import SignInPage from "./pages/SignInPage/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import MessagesPage from "./pages/MessagesPage/MessagesPage.tsx";
import DocumentsPage from "./pages/DocumentsPage/DocumentsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import ApplicationLayout from "./layouts/ApplicationLayout/ApplicationLayout.tsx";
import BaseLayout from "./layouts/BaseLayout/BaseLayout.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BaseLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path={"login"} element={<SignInPage/>}/>
                    <Route path={"register"} element={<SignUpPage/>}/>
                    <Route path={"app"} element={<ApplicationLayout/>}>
                        <Route index element={<ProfilePage/>}/>
                        <Route path={"messages"} element={<MessagesPage/>}/>
                        <Route path={"documents"} element={<DocumentsPage/>}/>
                    </Route>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App;
