import React from 'react';
import './App.css';
import {Main} from "./Main/Main";
import {AboutMe} from "./AboutMe/AboutMe";
import {MyProject} from "./MyProject/MyProject";
import {Resume} from "./Resume/Resume";
import {Footer} from "./Footer/Footer";
import {Contacts} from "./Contacts/Contacts";
import {Nav} from "./Nav/Nav";
import {Navbar} from "./Navbar/Navbar";

function App() {

    return (
    <div className="App">
        <Navbar />
        <Nav />
        <Main />
        <AboutMe />
        <Resume />
        <MyProject />
        <Contacts />
        {/*<Footer />*/}
    </div>

  );
}

export default App;
