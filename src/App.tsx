import "./App.scss";

import {Route, Routes} from "react-router-dom";

import SignIn from "./pages/user/signIn/SignIn";
import SignUp from "./pages/user/signUp/SignUp";
import Main from "./pages/main/Main";

import Nav from "./components/nav/Nav";
import TopicList from "./components/topicList/TopicList";
import TopicDetail from "./components/topicDetail/TopicDetail";

import {routerEnum} from "./enum/routerEnum";

export default function App() {
    return (
        <div className="app">
            <Nav />

            <div className="page">
                <Routes>
                    <Route path={routerEnum.SIGNIN} element={<SignIn />} />
                    <Route path={routerEnum.SIGNUP} element={<SignUp />} />

                    <Route path={routerEnum.MAIN} element={<Main />}>
                        <Route path={routerEnum.LIST} element={<TopicList />} />
                        <Route
                            path={routerEnum.DETAIL}
                            element={<TopicDetail />}
                        />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}
