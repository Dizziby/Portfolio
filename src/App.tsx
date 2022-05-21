import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {AboutMe} from "./aboutMe/AboutMe";
import {MyProject} from "./myProject/MyProject";
import {MySkills} from "./mySkills/MySkills";
import {Footer} from "./footer/Footer";
import {Contacts} from "./contacts/Contacts";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <AboutMe />
        <MySkills />
        <MyProject />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
