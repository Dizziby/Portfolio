import React from 'react';
import styles from "./SkillsBlock.module.scss"
import {SkillType} from "../Resume";
import {Subtitle} from "../../UIKit/Subtitle/Subtitle";

type ResumeBlockPropsType = {
    firstWordTitle: string
    restWord: string
    skills: Array<SkillType>
}

export const SkillsBlock: React.FC<ResumeBlockPropsType> = (props) => {
    return (
        <div className={styles.skillsBlock}>
            <Subtitle firstWordTitle={props.firstWordTitle} restWord={props.restWord} className={styles.mediaSubtitle}/>

            <div className={styles.block}>
                {props.skills.map((el, index) => {
                    return <div key={index}>
                        <div className={styles.name}>{el.nameSkill}</div>
                        <div className={styles.progress}>
                            <div className={styles.percentage} style={{width: `${el.percentage}%`}}>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};
