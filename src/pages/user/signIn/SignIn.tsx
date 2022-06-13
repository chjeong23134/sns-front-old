import "./SignIn.scss";

import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {signIn} from "../../../apis/userApi";

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

        signIn(email, password).then((res) => {
            console.log(res);
            if (res.id == null) {
                setEmailError("정보가 올바르지 않습니다.");
                setPasswordError("정보가 올바르지 않습니다.");

                return;
            }

            history("../main/list");

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
                    <button className="sign-in-button" onClick={signInHandler}>
                        Login
                    </button>
                    <button
                        className="sign-up-button"
                        onClick={() => history("../sign-up")}
                    >
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
}
