import React, { ReactElement, useEffect, useState } from "react"

import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {
    faBars,
    faEnvelope,
    faEye,
    faGear,
    faHouse,
    faUser,
    faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

import styles from "./Navbar.module.scss"

export const Navbar = (): ReactElement => {
    const [showLinkPage, setShowLinkPage] = useState<boolean>(true)

    const linksPageFinal = showLinkPage ? `${styles.linksPageLeft}` : `${styles.linksPageTop}`

    const onBlurHandler = (): void => {
        // const ms = 100
        // setTimeout(() => {
        //     setShowLinkPage(true)
        // }, ms)
    }

    const handleWindowResize = (): void => {
        setShowLinkPage(true)
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize)

        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    return (
        <div className={styles.navbar}>
            <div className={linksPageFinal}>
                <NavLink to="/">
                    {({ isActive }) => (
                        <FontAwesomeIcon
                            className={isActive ? `${styles.iconActive}` : `${styles.icon}`}
                            icon={faHouse}
                        />
                    )}
                </NavLink>
                <NavLink to="aboutme">
                    {({ isActive }) => (
                        <FontAwesomeIcon
                            className={isActive ? styles.iconActive : styles.icon}
                            icon={faUser}
                        />
                    )}
                </NavLink>
                <NavLink to="resume">
                    {({ isActive }) => (
                        <FontAwesomeIcon
                            className={isActive ? styles.iconActive : styles.icon}
                            icon={faGear}
                        />
                    )}
                </NavLink>
                <NavLink to="myproject">
                    {({ isActive }) => (
                        <FontAwesomeIcon
                            className={isActive ? styles.iconActive : styles.icon}
                            icon={faEnvelope}
                        />
                    )}
                </NavLink>
                <NavLink to="contacts">
                    {({ isActive }) => (
                        <FontAwesomeIcon
                            className={isActive ? styles.iconActive : styles.icon}
                            icon={faEye}
                        />
                    )}
                </NavLink>
            </div>
            <div className={styles.linksSocial}>
                <a href="https://www.facebook.com/dizzi.by" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                </a>
                <a href="https://github.com/Dizziby" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className={styles.icon} icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%B5%D0%BB-%D0%BA%D1%83%D0%BA%D0%B0%D0%B5%D0%B2-291430229/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
                </a>
            </div>
            <div
                className={styles.hamburgerMenu}
                onClick={() => setShowLinkPage(!showLinkPage)}
                tabIndex={0}
                onBlur={onBlurHandler}
            >
                {showLinkPage ? (
                    <FontAwesomeIcon className={styles.icon} icon={faBars} size="lg" />
                ) : (
                    <FontAwesomeIcon className={styles.icon} icon={faXmark} size="lg" />
                )}
            </div>
        </div>
    )
}
