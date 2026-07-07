import Script from "next/script";
import Image from "next/image";
import Link from 'next/link';
import logo from "src/app/ChatGPT Image Jul 2, 2026, 10_20_25 PM.png";

export default function Nav() {
    return (
        <>
            {/* Bootstrap JS */}
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                strategy="afterInteractive"
            />

            {/* Custom JS */}
            <Script id="custom-script" strategy="afterInteractive">
                {`
                    function userScroll() {
                        const navbar = document.querySelector('.navbar');
                        const toTopBtn = document.querySelector('#to-top');

                        window.addEventListener('scroll', function () {
                            if (window.scrollY > 50) {
                                navbar?.classList.add('navbar-sticky');
                                if(toTopBtn){
                                    toTopBtn.classList.add('show');
                                } else {
                                    navbar?.classList.remove('navbar-sticky');
                                    if(toTopBtn){
                                        toTopBtn.classList.remove('show');
                                    }
                                }
                            });
                        }

                        function scrollToTop() {
                            document.body.scrollTop = 0;
                            document.documentElement.scrollTop = 0;
                        }

                        function incrementStats() {
                            const counters = document.querySelectorAll('.counter');

                            counters.forEach(function (counter) {
                                counter.innerText = 0;

                                const updateCounter = function () {
                                    const target = +counter.getAttribute('data-target');
                                    const c = +counter.innerText;

                                    const increment = target / 200;

                                    if (c < target) {
                                        counter.innerText = Math.ceil(c + increment);
                                        setTimeout(updateCounter, 10);
                                    } else {
                                        counter.innerText = target;
                                    }
                                }

                                updateCounter();
                            });
                        }

                        document.addEventListener('DOMContentLoaded', userScroll);
                        document.addEventListener('DOMContentLoaded', incrementStats);

                        document.addEventListener('DOMContentLoaded', function() {
                            const btn = document.querySelector('#to-top');

                            if(btn){
                                btn.addEventListener('click', scrollToTop);
                            }
                        });
                    `}
            </Script>

            <div className="container">
                <nav className="navbar navbar-expand-lg sticky-top text-dark">
                    <Link href="/src/public" className="navbar-brand">
                        <Image
                            src={logo}
                            alt="Amirhossein Developer"
                            width={70}
                            height={70}
                            className="navbar-logo"
                        />
                    </Link>

                    <div className="container nav-height">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse rounded-3" id="navbarNav">
                            <ul className="navbar-nav ms-auto mt-auto">
                                <li className="nav-item rounded-3 bg-white">
                                    <Link href="/" className="nav-link">خانه</Link>
                                </li>

                                <li className="nav-item rounded-3 bg-white">
                                    <a href="/myproject" className="nav-link">حرفه های من</a>
                                </li>
                                <li className="nav-item rounded-3 bg-white">
                                    <a href="/weblog" className="nav-link">وبلاگ</a>
                                </li>

                                <li className="nav-item rounded-3 bg-white">
                                    <a href="/call-me" className="nav-link">تماس با من</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}