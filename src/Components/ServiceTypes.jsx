import React from "react";
import { useTranslation } from "react-i18next";
import { FaTruckMoving, FaFileContract, FaBolt, FaPhoneAlt, FaGlobe, FaBalanceScale } from "react-icons/fa";


export default function ServiceTypes() {
    const { t } = useTranslation();
    const services = [
        {
            icon: <FaTruckMoving className="text-4xl text-white" />,
            text: t('serviceTypes.text2'),
        },
        {
            icon: <FaFileContract className="text-4xl text-white" />,
            text: t('serviceTypes.text3'),
        },
        {
            icon: <FaBolt className="text-4xl text-white" />,
            text: t('serviceTypes.text4'),
        },
        {
            icon: <FaPhoneAlt className="text-4xl text-white" />,
            text: t('serviceTypes.text5'),
        },
        {
            icon: <FaGlobe className="text-4xl text-white" />,
            text: t('serviceTypes.text6'),
        },
        {
            icon: <FaBalanceScale className="text-4xl text-white" />,
            text: t('serviceTypes.text7'),
        },
    ];
    return (
        <div className="w-full h-full mt-[100px] jura">
            <div className=" bg-white p-[50px_15vw] max-lg:p-[50px_13vw] max-md:p-[50px_10vw] max-sm:p-[50px_7vw]">
                <h2 className="font-bold text-black text-center mb-[60px] max-sm:mb-[30px] text-[33px]">{t('serviceTypes.text')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-md:gap-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-black text-white p-6 rounded-[22px] shadow-lg flex items-center gap-4 max-sm:p-[17px] max-sm:rounded-[13px] hover:scale-105 duration-150"
                        >
                            <div>{service.icon}</div>
                            <p className="text-sm md:text-base">{service.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
