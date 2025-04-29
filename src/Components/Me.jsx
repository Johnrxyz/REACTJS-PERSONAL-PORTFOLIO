import Cards from "./ProjectCards";
import AboutMe from "./AboutMe";
import photogCover from "../Assets/photogCover.jpg";
import videoCover from "../Assets/videoCover.png";
import webCover from "../Assets/webCover.png";
import photoOfMe from "../Assets/me.jpg";

function Hero() {
    return (
        <div>
            <section className="content">
                <div className="about">
                    <AboutMe myImage={photoOfMe}/>
                </div>

                <div className="mainC">
                    <h1 className="aboutMe">MY PROJECTS</h1>
                    <p className="aboutDes">WITH YEARS OF EXPERIENCE, THESE ARE MY WORKS SO FAR</p>

                    <div className="container">
                        <Cards image={photogCover} name={"PHOTOGRAPHS"} myLink={"https://drive.google.com/drive/folders/1XHKYzDG00zNou8MJ5rkn1Ybp3Nb2QiaD?usp=sharing"}/>
                        <Cards image={videoCover} name={"VIDEOS"} myLink={"https://drive.google.com/drive/folders/1CtLIChJLbv6cC4TwmFIheVTit4QHqtdd?usp=sharing"}/>
                        <Cards image={webCover} name={"WEBSITES"} myLink={"https://github.com/Johnrxyz"}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero