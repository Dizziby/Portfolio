import React from 'react';
import styles from "./MyBlock.module.scss"
import {PlaceWorkStudyType} from "../Resume";
import {Subtitle} from "../../UIKit/Subtitle/Subtitle";

type MyBlockPropsType = {
    firstWordTitle: string
    restWord: string
    placeWorkStudy: Array<PlaceWorkStudyType>
}

export const MyBlock: React.FC<MyBlockPropsType> = (props) => {

    return (
        <div className={styles.myBlock}>
            <Subtitle firstWordTitle={props.firstWordTitle} restWord={props.restWord} className={styles.mediaSubtitle}/>
            <div className={styles.block}>
                {props.placeWorkStudy.map((el, index) => {
                        return  <div key={index} className={styles.blockItem}>
                            <div className={styles.name}>{el.name}</div>
                            <div className={styles.date}>{el.date}</div>
                            <div className={styles.description}>{el.description}</div>
                        </div>
                    }
                )}
            </div>
        </div>
    );
};