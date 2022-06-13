import "./SignUp.scss";

import {useState} from "react";
import {emailCheck, signUp} from "../../../apis/userApi";
import {useNavigate} from "react-router-dom";

export default function SignUp() {
    const history = useNavigate();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [nameError, setNameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    function signUpHandler() {
        if (name === "" || email === "" || password === "") {
            if (name === "") {
                setNameError("이름을 입력하세요.");
            } else {
                setNameError("");
            }

            if (email === "") {
                setEmailError("이메일을 입력하세요.");
            } else {
                setEmailError("");
            }

            if (password === "") {
                setPasswordError("비밀번호을 입력하세요.");
            } else {
                setPasswordError("");
            }

            return;
        }

        emailCheck(email).then((res) => {
            if (res !== null) {
                setEmailError("이미 가입된 이메일입니다.");

                return;
            }

            signUp(email, password, name).then((res) => {
                history("../main/list");
            });
        });
    }

    return (
        <div className="sign-up">
            <div className="sign-up-board">
                <div className="title-wrapper">
                    <label className="title">Signup</label>
                </div>

                <div className="label-wrapper">
                    <label>Name</label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>{nameError}</label>
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
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>{passwordError}</label>
                </div>

                <div className="button-wrapper">
                    <button className="sign-up-button" onClick={signUpHandler}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
