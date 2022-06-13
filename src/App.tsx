import "./App.scss";

import {Route, Routes} from "react-router-dom";

import SignIn from "./pages/user/signIn/SignIn";
import SignUp from "./pages/user/signUp/SignUp";
import Main from "./pages/main/Main";

import Nav from "./components/nav/Nav";
import TopicList from "./components/topicList/TopicList";
import TopicDetail from "./components/topicDetail/TopicDetail";

export default function App() {
    return (
        <div className="app">
            <Nav />

            <div className="page">
                <Routes>
                    <Route path={"sign-in"} element={<SignIn />} />
                    <Route path={"sign-up"} element={<SignUp />} />

                    <Route path={"main"} element={<Main />}>
                        <Route path={"list"} element={<TopicList />} />
                        <Route
                            path={"detail"}
                            element={<TopicDetail />}
                        />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}
