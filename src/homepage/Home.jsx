import "./Home.css";
import video1 from "./backgroundvideo/stock_futuristic.mp4";
// import video2 from "./backgroundvideo/video2.mp4";
// import About from "../about/about";
// import Stockbar from "../stockbar/stockbar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            {/* <Stockbar></Stockbar> */}
            <div className="home-container">
                <div className="background-video">
                    <video
                        className="mainVideo-q8e7RgIt video-xmFX9eWL"
                        src={video1}
                        autoPlay={true}
                        controls
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="content-home">
                    <h1>HELLO MOTO</h1>
                    <div className="arrow-container">
                        <Link to="/about">
                            <div className="arrow"></div>
                            <div className="arrow"></div>
                            <div className="arrow"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
