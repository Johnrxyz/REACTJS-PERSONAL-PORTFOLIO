function AboutMe(props) {
    return (
        <>
            <h1 className="aboutMe">ABOUT ME</h1>
            <p className="aboutDes">A student with a passion for capturing moments through photography, storytelling through filmmaking, and crafting seamless user experiences with UI/UX design.</p>

            <div className="imgHolder">
                <img src={props.myImage} alt="" style={{width:'100%', height:'auto'}}/>
            </div>
        </>
    )
}

export default AboutMe