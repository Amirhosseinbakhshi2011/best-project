import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./ChatGPT Image Jul 2, 2026, 10_20_25 PM.png"
export const metadata: Metadata = {
  title: "Amirhossein Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body>
      <nav className="navbar navbar-expand-lg sticky-top text-dark">
          <a href="">
              <Image
                  src={logo}
                  alt="Amirhossein Developer"
                  width={70}
                  height={70}
              />
          </a>
        <div className="container nav-height">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse rounded-3" id="navbarNavs">
            <ul className="navbar-nav ms-auto mt-auto">
              <li className="nav-item rounded-3"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item rounded-3"><a className="nav-link" href="#">Discover</a></li>
              <li className="nav-item rounded-3"><a className="nav-link" href="#">Summary</a></li>
              <li className="nav-item rounded-3"><a className="nav-link" href="#">Takeaways</a></li>
            </ul>
          </div>
        </div>

      </nav>


      {children}
      </body>
      </html>
  );
}