import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillAlert } from 'react-icons/ai';
import { BsBuildingLock, BsLamp, BsRouter } from 'react-icons/bs';
import { CgMusicSpeaker } from 'react-icons/cg';
import { CiLock } from 'react-icons/ci';
import { FaTemperatureHigh, FaTv } from 'react-icons/fa';
import { FaFaucetDrip } from 'react-icons/fa6';
import { GiComputerFan, GiElectricalSocket, GiWindow } from 'react-icons/gi';
import { GrFanOption } from 'react-icons/gr';
import { IoIosWater } from 'react-icons/io';
import { IoCameraOutline } from 'react-icons/io5';
import { MdAir, MdRouter, MdSensors } from 'react-icons/md';
import { PiBellRingingBold, PiGarageLight } from 'react-icons/pi';
import { RxSwitch } from 'react-icons/rx';

export default function Register() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const formatPhoneNumber = (value) => {
    value = value.replace(/\D/g, ''); // Remove non-digit characters
    if (value.length > 9) {
      value = value.slice(0, 9);
    }
    const formatted = value.replace(
      /(\d{2})(\d{3})(\d{2})(\d{2})/,
      (match, p1, p2, p3, p4) => `${p1}-${p2}-${p3}-${p4}`
    );
    return formatted;
  };

  const sendDataToTelegram = async () => {
    setError('');
    setSuccess('');

    if (!name || phone.length !== 12) { // 12 includes 9 digits + 3 dashes
      setError(t('register.error')); // "Ma'lumot to'ldirilmagan yoki telefon raqami noto'g'ri"
      return;
    }

    const chatId = '1005236949';
    const token = '7426048487:AAEHujQ0BJjkJ0nZoLg4KOEE94EbrIdOSCU';
    const message = `Ismi: ${name}\nTelefon raqami: +998${phone.replace(/-/g, '')}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (response.ok) {
        setSuccess(t('register.success')); // "Ma'lumot yuborildi"
        setName('');
        setPhone('');
        setIsModalOpen(true); // Open modal on success
      } else {
        setError(t('register.fail')); // "Ma'lumot yuborishda xatolik"
      }
    } catch (error) {
      setError(t('register.fail')); // "Ma'lumot yuborishda xatolik"
      console.error(error);
    }
  };

  const { t } = useTranslation();

  const items = [
    { icon: <CgMusicSpeaker />, label: t('register.inputImg') },
    { icon: <GiComputerFan />, label: t('register.inputImg2') },
    { icon: <RxSwitch />, label: t('register.inputImg3') },
    { icon: <MdSensors />, label: t('register.inputImg4') },
    { icon: <PiGarageLight />, label: t('register.inputImg5') },
    { icon: <PiBellRingingBold />, label: t('register.inputImg6') },
    { icon: <CiLock />, label: t('register.inputImg7') },
    { icon: <IoCameraOutline />, label: t('register.inputImg8') },
    { icon: <GrFanOption />, label: t('register.inputImg9') },
    { icon: <MdRouter />, label: t('register.inputImg10') },
    { icon: <GiWindow />, label: t('register.inputImg11') },
    { icon: <BsLamp />, label: t('register.inputImg12') },
    { icon: <BsBuildingLock />, label: t('register.inputImg13') },
    { icon: <MdAir />, label: t('register.inputImg14') },
    { icon: <GiElectricalSocket />, label: t('register.inputImg15') },
    { icon: <BsRouter />, label: t('register.inputImg16') },
    { icon: <AiFillAlert />, label: t('register.inputImg17') },
    { icon: <FaFaucetDrip />, label: t('register.inputImg18') },
    { icon: <FaTv />, label: t('register.inputImg19') },
    { icon: <FaTemperatureHigh />, label: t('register.inputImg20') },
    { icon: <IoIosWater />, label: t('register.inputImg21') },
  ];

  return (
    <div className="bg-[#b8b8b84e] w-full h-full">
      <div className="w-full h-full flex flex-col justify-center items-center p-[50px_15vw] jura text-[#fff] max-lg:p-[50px_13vw] max-md:p-[50px_10vw] max-sm:p-[50px_7vw]">
        <div className="flex flex-col items-start justify-center p-[20px] w-[83%]">
          <p className="text-[18px] font-[300] max-md:text-[15px]">{t('register.title')}</p>
          <h1 className="text-[45px] font-[500] leading-[1.2] mb-[.8rem] max-md:text-[30px]">{t('register.text')}</h1>
        </div>
        <div className="p-[20px]">
          <div className="border-[2px] border-[hsla(0,0%,100%,.386)] p-[20px_30px] rounded-[30px]">
            <div className="flex flex-col gap-[20px] mb-[20px]">
                {error && <p className="text-red-500">{error}</p>}
                <input
                  className="bg-transparent border-b-[2px] border-solid border-[hsla(0,0%,100%,.386)] p-[10px] text-[#fff] focus:outline-none"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('register.name')}
                />
              <div className="relative w-full flex justify-center items-center">
                <span className="absolute left-2 top-[22px] transform -translate-y-1/2 ">+998</span>
                <input
                  type="text"
                  placeholder="99-999-99-99"
                  value={phone}
                  onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                  className="bg-transparent border-b-[2px] border-solid border-[hsla(0,0%,100%,.386)] p-[10px] text-[#fff] focus:outline-none w-full pl-[50px]"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[20px]">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="text-[36px] max-md:text-[25px]">{item.icon}</div>
                  <p className="text-[18px] max-md:text-[13px]">{item.label}</p>
                </div>
              ))}
            </div>
            <button
              onClick={sendDataToTelegram}
              className="w-full bg-[#e1053f] py-[10px] rounded-[20px] mt-[50px] text-[#fff] text-[20px]">{t('register.btn')}</button>
          </div>
        </div>
      </div>

      {/* Modal for success message */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <p className="text-lg text-black">{t('register.success')}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
