import React, { useState, useEffect } from "react";
import logoLight from "../Assets/logoLight.png";
import logoDark from "../Assets/logoDark.png";

function Navigation() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleCheckboxChange=(event)=> {
        setIsDarkMode(event.target.checked)
    }

    useEffect(()=> {
        if (isDarkMode) {
            document.body.classList.remove('dark-mode')
        } else {
            document.body.classList.add('dark-mode')
        }
    }, [isDarkMode])

    return (
        <div>
            <section className="cover">
                <div className="topInfo">
                    <img src={isDarkMode ? logoDark : logoLight} alt="my logo"/>

                    <p className="headerP">Junior Web Developer / Student</p>

                    <label className="switch" id="dark">
                        <input type="checkbox"
                            checked={isDarkMode} 
                            onChange={handleCheckboxChange} />
                        <span className="slider round"></span>
                    </label>
                </div>

                <h1 className="headerName">JOHNREY MANSILUNGAN</h1>

                <hr style={{width: "100%", color: "wheat"}}/>
    
                <section className="nav">
                    <nav>
                        <ul>
                            <li><a href="/"><p>HOME</p></a></li>
                            <li><a href="/about"><p>ABOUT</p></a></li>
                            <li><a href="/projects"><p>PROJECTS</p></a></li>
                        </ul>
                    </nav>

                </section>

                <hr style={{width: "100%", color: "wheat"}}/>
            </section>

        </div>
    )
}

export default Navigation