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
        <div id='serviceswiper' className="  w-full pt-[150px] max-md:pt-[50px]">
            <div className="w-full flex flex-col justify-center items-center ">
                <div className="flex w-full overflow-visible  justify-center items-center">
                    <Swiper
                        slidesPerView={2.5}
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
                        className="mySwiper min-h-[650px] max-md:min-h-[450px] flex justify-center items-center"
                        onSlideChange={handleSlideChange}
                        onInit={(swiper) => setActiveIndex(swiper.realIndex)}
                        breakpoints={{
                            425: {
                                spaceBetween: 10,
                            },
                            768: {

                                spaceBetween: 20,
                            },
                            1024: {
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {SwiperData.map((item, index) => {
                            const isActive = activeIndex === index;

                            const slideStyle = isActive
                                ? {
                                    transform: 'scale(1.2)',
                                    transition: 'transform 0.5s ease',
                                    zIndex: 2,
                                    backgroundColor: '#cd2350',
                                }
                                : {
                                    transform: 'scale(0.7)',
                                    transition: 'transform 0.5s ease',
                                    zIndex: 1,
                                    backgroundColor: '#fdeaea2e',
                                };

                            return (
                                <SwiperSlide
                                    key={index}
                                    className='rounded-[20px] max-md:rounded-[10px] min-h-[300px] max-md:min-h-[230px] '
                                    style={{
                                        ...slideStyle,
                                    }}
                                >
                                    <div className="w-full text-[#fff] flex flex-col justify-center items-center p-[20px] max-md:p-[10px] max-sm:p-[5px] relative  rounded-[20px] jura">
                                        <img
                                            src={item.img}
                                            alt=""
                                            className="h-[200px] object-contain mt-[-100px] max-md:h-[100px] max-md:mt-[-50px] rounded-[20px] max-md:rounded-[10px] "
                                        />
                                        <h1 className="text-[1.5rem] font-[700] mt-[20px] text-center max-lg:text-[1.2rem] max-lg:leading-[1.2] max-md:text-[1rem]">
                                            {item.text}
                                        </h1>
                                        <p className="max-h-[90px] font-[400] overflow-hidden text-center mb-[1rem] mt-[0.5rem] max-md:text-[0.8rem] max-md:leading-[1.2]">
                                            {item.title}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                <div className="flex justify-evenly items-center gap-[20px] mt-[20px] w-full">
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
