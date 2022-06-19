import React, {useEffect, useState} from 'react';
import styles from "./Theme.module.scss"
import {faDroplet} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type ThemeType = "green" | "orange" | "red" | "violet" | "blue" | "pink"

type ColorType = {
    color: ThemeType,
    hex: string
}

type ColorsType = Array<ColorType>

export const Theme = () => {

    const colors: ColorsType = [
        {
            color: "green",
            hex: "#5ac24e"
        },
        {
            color: "orange",
            hex: "#f5a640"
        },
        {
            color: "red",
            hex: "#ee534f"
        },
        {
            color: "violet",
            hex: "#bb68c8"
        },
        {
            color: "blue",
            hex: "#65b4f3"
        },
        {
            color: "pink",
            hex: "#ee6192"
        },
    ]


    const [theme, setTheme] = useState<ThemeType>("green")
    const [show, setSnow] = useState<boolean>(false)

    const showHideMenu = () => {
        setSnow(!show)
    }
    const changeTheme = (theme: ThemeType) => {
        setTheme(theme)
        setSnow(!show)
    }


    useEffect(() => {
            const fontColor = `var(--font-color-${theme})`
            document.body.style.setProperty("--font-color", fontColor)
        }
        , [theme])

    const classNameShow = show ? `${styles.menu} ${styles.menuShow}` : `${styles.menu} ${styles.menuHide}`

    return (
        <div className={styles.theme}>
            <span className={styles.themeButton} onClick={showHideMenu}><FontAwesomeIcon onBlur={showHideMenu}
                className={styles.iconButton}
                icon={faDroplet} size={"2x"}/>
            </span>
            <span className={classNameShow}>
                {colors.map(el => {
                    return <span className={styles.item} onClick={() => changeTheme(el.color)}>
                    <FontAwesomeIcon className={styles.iconButton}
                                     icon={faDroplet} size={"2x"} style={{color: el.hex}}/>
                </span>
                })}
            </span>
        </div>
    );
};
