import Link from 'next/link'


const SignUp = () => {
    return (<>
        <div className="signup_page">
            <div className="signup_header">
                <p>Signup</p>
            </div>
            <form id="signup_form">
                <input type="text" placeholder="Email" className="" name="email" id="email" />
                <input type="submit" value="Next" id="submit" />
            </form>

            <div className="or">
                <div className="line_divider">
                </div>
                <p>OR</p>
            </div>

            <div className="login_options">
                <a href="#" id="fb_c">
                    <div className="img_wrapper">
                        <img src={`${process.env.PUBLIC_URL}/images/fb.png`} />
                    </div>
                    <p>Facebook</p>
                </a>
                <a href="#" id="google_c">
                    <div className="img_wrapper">
                        <img id="google_logo" src={`${process.env.PUBLIC_URL}/images/google.jpg`} />
                    </div>
                    <p>Google</p>
                </a>
                <a href="#" id="apple_c">
                    <div className="img_wrapper">
                        <img src={`${process.env.PUBLIC_URL}/images/apple.png`} />
                    </div>
                    <p>Apple</p>
                </a>

            </div>
            <div className="signup_terms">
                <p id="terms">By signing up, you agree to Chopee's <a href="#">Terms and Service </a> & <a href="#">Privacy
                    Policy</a></p>
            </div>
            <div className="login">
                <p>Have an Account?
                    <Link href="/auth/login"><a><span id="signup_link"> Login</span></a></Link>
                </p>
            </div>
        </div>

    </>);
}

export default SignUp;