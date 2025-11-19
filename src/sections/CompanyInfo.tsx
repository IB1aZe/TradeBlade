export default function CompanyInfo() {
  return (
    <div className="w-full bg-white text-[#070A1B] py-16 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-center md:justify-between gap-16 lg:gap-10">
      {/* LEFT BLOCK */}
      <div className="max-w-[770px]">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight">
          О КОМПАНИИ
        </h2>

        <p className="max-w-[450px] pt-6 sm:pt-8 text-base font-plex leading-tight text-gray-800">
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade
          является авторизованным официальным брокером биржи Binance.
          <br />
          <br />
          Он представляет пользователям множество преимуществ, таких как более
          высокая скорость синхронизации API и возможность создать учетную
          запись Binance через платформу TradeBlade всего в 1 клик.
        </p>
      </div>

      {/* RIGHT BLOCK */}
      <div className="w-full max-w-[770px] bg-[#6A54FF] rounded-sm px-6 sm:px-10 py-10 text-center">
        <p className="text-white text-xl sm:text-2xl lg:text-[28px] font-plex font-medium leading-snug max-w-[520px] mx-auto">
          Попробуйте сейчас и получите 5 дней бесплатного пользования
        </p>

        <form className="relative w-full max-w-[500px] h-[60px] mx-auto mt-8">
          <input
            type="email"
            placeholder="ВАШ E-MAIL"
            className="w-full h-full px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-11 px-4 sm:px-5 bg-[#57E1FF] hover:bg-[#4dc3dd] transition rounded-lg text-black font-medium"
          >
            ПОПРОБОВАТЬ
          </button>
        </form>
      </div>
    </div>
  );
}
