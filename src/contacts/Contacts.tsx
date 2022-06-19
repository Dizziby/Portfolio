import React from 'react';
import styles from "./Contacts.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/Title/Title";
import {Subtitle} from "../common/components/Subtitle/Subtitle";
import {Contact} from "./Contact/Contact";
import {Form} from "./Form/Form";
import {faAt, faLocationDot, faPenToSquare, faPhone, faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                <Title name={"CONTACTS"}/>
                <div className={styles.content}>
                    <div className={styles.contactsBlock}>
                        <Subtitle firstWordTitle={"Get"} restWord={"in Touch"} className={styles.mediaSubtitle}/>
                        <div className={styles.contactsInfo}>
                            {contacts.map(el => <Contact key={el.id} name={el.name} text={el.text} icon={el.icon}/>)}
                        </div>
                    </div>
                    <div className={styles.formBlock}>
                        <Subtitle firstWordTitle={"Contact"} restWord={"Form"} className={styles.mediaSubtitle}/>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    );
};