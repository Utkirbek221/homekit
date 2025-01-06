import React, { useEffect, useState } from 'react';
import logo from '../../public/logoHomekit.png';
import { useTranslation } from 'react-i18next';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setLanguage(savedLang);
    }
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`space text-white flex justify-center  items-center w-full left-0 p-0 top-0 z-20 fixed ${isScrolled ? 'bg-[#1e1e1eca]' : 'bg-[#1e1e1e]'
        }`}>
      <div className={` flex justify-between items-center w-full  ${isScrolled ? 'p-[8px_7vw] max-md:p-[5px_5vw]' : 'p-[5px_7vw] max-md:p-[25px_5vw]'
        }`}>
        <div className='w-[19vw]'>
          <Link to={'/'} onClick={scrollToTop}>
            <img src={logo} alt="Homekit Logo" className='w-[80px] h-[80px]' />
          </Link>
        </div>
        <div className='max-md:hidden flex justify-between items-center w-[50%] max-lg:text-[12px] text-[14px]'>
          <a href="#">{t('header.main')}</a>
          <a href="#">{t('header.about')}</a>
          <a href="#">{t('header.services')}</a>
        </div>
        <div className='max-md:hidden flex justify-between items-center'>
          <select
            className='bg-[#ffffff30] border-t-[1px] border-[#ffffff7f] rounded-[3px] p-[2px_5px] text-[14px] mr-[30px]'
            onChange={(e) => changeLanguage(e.target.value)}
            value={language}
          >
            <option value="uz">O'z</option>
            <option value="ru">Ru</option>
          </select>
          <button className='bg-[#b50a3f] text-white flex flex-col items-center justify-center gap-[5px] p-[8px_15px] rounded-[10px] text-[14px] max-lg:text-[12px]'>
            <p className='leading-[17px]'>+998 97 777 29 29</p>
            <p className='mt-[-5px]'>Aloqa</p>
          </button>
        </div>
        <div className='max-md:flex hidden text-[1.5rem]'>
          <IoMdMenu onClick={toggleMenu} />
        </div>
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-[#000] transform transition-transform duration-[0.8s] ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className='flex flex-col gap-5 text-[#D4D4D8] p-5 w-full'>
            <div className='flex justify-end'>
              <IoCloseSharp onClick={toggleMenu} className='text-[#D4D4D8] text-[2rem] cursor-pointer ' />
            </div>
            <div className='flex flex-col mt-[30px] justify-center items-center text-[18px] text-[#fff] gap-[80px]'>
              <a href="#">{t('header.main')}</a>
              <a href="#">{t('header.about')}</a>
              <a href="#">{t('header.services')}</a>
              <p className='leading-[17px]'>+998 97 777 29 29</p>
              <select
                className='bg-[#ffffff30] border-t-[1px] border-[#ffffff7f] rounded-[3px] p-[2px_5px] text-[14px]'
                onChange={(e) => changeLanguage(e.target.value)}
                value={language}
              >
                <option value="uz">O'z</option>
                <option value="ru">Ru</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
