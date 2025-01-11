import React from 'react'
import { useTranslation } from 'react-i18next'
import ServiceImg from '../IMG/Service.jpg'
import ServiceImg2 from '../IMG/Service2.jpeg'
import ServiceImg3 from '../IMG/Service3.jpg'
import ServiceImg4 from '../IMG/Service4.jpg'
import ServiceImg5 from '../IMG/Service5.jpg'
import logo from '../IMG/logoHomekit.png'
import { MdLocationOn } from 'react-icons/md'
import AOS from 'aos';
import { useEffect } from 'react';

export default function Service() {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
            <div id='service' className=' p-[50px_15vw] max-lg:p-[50px_13vw] max-md:p-[50px_10vw] max-sm:p-[50px_7vw] flex flex-col items-center justify-center jura text-[#fff] h-full w-full'>
                <h1 className='text-center text-[55px] font-[600] max-lg:text-[45px] max-md:text-[30px] max-sm:text-[23px]'>{t('services.text')}</h1>
                <p className='text-[20px] font-[500] mt-[20px] text-center mb-[1rem] max-lg:text-[18px] max-md:text-[16px] max-md:mt-[10px] max-sm:text-[13px]'>{t('services.title')}</p>
                <div className='mt-[3vw] grid grid-cols-1 w-full gap-[40px] max-lg:gap-[20px] max-sm:gap-[14px]'>
                    <div className='bg-[#d6d6d639] w-full p-[30px] max-lg:p-[10px] max-lg:rounded-[12px] max-sm:rounded-[8px] rounded-[10px] flex items-center justify-center'>
                        <div className='h-[400px] max-lg:h-[270px] max-md:h-[220px] max-sm:h-[130px] w-[50%] flex items-center justify-center'>
                            <img src={ServiceImg} alt="" className='rounded-[14px] max-md:rounded-[10px] h-[70%] w-[80%] max-sm:rounded-[7px] max-sm:h-[95%] max-sm:w-[95%] object-cover' />
                        </div>
                        <div className=' w-[50%] p-[22px] max-sm:p-[5px]'>
                            <h1 className='font-[700] text-[2.5rem] max-lg:text-[28px] max-sm:text-[15px] max-sm:leading-[.9] text-left leading-[1.2]'>{t('services.textImg')}</h1>
                            <p className='font-[500] mt-[20px] mb-[20px] max-lg:text-[14px] max-lg:mt-[10px] max-sm:text-[11px] max-sm:leading-[12px] max-lg:mb-[10px] max-sm:mb-[0px]'>{t('services.titleImg')}</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 w-full gap-[40px] max-lg:gap-[20px] max-sm:gap-[14px]'>
                        <div className='bg-[#d6d6d639] w-full p-[30px] max-lg:p-[20px] max-sm:p-[10px] max-lg:rounded-[12px] max-sm:rounded-[8px] rounded-[10px] flex flex-col items-center justify-center'>
                            <div className='h-[150px] max-lg:h-[130px]  flex items-center justify-center w-full'>
                                <img src={ServiceImg2} alt="" className='rounded-[14px]  object-cover h-full w-full' />
                            </div>
                            <div className='pt-[20px] max-sm:pt-[5px]'>
                                <h1 className='font-[700] text-[2.5rem] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[15px] max-sm:leading-[.9] text-left leading-[1.2]'>{t('services.textImg2')}</h1>
                                <p className='font-[500] mt-[20px] max-sm:mt-[5px] mb-[20px] max-lg:text-[14px] max-lg:mt-[10px] max-sm:text-[11px] max-sm:leading-[12px] max-lg:mb-[10px] max-sm:mb-[0px]'>{t('services.titleImg2')}</p>
                            </div>
                        </div>
                        <div className='bg-[#d6d6d639] w-full p-[30px] max-lg:p-[20px] max-sm:p-[10px] max-lg:rounded-[12px] max-sm:rounded-[8px] rounded-[10px] flex flex-col items-center justify-center'>
                            <div className='h-[150px] max-lg:h-[130px]  flex items-center justify-center w-full'>
                                <img src={ServiceImg3} alt="" className='rounded-[14px]  object-cover h-full w-full' />
                            </div>
                            <div className='pt-[20px] max-sm:pt-[5px]'>
                                <h1 className='font-[700] text-[2.5rem] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[15px] max-sm:leading-[.9] text-left leading-[1.2]'>{t('services.textImg3')}</h1>
                                <p className='font-[500] mt-[20px] max-sm:mt-[5px] mb-[20px] max-lg:text-[14px] max-lg:mt-[10px] max-sm:text-[11px] max-sm:leading-[12px] max-lg:mb-[10px] max-sm:mb-[0px]'>{t('services.titleImg3')}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#d6d6d639] w-full p-[30px] max-lg:p-[10px] max-lg:rounded-[12px] max-sm:rounded-[8px] rounded-[10px] flex items-center justify-center'>
                        <div className='h-[400px] max-lg:h-[270px] max-md:h-[220px] max-sm:h-[130px] w-[50%] flex items-center justify-center'>
                            <img src={ServiceImg4} alt="" className='rounded-[14px] max-md:rounded-[10px] h-[70%] w max-sm:rounded-[7px]-[80%] max-95:h-[70%] max-sm:w-[95%] object-cover' />
                        </div>
                        <div className=' w-[50%] p-[22px] max-sm:p-[5px]'>
                            <h1 className='font-[700] text-[2.5rem] max-lg:text-[28px] max-sm:text-[15px] max-sm:leading-[.9] text-left leading-[1.2]'>{t('services.textImg4')}</h1>
                            <p className='font-[500] mt-[20px] mb-[20px] max-lg:text-[14px] max-lg:mt-[10px] max-sm:text-[11px] max-sm:leading-[12px] max-lg:mb-[10px] max-sm:mb-[0px]'>{t('services.titleImg4')}</p>
                        </div>
                    </div>
                    <div className='bg-[#d6d6d639] w-full p-[30px] max-lg:p-[10px] max-lg:rounded-[12px] max-sm:rounded-[8px] rounded-[10px] flex items-center justify-center'>
                        <div className='h-[400px] max-lg:h-[270px] max-md:h-[220px] max-sm:h-[130px] w-[50%] flex items-center justify-center'>
                            <img src={ServiceImg5} alt="" className='rounded-[14px] max-md:rounded-[10px] h-[70%] w max-sm:rounded-[7px]-[80%] max-95:h-[70%] max-sm:w-[95%] object-cover' />
                        </div>
                        <div className=' w-[50%] p-[22px] max-sm:p-[5px] overflow-hidden'>
                            <h1 className='font-[700] text-[2.5rem] max-lg:text-[28px] max-sm:text-[15px] max-sm:leading-[.9] text-left leading-[1.2]'>{t('services.textImg5')}</h1>
                            <p className='font-[500] mt-[20px] mb-[20px] max-lg:text-[14px] max-lg:mt-[10px] max-sm:text-[11px] max-sm:leading-[12px] max-lg:mb-[10px] max-sm:mb-[0px]'>{t('services.titleImg5')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='aboute' className='jura flex  items-center justify-center h-full w-full overflow-hidden'>
                <div className='pb-[200px] max-md:pb-[150px] flex max-sm:flex-col max-sm:flex-wrap items-center justify-center p-[50px_15vw] max-lg:p-[50px_13vw] max-md:p-[50px_10vw] max-sm:p-[50px_7vw] w-full h-full'>
                    <div className='relative p-[150px_5vw_0] max-lg:p-[50px_2vw_0] max-sm:p-[0]'>
                        <div data-aos="fade-right"
                            data-aos-easing="ease-in-sine"   className='p-[60px_50%_60px_40px] max-lg:p-[50px_45%_50px_40px] max-md:p-[30px_45%_30px_30px] max-sm:p-[30px] bg-[#fdeaea] rounded-[15px]'>
                            <h1 className='font-[700] text-[2.5rem] max-lg:text-[35px] max-md:text-[30px] leading-[1.2]'>{t('services.textAbout')}</h1>
                            <p className='text-[18px] max-lg:text-[14px] font-[500] mt-[10px] mb-[40px]'>{t('services.titleAbout')}</p>
                        </div>
                        <div data-aos="fade-left"
                        data-aos-duration="1000"
                            data-aos-easing="ease-in-sine"   className='p-[40px_60px] max-lg:p-[30px] max-md:p-[20px] max-md:right-[-10px] bg-[#fff] rounded-[5px] border-[#e1053f] border-[1px] shadow-[-6px_6px_0_0_#000] cursor-pointer absolute  right-0 top-[-20px] max-lg:top-[-10px] w-[41.6%] max-sm:w-[100%] max-sm:mt-[40px] max-sm:right-0 max-sm:relative'>
                            <div className='flex items-center jutify-center'>
                                <img className='w-[70px] h-[70px]' src={logo} alt="" />
                                <div className='ml-[15px] leading-[1.2]'>
                                    <h1 className='text-[1.75rem] font-[700] max-lg:text-[18px] max-md:text-[16px]'>homekit.uz</h1>
                                    <h1>{t('services.textAbout2')}</h1>
                                </div>
                            </div>
                            <p className='font-[600] mt-[20px] max-lg:text-[14px] max-lg:mt-[10px] max-md:text-[13px] max-sm:text-[14px]'>{t('services.titleAbout2')}</p>
                            <div className='flex items-center justify-start font-[600] text-[13px] mt-[20px] max-lg:text-[11px] max-md:text-[10px] max-lg:mt-[10px] max-sm:text-[12px]'>
                                <MdLocationOn className='text-[32px] max-lg:text-[27px] max-md:text-[24px]' />
                                <p >{t('services.textAboutLocation')}</p>
                            </div>
                            <div className='mt-[30px] max-lg:mt-[10px] h-[250px] max-lg:h-[160px] max-md:h-[130px] max-sm:h-[200px] rounded-[6px] owerflow-hidden relative w-full'>
                                <iframe className='w-full h-full absolute rounded-[6px]' src="https://www.youtube.com/embed/tDetkOezsVk?si=Y44brMDnAcuwZ_qc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
