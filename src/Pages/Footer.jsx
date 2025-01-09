import { Typography } from "@material-tailwind/react";
import logo from "../IMG/logoHomekit.png";
import { useTranslation } from "react-i18next";


export default function Footer() {
  const { t } = useTranslation();
  const LINKS = [
    {
      title: t("footer.text"),
      items: [t("footer.text2"), t("footer.text3"), t("footer.text4")],
    },
    {
      title: t("footer.text5"),
      items: [t("footer.text6"), t("footer.text7"), t("footer.text8")],
    }
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative w-full bg-[#9a304c] p-[50px_15vw] max-lg:p-[50px_13vw] max-md:p-[50px_10vw] max-sm:p-[50px_7vw]">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            <img src={logo} alt="" className="w-[120px] h-[120px]" />
          </Typography>
          <div className="grid grid-cols-2 justify-between gap-4 text-[#fff]">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-5 font-medium "
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal  text-[#fff] opacity-40 "
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        </div>
      </div>
    </footer>
  );
}
