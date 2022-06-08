import "./SignUp.scss";

export default function SignUp() {
    return (
        <div className="sign-up">
            <div className="sign-up-board">
                <div className="title-wrapper">
                    <label className="title">Signup</label>
                </div>

                <div className="label-wrapper">
                    <label>Name</label>
                    <input type="text" />
                </div>

                <div className="label-wrapper">
                    <label>Email</label>
                    <input type="text" />
                </div>

                <div className="label-wrapper">
                    <label>PW</label>
                    <input type="text" />
                </div>

                <div className="label-wrapper">
                    <label>PW Re</label>
                    <input type="text" />
                </div>

                <div className="button-wrapper">
                    <button className="sign-up-button">Sign Up</button>
                </div>
            </div>
        </div>
    );
}
