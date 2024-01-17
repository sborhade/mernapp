import Footer from "../components/Footer";
import Header from "../components/Header"
import Hero from "../components/Hero";
import React  from "react";
interface props {
    children: React.ReactNode;
}

const Layout = ({ children }: props) => {

    return (
        <div className="flex flex-col min-h-fullscreen">
            <Header />
            <Hero />
            <div className="container mx-auto py-10 flex-1">{children}</div>
            <Footer />
        </div>
    )
}

export default Layout;