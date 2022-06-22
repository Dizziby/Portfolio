import Particles from "react-tsparticles";
import {loadFull} from "tsparticles"; // loads tsparticles
import {useCallback, useMemo} from "react";


export const ParticlesComponent2 = (props) => {

    const options = useMemo(() => {

        return {
            background: {
                color: "", // this sets a background color for the canvas
            },
            fullScreen: {
                enable: false, // enabling this will make the canvas fill the entire screen, it's enabled by default
                zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: false, // enables the click event
                        mode: "push", // adds the particles on click
                    },
                    onHover: {
                        enable: false, // enables the hover event
                        mode: "repulse", // make the particles run away from the cursor
                    },
                },
                modes: {
                    push: {
                        quantity: 10, // number of particles to add on click
                    },
                    repulse: {
                        distance: 100, // distance of the particles from the cursor
                    },
                },
            },
            particles: {
                links: {
                    enable: true, // enabling this will make particles linked together
                    distance: 200, // maximum distance for linking the particles
                },
                move: {
                    enable: true, // enabling this will make particles move in the canvas
                    speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
                },
                size: {
                    value: { min: 1, max: 3 }, // let's randomize the particles size a bit
                },
            },
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadFull(engine);
    }, []);

    return <Particles id={props.id} init={particlesInit} options={options}/>;
};