import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}