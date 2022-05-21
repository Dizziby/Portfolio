import React from 'react';
import styles from "./MyProject.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/components/Title";

type ProjectType = {
    id: number
    title: string
    description: string
}

export const MyProject = () => {

    const projects: Array <ProjectType> = [
        {
            id: 1,
            title: "JS",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            id: 2,
            title: "HTML",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            id: 3,
            title: "CSS",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
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