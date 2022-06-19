import React from 'react';
import styles from "./MyProject.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import {Title} from "../common/components/Title/Title";
import {Project} from "./Project/Project";

type ProjectType = {
    id: number
    title: string
    description: string
}

export const MyProject = () => {

    const projects: Array <ProjectType> = [
        {
            id: 1,
            title: "Social network",
            description: "React"
        },
        {
            id: 2,
            title: "Todolist",
            description: "React"
        },
        {
            id: 3,
            title: "Landing page",
            description: "HTML"
        },
    ]



    return (
        <div className={styles.myProject}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <Title name={"MY PROJECT"} />
                <div className={styles.project}>
                    {projects.map(el => <Project key={el.id} title={el.title} description={el.description} />)}
                </div>
            </div>
        </div>
    );
};