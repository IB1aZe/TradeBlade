import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center h-16 px-6 md:px-10 border-b border-[#1B1F3B]">
      {/* Logo */}
      <div className="hidden lg:flex items-center gap-2">
        <img
          src="./src/assets/logo.svg"
          alt="TradeBlade"
          className="h-12 w-28"
        />
      </div>

      {/* Desktop meu */}
      <nav className="hidden md:flex items-center md:px-5 gap-4 text-sm text-gray-300 font-plex">
        <a href="#">ЦИФРЫ</a>
        <a href="#">СДЕЛКИ ОНЛАЙН</a>
        <a href="#">О КОМПАНИИ</a>
        <a href="#">КАК НАЧАТЬ</a>
        <a href="#">ТАРИФЫ</a>
        <a href="#">ОТЗЫВЫ</a>
        <a href="#">FAQ</a>
      </nav>

      {/* Desktop button */}
      <div className="hidden md:flex gap-2">
        <button className="h-10 bg-[#00e1ff22] border-[#00E0FF] border-2 text-[#00E0FF] font-plex px-4 py-1 rounded-sm hover:bg-[#00e1ff4c] transition">
          ВХОД
        </button>
        <button className="h-10 bg-[#4dc7e3] border-[#00E0FF] text-[#070A1B] font-plex px-4 py-1 rounded-sm font-semibold hover:bg-[#57E1FF] transition">
          РЕГИСТРАЦИЯ
        </button>
      </div>

      {/* Mobile button */}
      <img
        src="./src/assets/logo.svg"
        alt="TradeBlade"
        className="h-10 w-24 md:hidden"
      />
      <button
        className="top-1 right-1 md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#6A54FF] md:hidden transition-transform duration-300 z-20 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top button */}
        <div className="flex justify-end px-6 py-4 border-b border-[#6A54FF]">
          <button onClick={() => setOpen(false)} className="text-white">
            <CloseIcon fontSize="large" />
          </button>
        </div>

        {/* Main menu */}
        <nav className="flex flex-col gap-4 p-6 pb-24 text-gray-300 font-plex text-lg">
          <a onClick={() => setOpen(false)} href="#">
            ЦИФРЫ
          </a>
          <a onClick={() => setOpen(false)} href="#">
            СДЕЛКИ ОНЛАЙН
          </a>
          <a onClick={() => setOpen(false)} href="#">
            О КОМПАНИИ
          </a>
          <a onClick={() => setOpen(false)} href="#">
            КАК НАЧАТЬ
          </a>
          <a onClick={() => setOpen(false)} href="#">
            ТАРИФЫ
          </a>
          <a onClick={() => setOpen(false)} href="#">
            ОТЗЫВЫ
          </a>
          <a onClick={() => setOpen(false)} href="#">
            FAQ
          </a>
        </nav>

        {/* Bottom buttons */}
        <div className="absolute bottom-0 w-11/12 flex mx-4 my-5 gap-4">
          <button className="w-1/2 h-14 bg-[#4dc7e3] text-[#070A1B] font-plex font-semibold hover:bg-[#57E1FF] transition">
            РЕГИСТРАЦИЯ
          </button>
          <button className="w-1/2 h-14 bg-[#00e1ff22] border-4 border-[#00E0FF] text-[#00E0FF] font-plex font-semibold hover:bg-[#00e1ff4c] transition">
            ВОЙТИ
          </button>
        </div>
      </div>
    </header>
  );
}
