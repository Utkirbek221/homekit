import React, { useEffect, useState } from "react";
import { FaInstagram, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import HomePage from "../IMG/logoHomekit.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  const { t } = useTranslation();
  return (
    <footer className="bg-[#9a304c] text-white p-[50px_15vw] max-lg:p-[50px_13vw] max-md:p-[50px_10vw] max-sm:p-[50px_7vw]">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex lg:flex-row items-center lg:items-start justify-between mb-8 max-lg:gap-[50px]">
          {/* Logo and Social Icons */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className={`mb-4 ${isScrolled ? '' : ''
              }`}>
              <Link to={'/'} onClick={scrollToTop}>
                <img
                  src={HomePage}
                  alt="Logo"
                  className="mx-auto lg:mx-0 w-16"
                />
              </Link>
            </div>
            <div className="flex justify-start space-x-4 text-2xl">
              <a href="#" className="hover:text-gray-300">
                <FaPhoneAlt />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTelegramPlane />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-between w-[60%] ">
            <div className=" text-left  mb-8 lg:mb-0">
              <h4 className="font-semibold mb-4 max-md:text-[10px]">{t("footer.text")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline opacity-[0.6] max-md:text-[10px]">
                    {t("footer.text2")}
                  </a>
                </li>
                <li>
                  <a href="#aboute" className="hover:underline opacity-[0.6] max-md:text-[10px]">
                    {t("footer.text3")}
                  </a>
                </li>
                <li>
                  <a href="#registor" className="hover:underline opacity-[0.6] max-md:text-[10px]">
                    {t("footer.text4")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-4 max-md:text-[10px]">{t("footer.text5")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#advantageswiper" className="hover:underline opacity-[0.6] max-md:text-[10px]">
                    {t("footer.text6")}
                  </a>
                </li>
                <li>
                  <a href="#service" className="hover:underline opacity-[0.6] max-md:text-[10px]">
                    {t("footer.text7")}
                  </a>
                </li>
                <li>
                  <a href="#serviceswiper" className="hover:underline opacity-[0.6] max-md:text-[10px]">
                    {t("footer.text8")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#ffffff67] pt-4 flex flex-row justify-between items-center">
          <p className="text-sm text-left max-md:text-[10px]">
            {t("footer.text9")}
          </p>
          <a
            href="https://it-time.example"
            className="text-sm hover:underline text-left max-md:text-[10px]"
          >
            {t("footer.text9")} IT-Time
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
