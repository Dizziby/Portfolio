import React from 'react';
import styles from "./Resume.module.scss"
import stylesContainer from "../../common/styles/Container.module.scss"
import {SkillsBlock} from "./SkillsBlock/SkillsBlock";
import {MyBlock} from "./MyBlock/MyBlock";
import {Title} from "../UIKit/Title/Title";
import {TitleBackground} from "../UIKit/TitleBackground/TitleBackground";

export type PlaceWorkStudyType = {
    name: string
    date: string
    description: string
}

type MyBlockType = {
    id: number
    firstWordTitle: string
    restWord: string
    placeWorkStudy: Array<PlaceWorkStudyType>

}

export type SkillType = {
    nameSkill: string,
    percentage: number
}

type SkillsBlockType = {
    id: number
    firstWordTitle: string
    restWord: string
    skills: Array<SkillType>
}


export const Resume = () => {

        const myBlock: Array<MyBlockType> = [
            {
                id: 1,
                firstWordTitle: "My",
                restWord: "Experience",
                placeWorkStudy: [
                    {
                        name: "Web Development",
                        date: "2013-Present | Facebook Inc.",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    },
                    {
                        name: "Web Development",
                        date: "2013-Present | Facebook Inc.",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    },
                ]

            },
            {
                id: 2,
                firstWordTitle: "My",
                restWord: "Education",
                placeWorkStudy: [
                    {
                        name: "Web Development",
                        date: "2010-2015 | PSU",
                        description: "Engineer"
                    },
                    {
                        name: "Web Development",
                        date: "2022-Present | IT-INCUBATOR.",
                        description: "Developer "
                    },

                ]
            }
        ]

        const skillsBlock: Array<SkillsBlockType> = [
            {
                id: 3,
                firstWordTitle: "Personal",
                restWord: "Skills",
                skills: [
                    {
                        nameSkill: "Communication",
                        percentage: 90
                    },
                    {
                        nameSkill: "Team Work",
                        percentage: 90
                    },
                    {
                        nameSkill: "Leadership",
                        percentage: 70
                    },
                    {
                        nameSkill: "Language",
                        percentage: 60
                    },

                ]


            },
            {
                id: 4,
                firstWordTitle: "Professional",
                restWord: "Skills",
                skills: [
                    {
                        nameSkill: "React / Redux",
                        percentage: 90
                    },
                    {
                        nameSkill: "HTML / CSS / JS / TS",
                        percentage: 80
                    },
                    {
                        nameSkill: "Storybook",
                        percentage: 60
                    },
                    {
                        nameSkill: "Test",
                        percentage: 50
                    },
                ]
            }
        ]

        return (
            <div className={styles.resume}>
                <div className={`${stylesContainer.container} ${styles.container}`}>
                    <TitleBackground name={"RESUME"} />
                    {/*<Title name={"RESUME"}/>*/}
                    <div className={styles.content}>
                        {myBlock.map(el => <MyBlock firstWordTitle={el.firstWordTitle} restWord={el.restWord}
                                                    placeWorkStudy={el.placeWorkStudy}/>)}
                        {skillsBlock.map(el => <SkillsBlock firstWordTitle={el.firstWordTitle} restWord={el.restWord} skills={el.skills}/>)}
                    </div>
                </div>
            </div>
        );
    }
;