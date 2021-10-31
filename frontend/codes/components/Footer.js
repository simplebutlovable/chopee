import style from '../styles/Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
    return (<>
        <div className={style.footer}>
            <div className={style.subfooter}>
                <div className={style.custumerService}>
                    <p>Custumer Service</p>
                    <div className={style.serviceMenu}>
                        <ul>
                            <li>
                                <Link href="#"><a>Help Centre</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Payment Method</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>ChopeePay</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Order Tracking</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Free Shipping</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Return & Refund</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Chopee Guarantee</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Overseas Product</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Contact Us</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.aboutChopee}>
                    <p>About Chopee</p>
                    <ul>
                        <li><Link href="#"><a>About Us</a></Link></li>
                        <li><Link href="#"><a>Chopee Blog</a></Link></li>
                        <li><Link href="#"><a>Chopee Careers</a></Link></li>
                        <li><Link href="#"><a>Chopee Policy</a></Link></li>
                        <li><Link href="#"><a>Chopee Mall</a></Link></li>
                        <li><Link href="#"><a>Seller Centre</a></Link></li>
                        <li><Link href="#"><a>Flash Deals</a></Link></li>
                        <li><Link href="#"><a>Media Contact</a></Link></li>
                    </ul>
                </div>
                <div className={style.payment}>
                    <p>Payment</p>
                    <div className={style.paymentsSlot}></div>
                </div>
                <div className={style.follow}>
                    <div className={style.followTitle}>
                        <p>Follow Us</p>
                    </div>
                    <ul>
                        <li>
                            <Link href="#" ><a>
                                <div className={style.socialMediaIcons}>
                                    <Image src="/icons/fb_sub.png" width={32} height={32} />
                                </div>
                                <p>Facebook</p>
                            </a></Link>
                        </li>
                        <li>
                            <Link href="#" ><a>
                                <div className={style.socialMediaIcons}>
                                    <Image src="/icons/insta_sub.png" width={32} height={32} />
                                </div>
                                <p>Instagram</p>
                            </a></Link>
                        </li>
                        <li>
                            <Link href="#" ><a>
                                <div className={style.socialMediaIcons}>
                                    <Image src="/icons/twitter.png" width={32} height={32} />
                                </div>
                                <p>Twitter</p>
                            </a></Link>
                        </li>
                        <li>
                            <Link href="#" ><a>
                                <div className={style.socialMediaIcons}>
                                    <Image src="/icons/linkedin_sub.png" width={32} height={32} />
                                </div>
                                <p>Linked In</p>
                            </a></Link>
                        </li>
                    </ul>
                </div>
                <div className={style.chopeeDownload}>
                    <p>Chopee App Download</p>
                    <div className={style.downloadGrid}>
                        <div className={style.qrcode}></div>
                        <div className={style.stores}>
                            <div className={style.appDownloadLink}>
                                <Image src="/icons/google-play.png" width={160} height={34} />
                            </div>
                            <div className={style.appDownloadLink}>
                                <Image src="/icons/apple-store.png" width={228} height={52} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footerSeparator}></div>
            <div className={style.mainFooter}>
                <div className={style.leftFooter}>
                    <p>&copy; {new Date().getFullYear()} Chopee</p>
                    <p>(THIS IS A SHOPEE WEBSITE CLONE)</p>
                    <p>All Rights Researved</p>
                </div>
            </div>
        </div>
    </>);
}

export default Footer;