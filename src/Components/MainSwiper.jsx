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

export default function MainSwiper() {
    const BgImg = [
        {
            id: 1,
            img: bgimg,
            text: 'HomeKit bilan energiyani tejash:',
            text2: "Aqlli uy mahsulotlari bilan siz energiya sarfini isrof qilmasligiga ishonch hosil qilishingiz mumkin. Mashinalar, qurilmalar va jihozlar aqlli uy mahsulotiga ega bo'lganda, ulardan foydalanishdan so'ng darhol boshqarilishi va o'chirilishi mumkin.",

        },
        {
            id: 2,
            img: bgimg2,
            text: 'HomeKit bilan uyingizni boshqaring:',
            text2: "Agar siz isitish tizimining haroratini oshirmoqchi bo'lsangiz yoki konditsioneringizdagi haroratni pasaytirmoqchi bo'lsangiz yoki uyingizdan uzoqda suv isitgichni yoqmoqchi bo'lsangiz yoki yotoqda yotganingizda hamma narsani o'chirmoqchi bo'lsangiz, ularni HomeKit orqali mobil telefoningizga bir marta bosish bilan bajaring."
        },
        {
            id: 3,
            img: bgimg3,
            text: 'HomeKit texnologiyalaridan foydalanish qulayligi:',
            text2: " Agar siz texnologiyani yaxshi bilmaydigan odam bo'lsangiz ham, qo'llanmalarni kuzatib, bu narsalar qanday ishlashini tushunishingiz mumkin. Aqlli uy texnologiyalari yordamida siz uyda bo'lmasangiz ham, 24/7 uy bilan bog'langaningizni his qilishingiz mumkin."
        },
        {
            id: 4,
            img: bgimg4,
            text: "Eshiklarni qulflash va ochish HomeKit bilan osonroq.",
            text2: "Xavfsiz uylar har qanday uyning eng muhim jihati hisoblanadi. Uyingiz uchun qancha qulfdan foydalansangiz ham, uyingizga o'g'rilar va o'g'rilar kirishi xavfi doimo mavjud. HomeKit aqlli texnologiyalari bilan uyingizni aqlli himoya qiling."
        }
    ]
    return (
        <>

            <div className='h-[100vh] flex justify-center items-center'>
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
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <div>
                        {BgImg.map((item) => {
                            return (
                                <SwiperSlide>
                                    <div key={item.id} className='flex flex-col items-center justify-center'>
                                        <img src={item.img} alt="" className='w-[100%] h-[100%] object-cover' />
                                        <h1 className='text-2xl font-bold text-white'>{item.text}</h1>
                                        <p className='text-white text-center'>{item.text2}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </div>
                </Swiper>
            </div>

        </>
    )
}
