import React from 'react';
import styles from "./Contacts.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Contact} from "./Contact/Contact";
import {Title} from "../common/components/Title/Title";
import {useForm} from "react-hook-form";
import {Subtitle} from "../common/components/Subtitle/Subtitle";

type ContactType = {
    id: number
    name: string
    text: string
}

type InputsType = {
    name: string,
    email: string,
    message: string
};

export const Contacts = () => {

    const contacts: Array<ContactType> = [
        {id: 1, name: "Phone", text: "+375 29 29169**"},
        {id: 2, name: "Email", text: "Dizzi_**@mail.ru"},
        {id: 3, name: "Address", text: "Vitebsk, Belarus"},
        {id: 4, name: "Freelance", text: "Available"},
    ]

    const {register, handleSubmit, formState: {errors}} = useForm<InputsType>();

    const onSubmit = () => {}

    return (
        <div className={styles.contacts}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <Title name={"CONTACTS"}/>
                <div className={styles.content}>
                    <Subtitle firstWordTitle={"Get"} restWord={"in Touch"} />
                    <div className={styles.contactsInfo}>
                        {contacts.map(el => <Contact key={el.id} name={el.name} text={el.text}/>)}
                    </div>
                    <Subtitle firstWordTitle={"Contact"} restWord={"Form"} />
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.inputs}>
                            <input placeholder={"Your Name"} type="text" defaultValue="" {...register("name", {required: true})}/>
                            {/*{errors.name ? <div className={styles.error}>This field is required</div> : <div> </div>}*/}
                            <input placeholder={"Your Email"} type="email"  defaultValue="" {...register("email", {required: true, pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/})}/>
                            {/*{errors.email ? <div className={styles.error}>This field is required</div> : <div> </div>}*/}
                        </div>
                        <textarea placeholder={"Message"} defaultValue=""  {...register("message", {required: true})}/>
                        {/*{errors.message ? <div className={styles.error}>This field is required</div> : <div> </div>}*/}
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};