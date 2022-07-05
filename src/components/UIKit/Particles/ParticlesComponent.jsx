import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

// import main from "../../../img/main.jpg"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ParticlesComponent = () => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const particlesInit = async main => {
        console.log(main)
        await loadFull(main)
    }

    // const particlesLoaded = (container) => {
    //     console.log(container)
    // }

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                // loaded={particlesLoaded}
                height="10%"
                options={{
                    background: {
                        color: {
                            value: "",
                        },
                        // image: "url('https://oir.mobi/uploads/posts/2019-11/1574906657_gory-norvegii-25.jpg')",
                        // size: 'cover'
                    },

                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 50,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 120,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 3, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    )
}
