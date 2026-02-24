import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/banner/Banner.jsx";

export default function App() {
    return (
        <>
            <Header titulo="BookPlus" tema="escuro" />
            <Banner />
        </>
    );
}