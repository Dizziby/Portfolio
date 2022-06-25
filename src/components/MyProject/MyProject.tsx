import React from 'react';
import styles from "./MyProject.module.scss"
import stylesContainer from "../../common/styles/Container.module.scss"
import {Project} from "./Project/Project";
import todolist from "../../assets/img/todolist.png"
import socialNetwork from "../../assets/img/socialNetwork.png"
import landingPage from "../../assets/img/landingPage.png"
import {TitleBackground} from "../UIKit/TitleBackground/TitleBackground";

type ProjectType = {
    id: number
    title: string
    description: string
    url: string
    logo: {
        backgroundImage: string
    }
}

export const MyProject = () => {

    const todolistImage = {
        backgroundImage: `url(${todolist})`
    }

    const socialNetworkImage = {
        backgroundImage: `url(${socialNetwork})`
    }

    const landingPageImage = {
        backgroundImage: `url(${landingPage})`
    }


    const projects: Array <ProjectType> = [
        {
            id: 1,
            title: "Social network",
            description: "React",
            url: "https://dizziby.github.io/React-Social-Network-TS/",
            logo: socialNetworkImage
        },
        {
            id: 2,
            title: "Todolist",
            description: "React",
            url: "#",
            logo: todolistImage
        },
        {
            id: 3,
            title: "Landing page",
            description: "HTML",
            url: "#",
            logo: landingPageImage
        },
    ]
    return (
        <div className={styles.myProject}>
            <TitleBackground name={"MY PROJECT"} />
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <div className={styles.project}>
                    {projects.map(el => <Project key={el.id} title={el.title} description={el.description} url={el.url} style={el.logo}/>)}
                </div>
            </div>
        </div>
    );
};