import React, { ReactElement } from "react"

import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useForm } from "react-hook-form"

import styles from "./Form.module.scss"

type InputsType = {
    name: string
    email: string
    message: string
}

export const Form = (): ReactElement => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<InputsType>()

    const onSubmit = (): void => {}

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formInputs}>
                <input
                    className={styles.formInput}
                    placeholder="Full Name"
                    type="text"
                    defaultValue=""
                    {...register("name", { required: true })}
                />
                {/* {errors.name ? <div className={styles.error}>This field is required</div> : <div> </div>} */}
                <input
                    className={styles.formInput}
                    placeholder="Email Address"
                    type="email"
                    defaultValue=""
                    {...register("email", {
                        required: true,
                        pattern:
                            /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                    })}
                />
                {/* {errors.email ? <div className={styles.error}>This field is required</div> : <div> </div>} */}
            </div>
            <div>
                <textarea
                    className={styles.formTextarea}
                    placeholder="Your Message"
                    defaultValue=""
                    {...register("message", { required: true })}
                />
                {/* {errors.message ? <div className={styles.error}>This field is required</div> : <div> </div>} */}
            </div>
            <div>
                <button type="button" className={styles.formButton}>
                    Send Messagge{" "}
                    <FontAwesomeIcon className={styles.icon} icon={faArrowRightLong} />
                </button>
            </div>
        </form>
    )
}
