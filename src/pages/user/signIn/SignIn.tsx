import "./SignIn.scss";

import {useState} from "react";
import {userApi} from "../../../apis/userApi";
import {routerEnum} from "../../../enum/routerEnum";
import {useNavigate} from "react-router-dom";

export default function SignIn() {
    const history = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    function signInHandler() {
        if (email === "" || password === "") {
            if (email === "") {
                setEmailError("이메일을 입력하세요.");
            } else {
                setEmailError("");
            }

            if (password === "") {
                setPasswordError("비밀번호를 입력하세요.");
            } else {
                setPasswordError("");
            }

            return;
        }

        userApi.signIn(email, password).then(() => {
            history("../" + routerEnum.MAIN + "/" + routerEnum.LIST);

            return;
        });
    }

    return (
        <div className="sign-in">
            <div className="sign-in-board">
                <div className="title-wrapper">
                    <label className="title">Login</label>
                </div>

                <div className="label-wrapper">
                    <label>Email</label>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>{emailError}</label>
                </div>

                <div className="label-wrapper">
                    <label>PW</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>{passwordError}</label>
                </div>

                <div className="button-wrapper">
                    <button className="sign-in-button" onChange={signInHandler}>
                        Login
                    </button>
                    <button
                        className="sign-up-button"
                        onClick={() => history("../" + routerEnum.SIGNUP)}
                    >
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
}
