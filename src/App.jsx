import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./navbar/Navbar";
import Home from "./homepage/Home";
// import Stockbar from "./stockbar/stockbar";
import About from "./about/about";
import TradingViewWidget from "../components/chart/TradingViewWidget";
import Team from "./team/team";
// import Investopedia from "../components/investopediaData/investopediaData"

export default function App() {
    return (
        <BrowserRouter>
            {/* <Stockbar/> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/chart" element={<TradingViewWidget />} />
                {/* <Route psth="/invetopedia" element={<Investopedia/>}/> */}
            </Routes>
            <MyNavbar />
            <About/>
            <Team/>
        </BrowserRouter>
    );
}
