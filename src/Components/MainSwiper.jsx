import React from 'react'
import bgimg from '../IMG/MainBg.jpg'
import bgimg2 from '../IMG/Mainbg2.jpg'
import bgimg3 from '../IMG/Mainbg3.jpg'
import bgimg4 from '../IMG/Mainbg4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next'

export default function MainSwiper() {
    const { t } = useTranslation();
    const BgImg = [
        {
            id: 1,
            img: bgimg2,
            text: t('swiper.text3'),
            text2: t('swiper.title3'),
        },
        {
            id: 2,
            img: bgimg3,
            text: t('swiper.text4'),
            text2: t('swiper.title4'),
        },
        {
            id: 3,
            img: bgimg4,
            text: t('swiper.text2'),
            text2: t('swiper.title2'),
        },
        {
            id: 4,
            img: bgimg,
            text: t('swiper.text'),
            text2: t('swiper.title'),

        },
    ]
    return (
        <div className=' flex w-full'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => `
                            <span class="${className} custom-pagination">${index + 1}</span>
                        `,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {BgImg.map((item, index) => {
                    return (
                        <SwiperSlide  key={index}>
                            <div key={item.id} className='jura flex flex-col w-[100%] h-[100vh] relative bg-[#0000006e] z-2'>
                                <img src={item.img} alt="" className='w-[100%] h-[100%] object-center object-cover z-[-1]' />
                                <div className='absolute flex flex-col h-[100%] justify-center left-0 top-0 w-[100%] p-[0_13vw] max-sm:p-[0_10vw]'>
                                    <div className='p-[16px_5px_16px_25px]  pr-[30%] max-lg:pr-[0]'>
                                        <h1 className='text-[55px] font-[300] text-white leading-[1.2] max-lg:text-[45px] max-md:text-[35px] max-sm:text-[22px]'>{item.text}</h1>
                                        <p className='text-white text-left mt-[20px] text-[22px] mb-[30px]  max-md:text-[16px] max-md:mt-[10px] max-md:mb-[20px] max-sm:text-[14px]'>{item.text2}</p>
                                        <a href='#registor' className='text-white border-[1px] border-[#b50a3f] bg-[#b50a3f] rounded-[24px] text-[16px] p-[15px_25px] max-md:text-[14px] max-md:p-[10px_20px]'>{t("swiper.btn")}</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
