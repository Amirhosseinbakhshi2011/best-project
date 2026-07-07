import type {Metadata} from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../ccomponent/footers"
import Nav from "../ccomponent/nav";

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
        <html lang="fa" >
        <body className="bg-black">

       <Nav/>
        {children}
        <Footer/>
        {/* To Top Button */}


        </body>
        </html>
    );
}