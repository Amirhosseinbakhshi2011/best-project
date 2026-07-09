"use client";

import { useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import logo from "src/app/ChatGPT Image Jul 2, 2026, 10_20_25 PM.png";

export default function Nav() {
    useEffect(() => {
        const navbar = document.querySelector(".navbar");
        const toTopBtn = document.querySelector<HTMLElement>("#to-top");

        // Sticky Navbar
        const userScroll = () => {
            if (window.scrollY > 50) {
                navbar?.classList.add("navbar-sticky");
                toTopBtn?.classList.add("show");
            } else {
                navbar?.classList.remove("navbar-sticky");
                toTopBtn?.classList.remove("show");
            }
        };

        window.addEventListener("scroll", userScroll);

        // Scroll To Top
        const scrollToTop = () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

        if (toTopBtn) {
            toTopBtn.addEventListener("click", scrollToTop);
        }

        // Counter Animation
        const counters =
            document.querySelectorAll<HTMLElement>(".counter");

        const incrementStats = () => {
            counters.forEach((counter) => {
                counter.innerText = "0";

                const target = Number(
                    counter.getAttribute("data-target") || 0
                );

                const updateCounter = () => {
                    const current = Number(counter.innerText);
                    const increment = target / 200;

                    if (current < target) {
                        counter.innerText = String(
                            Math.ceil(current + increment)
                        );
                        setTimeout(updateCounter, 10);
                    } else {
                        counter.innerText = String(target);
                    }
                };

                updateCounter();
            });
        };

        incrementStats();

        return () => {
            window.removeEventListener("scroll", userScroll);

            if (toTopBtn) {
                toTopBtn.removeEventListener(
                    "click",
                    scrollToTop
                );
            }
        };
    }, []);

    return (
        <>
            {/* Bootstrap JS */}
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                strategy="afterInteractive"
            />

            <div className="container">
                <nav className="navbar navbar-expand-lg sticky-top text-dark">
                    <Link href="/" className="navbar-brand">
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
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse rounded-3"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav ms-auto mt-auto ">
                                <li className="nav-item rounded-3 bg-white ">
                                    <Link href="/" className="nav-link m-auto">
                                        خانه
                                    </Link>
                                </li>

                                <li className="nav-item rounded-3 bg-white ">
                                    <Link
                                        href="/myproject"
                                        className="nav-link m-auto"
                                    >
                                        حرفه های من
                                    </Link>
                                </li>

                                <li className="nav-item rounded-3 bg-white ">
                                    <Link
                                        href="/weblog"
                                        className="nav-link m-auto"
                                    >
                                        وبلاگ
                                    </Link>
                                </li>

                                <li className="nav-item rounded-3 bg-white ">
                                    <Link
                                        href="/call-me"
                                        className="nav-link m-auto"
                                    >
                                        تماس با من
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}