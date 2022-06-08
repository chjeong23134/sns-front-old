import "./SignIn.scss";

export default function SignIn() {
    return (
        <div className="sign-in">
            <div className="sign-in-board">
                <div className="title-wrapper">
                    <label className="title">Login</label>
                </div>

                <div className="label-wrapper">
                    <label>Email</label>
                    <input type="text" />
                </div>

                <div className="label-wrapper">
                    <label>PW</label>
                    <input type="password" />
                </div>

                <div className="button-wrapper">
                    <button className="sign-in-button">Login</button>

                    <button className="sign-up-button">Signup</button>
                </div>
            </div>
        </div>
    );
}
