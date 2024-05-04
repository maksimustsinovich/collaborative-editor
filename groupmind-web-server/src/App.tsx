import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.tsx";
import SignInPage from "./pages/SignInPage/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import MessagesPage from "./pages/MessagesPage/MessagesPage.tsx";
import DocumentsPage from "./pages/DocumentsPage/DocumentsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"login"} element={<SignInPage />} />
                <Route path={"register"} element={<SignUpPage />} />
                <Route path={"app"}>
                    <Route path={"profile"} element={<ProfilePage />} />
                    <Route path={"messages"} element={<MessagesPage />} />
                    <Route path={"documents"} element={<DocumentsPage />} />
                </Route>
                <Route path={"*"} element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )

}

export default App
