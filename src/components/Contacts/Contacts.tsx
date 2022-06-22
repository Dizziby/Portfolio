import React from 'react';
import styles from "./Contacts.module.scss"
import stylesContainer from "../../common/styles/Container.module.scss";
import {Contact} from "./Contact/Contact";
import {Form} from "./Form/Form";
import {faAt, faLocationDot, faPhone, faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Subtitle} from "../UIKit/Subtitle/Subtitle";
import {Title} from "../UIKit/Title/Title";
import {TitleBackground} from "../UIKit/TitleBackground/TitleBackground";

type ContactType = {
    id: number
    name: string
    text: string
    icon?: any
}

export const Contacts = () => {

    const phone = <FontAwesomeIcon className={styles.iconButton} icon={faPhone} size={"2x"}/>
    const email = <FontAwesomeIcon className={styles.iconButton} icon={faAt} size={"2x"}/>
    const address = <FontAwesomeIcon className={styles.iconButton} icon={faLocationDot} size={"2x"}/>
    const freelance = <FontAwesomeIcon className={styles.iconButton} icon={faSquareCheck} size={"2x"}/>


    const contacts: Array<ContactType> = [
        {id: 1, name: "Phone", text: "+375 29 29169**", icon: phone},
        {id: 2, name: "Email", text: "Dizzi_**@mail.ru", icon: email},
        {id: 3, name: "Address", text: "Vitebsk, Belarus", icon: address},
        {id: 4, name: "Freelance", text: "Available", icon: freelance},
    ]


    return (
        <div className={styles.contacts}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                {/*<Title name={"CONTACTS"}/>*/}
                <TitleBackground name={"CONTACTS"} />
                <div className={styles.content}>
                    <div className={styles.contactsBlock}>
                        <Subtitle firstWordTitle={"Get"} restWord={"in Touch"} className={styles.mediaSubtitle}/>
                        <div className={styles.contactsInfo}>
                            {contacts.map(el => <Contact key={el.id} name={el.name} text={el.text} icon={el.icon}/>)}
                        </div>
                    </div>
                    <div>
                        <Subtitle firstWordTitle={"Contact"} restWord={"Form"} className={styles.mediaSubtitle}/>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    );
};