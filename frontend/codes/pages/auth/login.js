import Head from 'next/head'
import style from '../../styles/auth/login.module.scss'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'


const Login = () => {
    return (<>
        <Head>
            <title>Chopee | Login</title>
        </Head>
        <div className={style.authMainPage}>
            <nav className={style.auth_nav}>
                <div className={style.authHeaderWrapper}>
                    <div className={style.chopeeLogoHolder}>
                        <Link href="/">
                            <a>
                                <div className={style.siteLogo}>
                                    <Image src="/icons/Chopee-orange.png" width={700} height={218} />
                                </div>
                                <h3>Login</h3>
                            </a>
                        </Link>
                    </div>
                    <div className={style.authHelp}>
                        <Link href="#">
                            <a>
                                Need Help?
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className={style.pageBodyWrapper}>
                <div className={style.pageBody}>
                    {/* <div className={style.saleBanner}>
                        <Image src="/11-11_sale.png" width={1024} height={600} />
                    </div> */}

                    <div className={style.loginPage}>
                        <div className={style.loginHeader}>
                            <p>Login</p>
                            <form id="login_form" className={style.loginForm}>
                                <input type="text" name="username" id="username" placeholder="Username" />
                                <input type="password" name="password" id="password" placeholder="Password" />
                                <input type="submit" value="Login" id="login" />
                            </form>

                            <div className={style.recovery}>
                                <p><Link href="#"><a>Forget Password</a></Link></p>
                                <p><Link href="#"><a>Login with SMS</a></Link></p>
                            </div>

                            <div className={style.loginOr}>
                                <div className={style.loginLineDivider}>
                                </div>
                                <p>OR</p>
                            </div>

                            <div className={style.loginOptions}>
                                <div className={style.fbC}>
                                    <Link href="#">
                                        <a id="fb_c">
                                            <div className={style.imgWrapper}>
                                                <Image src="/icons/fb.png" width={48} height={46} />
                                            </div>
                                            <p>Facebook</p>
                                        </a>
                                    </Link>
                                </div>

                                <div className={style.googleC}>
                                    <Link href="#">
                                        <a id="google_c">
                                            <div className={style.imgWrapper}>
                                                <Image id="google_logo" src="/icons/google.jpg" width={48} height={48} />
                                            </div>
                                            <p>Google</p>
                                        </a>
                                    </Link>
                                </div>
                                <div className={style.appleC}>
                                    <Link href="#">
                                        <a id="apple_c">
                                            <div className={style.imgWrapper}>
                                                <Image src="/icons/apple.png" width={48} height={46} />
                                            </div>
                                            <p>Apple</p>
                                        </a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>);
}

export default Login;