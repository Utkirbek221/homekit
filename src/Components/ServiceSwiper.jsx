import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import imgSwiper from '../IMG/SwiperImg.png';
import imgSwiper2 from '../IMG/SwiperImg2.png';
import imgSwiper3 from '../IMG/SwiperImg3.png';
import imgSwiper4 from '../IMG/SwiperImg4.png';
import imgSwiper5 from '../IMG/SwiperImg5.png';
import imgSwiper6 from '../IMG/SwiperImg6.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

export default function ServiceSwiper() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const SwiperData = [
        { id: 1, img: imgSwiper, text: t('serviceSwiper.text'), title: t('serviceSwiper.title') },
        { id: 2, img: imgSwiper2, text: t('serviceSwiper.text2'), title: t('serviceSwiper.title2') },
        { id: 3, img: imgSwiper3, text: t('serviceSwiper.text3'), title: t('serviceSwiper.title3') },
        { id: 4, img: imgSwiper4, text: t('serviceSwiper.text4'), title: t('serviceSwiper.title4') },
        { id: 5, img: imgSwiper5, text: t('serviceSwiper.text5'), title: t('serviceSwiper.title5') },
        { id: 6, img: imgSwiper6, text: t('serviceSwiper.text6'), title: t('serviceSwiper.title6') },
    ];

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className="p-[150px_0px_180px] w-full h-full ">
            <div className="w-full h-full flex flex-col justify-center items-center ">
                <div className="flex w-full h-[500px] overflow-visible  justify-center items-center">
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".prevarrow",
                            nextEl: ".nextarrow",
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                        onSlideChange={handleSlideChange}
                        onInit={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {SwiperData.map((item, index) => {
                            const isActive = activeIndex === index;
                            const slideStyle = isActive
                                ? {
                                    transform: 'scale(1.2)',
                                    transition: 'transform 0.5s ease',
                                    height: 'auto', // Allow height to adjust based on content
                                    zIndex: 2,
                                    backgroundColor: '#cd2350',
                                    transformOrigin: 'center top', // Ensure scaling doesn't cut off the top/bottom
                                }
                                : {
                                    transform: 'scale(0.7)',
                                    transition: 'transform 0.5s ease',
                                    height: 'auto',
                                    zIndex: 1,
                                    backgroundColor: '#fdeaea2e',
                                };

                            return (
                                <SwiperSlide
                                    key={index}
                                    style={{
                                        ...slideStyle,
                                        borderRadius: '20px',
                                        overflow: 'visible',
                                    }}
                                >
                                    <div className="w-full text-[#fff] flex flex-col justify-center items-center p-[20px] relative overflow-visible rounded-[20px] jura">
                                        <img
                                            src={item.img}
                                            alt=""
                                            className="h-[200px] object-contain mt-[-100px]"
                                            style={{
                                                overflow: 'visible',
                                            }}
                                        />
                                        <h1 className="text-[1.5rem] font-[700] mt-[20px]">
                                            {item.text}
                                        </h1>
                                        <p className="max-h-[92px] font-[400] overflow-hidden text-center mb-[1rem] mt-[0.5rem]">
                                            {item.title}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                <div className="flex justify-evenly items-center gap-[20px] mt-[120px] w-full">
                    <button className="bg-[#8c8c8c] rounded-[50%] shadow-[0_0_0_8px_#8c8c8c4b] h-[35px] w-[35px] flex justify-center items-center text-[#fff] text-[25px] prevarrow">
                        <IoIosArrowBack />
                    </button>
                    <button className="bg-[#8c8c8c] rounded-[50%] shadow-[0_0_0_8px_#8c8c8c4b] h-[35px] w-[35px] flex justify-center items-center text-[#fff] text-[25px] nextarrow">
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div>
    );
}
