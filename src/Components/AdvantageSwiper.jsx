import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { CiShoppingTag } from "react-icons/ci";
import { GoPlusCircle } from "react-icons/go";
import { PiSealCheckFill } from "react-icons/pi";

const AdvantageSwiper = () => {
    return (
        <div className="">
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const { t } = useTranslation();
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    const cards = [
        {
            url: "/imgs/abstract/1.jpg",
            title: t("advantageSwiper.text2"),
            title2: t("advantageSwiper.text3"),
            title3: t("advantageSwiper.text4"),
            id: 1,
        },
        {
            url: "/imgs/abstract/2.jpg",
            title: t("advantageSwiper.text5"),
            title2: t("advantageSwiper.text6"),
            title3: t("advantageSwiper.text7"),
            id: 2,
        },
        {
            url: "/imgs/abstract/3.jpg",
            title: t("advantageSwiper.text8"),
            title2: t("advantageSwiper.text9"),
            title3: t("advantageSwiper.text10"),
            id: 3,
        },
    ];

    return (
        <section id="advantageswiper" ref={targetRef} className="relative h-[300vh] ">
            <div className="sticky top-0 flex h-screen items-center justify-between overflow-hidden ">
                <motion.div style={{ x }} className="flex gap-[200px] mx-[100px] max-md:mx-[50px] max-sm:mx-[20px]">
                    {cards.map((card) => {
                        return (
                            <div
                                key={card.id}
                                className="group relative h-[700px] max-lg:h-[580px] max-md:h-[480px] max-sm:h-[380px] w-[80vw] max-lg:w-[75vw] max-md:w-[83vw] overflow-hidden bg-[#fdeaea] rounded-[45px]"
                            >
                                <div
                                    style={{
                                        backgroundImage: `url(${card.url})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110  "
                                ></div>
                                <div className="absolute inset-0 z-10 grid place-content-center jura p-[2vw_4vw]">
                                    <h1 className="text-[2.5rem] text-center font-[500] leading-[1.2] mb-[1.5rem]">{t("advantageSwiper.text")}</h1>
                                    <div className="shadow">
                                        <PiSealCheckFill className="text-[43px] min-w-[43px] min-h-[43px] max-md:min-w-[35px] max-md:min-h-[35px] max-md:text-[35px] max-sm:min-w-[25px] max-sm:h-[25px] max-sm:text-[25px]  mr-[11px]"/>
                                        <p className="max-sm:text-[12px] max-sm:leading-[1.2]">{card.title}</p>
                                    </div>
                                    <div className="shadow">
                                        <GoPlusCircle className="text-[43px] min-w-[43px] min-h-[43px] max-md:min-w-[35px] max-md:min-h-[35px] max-md:text-[35px] max-sm:min-w-[25px] max-sm:h-[25px] max-sm:text-[25px]  mr-[11px]"/>
                                        <p className="max-sm:text-[12px] max-sm:leading-[1.2]">{card.title2}</p>
                                    </div>
                                    <div className="shadow">
                                        <CiShoppingTag className="text-[43px] min-w-[43px] min-h-[43px] max-md:min-w-[35px] max-md:min-h-[35px] max-md:text-[35px] max-sm:min-w-[25px] max-sm:h-[25px] max-sm:text-[25px]  mr-[11px]"/>
                                        <p className="max-sm:text-[12px] max-sm:leading-[1.2]">{card.title3}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default AdvantageSwiper;