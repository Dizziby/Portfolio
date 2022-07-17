import React, { ReactElement } from "react"

import "./App.css"
import { AboutMe } from "../components/AboutMe/AboutMe"
import { Contacts } from "../components/Contacts/Contacts"
import { Main } from "../components/Main/Main"
import { MyProject } from "../components/MyProject/MyProject"
import { Nav } from "../components/Nav/Nav"
import { Navbar } from "../components/Navbar/Navbar"
import { Resume } from "../components/Resume/Resume"
import { Theme } from "../components/UIKit/Theme/Theme"

const App = (): ReactElement => (
    <div className="App">
        <Theme />
        <Navbar />
        <Nav />
        <Main />
        <AboutMe />
        <Resume />
        <MyProject />
        <Contacts />
    </div>
)

export default App
