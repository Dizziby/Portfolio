import React from 'react';
import styles from "./Contacts.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/Title/Title";
import {Subtitle} from "../common/components/Subtitle/Subtitle";
import {Contact} from "./Contact/Contact";
import {Form} from "./Form/Form";

type ContactType = {
    id: number
    name: string
    text: string
}

export const Contacts = () => {

    const contacts: Array<ContactType> = [
        {id: 1, name: "Phone", text: "+375 29 29169**"},
        {id: 2, name: "Email", text: "Dizzi_**@mail.ru"},
        {id: 3, name: "Address", text: "Vitebsk, Belarus"},
        {id: 4, name: "Freelance", text: "Available"},
    ]

    return (
        <div className={styles.contacts}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <Title name={"CONTACTS"}/>
                <div className={styles.content}>
                    <div className={styles.contactsBlock}>
                        <Subtitle firstWordTitle={"Get"} restWord={"in Touch"} className={styles.mediaSubtitle}/>
                        <div className={styles.contactsInfo}>
                            {contacts.map(el => <Contact key={el.id} name={el.name} text={el.text}/>)}
                        </div>
                    </div>
                    <div className={styles.formBlock}>
                        <Subtitle firstWordTitle={"Contact"} restWord={"Form"} className={styles.mediaSubtitle}/>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};