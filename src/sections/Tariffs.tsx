import React, { useState } from "react";

export default function Tariffs() {
  const [active, setActive] = useState<"left" | "right">("left");

  return (
    <div className="bg-black w-full min-h-screen flex justify-center py-20 px-4 md:px-8 lg:px-20">
      <div className="flex flex-col gap-12 w-full max-w-7xl items-center">
        {/* TITLE + SWITCH */}
        <div className="w-full flex flex-col gap-6 md:max-w-4xl">
          <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-[44px]">
            ТАРИФЫ
          </h1>

          <div className="flex">
            <div className="flex w-full max-w-[420px] bg-[#6A54FF] rounded-sm overflow-hidden">
              <button
                onClick={() => setActive("left")}
                className={`w-1/2 py-2 font-medium transition ${
                  active === "left"
                    ? "bg-[#57E1FF] text-black"
                    : "text-[#57E1FF]"
                }`}
              >
                СПОТ
              </button>

              <button
                onClick={() => setActive("right")}
                className={`w-1/2 py-2 font-medium transition ${
                  active === "right"
                    ? "bg-[#57E1FF] text-black"
                    : "text-[#57E1FF]"
                }`}
              >
                ФЬЮЧЕРС
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-start w-full">
          {/* STANDART CARD */}
          <div className="w-full sm:w-[413px] bg-black border border-[#6A54FF] rounded-xl p-6 text-left">
            <h2 className="text-white text-2xl sm:text-3xl font-medium mb-10">
              STANDART
            </h2>

            <div className="space-y-4 mb-26">
              {[
                "Ручной трейдинг",
                "Автоматическое или полуавтоматическое копирование сделок",
                "Личный кабинет со статистикой",
                "Среднесрочные сделки с уровнями набора портфеля",
              ].map((text, i) => (
                <div key={i}>
                  <div className="flex gap-3">
                    <img
                      src="./src/assets/frame-check.svg"
                      className="w-4 h-4"
                    />
                    <p className="text-white text-sm leading-5">{text}</p>
                  </div>
                  <hr className="border-t-2 border-dashed border-gray-600" />
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold text-white">$234</p>
                <p className="text-lg font-medium text-[#35FF9E]">-35%</p>
              </div>

              <select className="bg-gray-800 rounded text-white px-2 py-1">
                <option>12 месяцев</option>
                <option>24 месяцев</option>
                <option>36 месяцев</option>
              </select>
            </div>

            <button className="w-full bg-[#57E1FF] rounded-lg py-3">
              <p className="text-black font-medium">ПОПРОБОВАТЬ</p>
              <p className="text-black text-xs">5 дней бесплатно</p>
            </button>
          </div>

          {/* VIP CARD */}
          <div className="w-full sm:w-[430px] bg-[#6A54FF] border border-[#6A54FF] rounded-xl p-6 text-left">
            <h2 className="text-white text-2xl sm:text-3xl font-medium mb-10">
              VIP
            </h2>

            <div className="space-y-4 mb-12">
              {[
                "Ручной трейдинг",
                "Автоматическое или полуавтоматическое копирование сделок",
                "Личный кабинет со статистикой",
                "Краткосрочные, среднесрочные и инвест сделки",
                "Доступ в Vip чат с командой",
                "Наш авторский курс по трейдингу",
              ].map((text, i) => (
                <div key={i}>
                  <div className="flex gap-3">
                    <img
                      src="./src/assets/frame-check.svg"
                      className="w-4 h-4"
                    />
                    <p className="text-white text-sm leading-5">{text}</p>
                  </div>
                  <hr className="border-t-2 border-dashed border-gray-400" />
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold text-white">$585</p>
                <p className="text-lg font-medium text-[#35FF9E]">-35%</p>
              </div>

              <select className="bg-gray-800 rounded text-white px-2 py-1">
                <option>12 месяцев</option>
                <option>24 месяцев</option>
                <option>36 месяцев</option>
              </select>
            </div>

            <button className="w-full bg-[#57E1FF] rounded-lg py-3">
              <p className="text-black font-medium">ПОПРОБОВАТЬ</p>
              <p className="text-black text-xs">5 дней бесплатно</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
