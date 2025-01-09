import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "../IMG/logoHomekit.png";

export default function Advantage() {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end start"], // Trigger the animation when the element hits the center of the viewport
    });

    const scrollVelocity = useVelocity(scrollYProgress);

    // Adjust skew and x transformations based on scroll velocity
    const skewXRaw = useTransform(
        scrollVelocity,
        [-0.5, 0.5],
        ["-5deg", "5deg"] // Apply a more noticeable skew
    );
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

    const xFirstRaw = useTransform(scrollYProgress, [0, 1], [-400, 400]);
    const xFirst = useSpring(xFirstRaw, { mass: 3, stiffness: 400, damping: 50 });

    const xSecondRaw = useTransform(scrollYProgress, [0, 1], [400, -400]);
    const xSecond = useSpring(xSecondRaw, { mass: 3, stiffness: 400, damping: 50 });

    const { t } = useTranslation();

    return (
        <section ref={targetRef} className="h-[100vh] max-md:h-[60vh] max-sm:h-[45vh] text-[hsla(0,0%,100%,.165)] mt-[200px] max-md:mt-[100px]">
            <div className="sticky top-10 flex h-screen items-center overflow flex-col overflow-hidden">
                <motion.p
                    style={{ skewX, x: xFirst }}
                    className="origin-bottom-left whitespace-nowrap text-[75px] max-md:text-[35px]  font-black uppercase"
                >
                    {t("advantage.text")}
                </motion.p>
                <div className="flex justify-center items-center w-full">
                    <img src={logo} alt="" className="w-[250px] h-[250px] max-md:w-[160px] max-md:h-[160px] mt-[100px] mb-[100px] max-md:mt-[50px] max-md:mb-[50px]" />
                </div>
                <motion.p
                    style={{ skewX, x: xSecond }}
                    className="origin-bottom-right whitespace-nowrap text-[75px] max-md:text-[35px]  font-black uppercase"
                >
                    {t("advantage.text")}
                </motion.p>
            </div>
        </section>
    );
}
