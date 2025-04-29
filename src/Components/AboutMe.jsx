function AboutMe(props) {
    return (
        <>
            <h1 className="aboutMe">ABOUT ME</h1>
            <p className="aboutDes">A PHOTO OF ME:</p>

            <div className="imgHolder">
                <img src={props.myImage}  style={{width:'100%', height:'auto'}}/>
            </div>
        </>
    )
}

export default AboutMe