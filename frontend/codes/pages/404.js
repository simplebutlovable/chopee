import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from 'next/head'

const NotFound = () => {
    return (<>
        <Head>
            <title>Chopee - 404 Not Found</title>
            <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <Header />
        <div className="mainContainer">
            <div className="errorMessage">
                <h1>404 | Page Not Found </h1>
                <p>Page cannot be found or has been removed. Go back to &nbsp;
                    <Link href="/"><a className="fallbackLink">Homepage</a></Link>.</p>
            </div>
        </div>
        <Footer />
        <style jsx>
            {
                ` 
                .mainContainer {
                height: 50vh;
                position:relative;
                z-index : -1;
            }
            .errorMessage{
                position:absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                text-align:center;
            }
            p{
                font-size: 0.9rem;
            }
            .fallbackLink{
                text-decoration: underline;
                color: blue;
            }

            `
            }
        </style>

    </>);
}

export default NotFound;