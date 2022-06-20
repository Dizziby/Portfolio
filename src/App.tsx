import React from 'react';
import './App.css';
import {Theme} from "./components/UIKit/Theme/Theme";
import {MyProject} from "./components/MyProject/MyProject";
import {Nav} from "./components/Nav/Nav";
import {Contacts} from "./components/Contacts/Contacts";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Main} from "./components/Main/Main";
import {Resume} from "./components/Resume/Resume";
import {Navbar} from "./components/Navbar/Navbar";


function App() {
    return (
        <div className="App">
            <Theme/>
            {/*<Navbar/>*/}
            <Nav/>
            <Main/>
            <AboutMe/>
            <Resume/>
            <MyProject/>
            <Contacts/>
        </div>
    );
}

export default App;
