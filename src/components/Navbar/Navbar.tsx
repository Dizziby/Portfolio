import React, {useEffect, useState} from 'react';
import styles from "./Navbar.module.scss"
import {faBars, faEnvelope, faEye, faGear, faHouse, faUser, faXmark} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Navbar = () => {

    const [showLinkPage, setShowLinkPage] = useState<boolean>(true)

    const linksPageFinal = showLinkPage ? `${styles.linksPageLeft}` : `${styles.linksPageTop}`

    const onBlurHandler = () => {
        setTimeout(() => {setShowLinkPage(true)}, 100)
    }

    const handleWindowResize = () => {
        setShowLinkPage(true)
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <div className={styles.navbar}>
            <div className={linksPageFinal}>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faHouse}/></a>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faUser}/></a>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faGear}/></a>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faEnvelope}/></a>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faEye}/></a>
            </div>
            <div className={styles.linksSocial}>
                <a href="https://www.facebook.com/dizzi.by" target="_blank"><FontAwesomeIcon className={styles.icon}
                                                                                             icon={faFacebook}/></a>
                <a href="https://github.com/Dizziby" target="_blank"><FontAwesomeIcon className={styles.icon}
                                                                                      icon={faGithub}/></a>
                <a href="https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%B5%D0%BB-%D0%BA%D1%83%D0%BA%D0%B0%D0%B5%D0%B2-291430229/"
                   target="_blank"><FontAwesomeIcon className={styles.icon} icon={faLinkedin}/></a>
            </div>
            <div className={styles.hamburgerMenu} onClick={() => setShowLinkPage(!showLinkPage)} tabIndex={0} onBlur={onBlurHandler}>
                {showLinkPage
                    ? <FontAwesomeIcon className={styles.icon} icon={faBars} size={"lg"}/>
                    : <FontAwesomeIcon className={styles.icon} icon={faXmark} size={"lg"}/>
                }
            </div>
        </div>
    );
};