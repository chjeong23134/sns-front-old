import "./App.scss";

import {Route, Routes} from "react-router-dom";

import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

import Nav from "./components/nav/Nav";

export default function App() {
    return (
        <div className="app">
            <Nav />

            <div className="page">
                <Routes>
                    <Route path="sign-in" element={<SignIn />} />
                    <Route path="sign-up" element={<SignUp />} />
                </Routes>
            </div>
        </div>
    );
}
