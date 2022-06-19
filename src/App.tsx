import React from 'react';
import './App.css';
import {Main} from "./Main/Main";
import {AboutMe} from "./AboutMe/AboutMe";
import {MyProject} from "./MyProject/MyProject";
import {Resume} from "./Resume/Resume";
import {Contacts} from "./Contacts/Contacts";
import {Nav} from "./Nav/Nav";
import {Navbar} from "./Navbar/Navbar";
import {Theme} from "./Theme/Theme";

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
