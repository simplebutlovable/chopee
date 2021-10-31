import Link from 'next/link'
import style from '../styles/Header.module.scss'
import Image from 'next/image'

const Header = () => {
    return (<>
        <div className={style.mainHeader}>
            <nav className={style.headerNav}>
                <div className={style.topnav}>
                    <div className={style.leftNav}>
                        <ul>
                            <li>
                                <Link href="#"><a> Seller Centre</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Sell on Choppe</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Download</a></Link>
                            </li>
                            <li>
                                <div id="follow" className={style.follow}>
                                    <p>Follow us on</p>
                                    <Link href="#"><a>
                                        <div className={style.socialMediaSite}>
                                            <Image src="/icons/fb.png" width={20} height={20} />
                                        </div>
                                    </a></Link>
                                    <Link href="#"><a>
                                        <div className={style.socialMediaSite}>
                                            <Image src="/icons/insta.png" width={20} height={20} />
                                        </div>
                                    </a></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={style.rightNav}>
                        <ul>
                            <li>
                                <div className={style.notification}>
                                    <a href="#">
                                        <div className={style.helperIcons}>
                                            <Image src="/icons/notification.png" width={30} height={30} />
                                        </div>
                                        <p>Notification</p>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className={style.help}>
                                    <a href="#">
                                        <div className={style.helperIcons}>
                                            <Image src="/icons/help.png" width={30} height={30} />
                                        </div>
                                        <p>Help</p>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div id="authenticate" className={style.authenticate}>
                                    <Link href="#"><a id="signup">Sign Up</a></Link>
                                    <p>|</p>
                                    <Link href="#"><a id="login">Login</a></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.middlenav}>
                    <div className={style.chopeeLogo}>
                        <div className={style.pageLogo}>
                            <Image src="/icons/Chopee.png" width={700} height={218} />
                        </div>
                    </div>
                    <div className={style.searchBtn}>
                        <div className={style.searchFunction}>
                            <input type="text" id="searchInput" className={style.mainSearch}
                                placeholder="9.9 Deals as low as &#8369;9 " />
                            <img src="/icons/search_logo.png" />
                        </div>
                        <div className={style.trending}>
                            <ul id="topSearchList">
                                <li>Dog Phone Case</li>
                                <li>Xiaomi Phonce Case</li>
                                <li>iPhone 6</li>
                                <li>Tide iPhone</li>
                                <li>Redmi 5 Plus Case</li>
                                <li>iPhone 6 Plus Case</li>
                                <li>Study Table</li>
                                <li>Case for iPhone 6s Plus</li>
                            </ul>
                        </div>
                    </div>

                    <div className={style.cart}>
                        <img src="/icons/cart.png" />
                    </div>
                </div>
            </nav>
        </div>
    </>);
}

export default Header;