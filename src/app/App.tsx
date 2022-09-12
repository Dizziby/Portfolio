import React, { ReactElement } from "react"

import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { animated, useTransition } from "react-spring"

import { AboutMe } from "../components/AboutMe/AboutMe"
import { Contacts } from "../components/Contacts/Contacts"
import { Main } from "../components/Main/Main"
import { MyProject } from "../components/MyProject/MyProject"
import { Navbar } from "../components/Navbar/Navbar"
import { Resume } from "../components/Resume/Resume"
import { Theme } from "../components/UIKit/Theme/Theme"

const App = (): ReactElement => {
    const location = useLocation()
    const transitions = useTransition(location, {
        from: { opacity: 0.2 },
        enter: { opacity: 1 },
        config: { duration: 300 },
    })

    return (
        <div>
            <Theme />
            <Navbar />
            {transitions(props => (
                <animated.div style={props}>
                    <Routes>
                        <Route path="/*" element={<Navigate to="/" />} />
                        <Route path="/" element={<Main />} />
                        <Route path="aboutme" element={<AboutMe />} />
                        <Route path="resume" element={<Resume />} />
                        <Route path="myproject" element={<MyProject />} />
                        <Route path="contacts" element={<Contacts />} />
                    </Routes>
                </animated.div>
            ))}
        </div>
    )
}

export default App
