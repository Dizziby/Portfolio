import React from 'react';
import styles from "./MySkills.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title";

type SkillType = {
    id: number
    title: string
    description: string
}

export const MySkills = () => {

    const skills: Array<SkillType> = [
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
        {
            id: 4,
            title: "TS",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            id: 5,
            title: "Storybook",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            id: 6,
            title: "Test",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
    ]

    return (
        <div className={styles.mySkills}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <Title name={"MY SKILLS"}/>
                <div className={styles.skills}>
                    {skills.map(el => <Skill key={el.id} title={el.title} description={el.description}/>)}
                </div>
            </div>
        </div>
    );
};