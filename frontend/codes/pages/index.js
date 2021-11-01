import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Choppe</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Header />

      <div className={style.addSpaceWrapper}>
        <div className={style.addSpace}>
          <div className={style.addSpaceOneBlockOne}>
            <h3>Add Space for Rent</h3>
          </div>
          <div className={style.addSpaceOneBlockTwo}>
            <h3>Add Space for Rent</h3>
          </div>
          <div className={style.addSpaceOneBlockThree}>
            <h3>Add Space for Rent</h3>
          </div>
        </div>
      </div>
      <div className={style.eventsList}>
        <div className={style.eventListContainer}>

        </div>
      </div>

      <div className={style.fullSizeBanner}>
        <div className={style.bannerImage}>
          <p>Add Space For rent</p>
        </div>
      </div>

      <div className={style.exclusiveDeals}>
        <div className={style.exclusiveDealsWrapper}>

        </div>
      </div>

      <ul><li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
        <li>HELLI</li>
      </ul>

      <Footer />
    </>
  )
}
