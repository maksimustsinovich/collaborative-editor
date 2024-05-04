import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import MessagesPage from "./pages/MessagesPage.tsx";
import DocumentsPage from "./pages/DocumentsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

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
