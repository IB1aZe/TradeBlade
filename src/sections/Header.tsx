export default function Header() {
  return (
    <section className="min-h-[608px] py-4 px-4 md:py-24 relative flex flex-col md:flex-col items-start md:items-center md:justify-between">
      {/* Up side */}
      <div className="lg:hidden">
        <img
          src="/eth&usdt.svg"
          alt=""
          className="w-[260px] md:w-[320px] lg:w-[420px] mx-auto md:mx-0"
        />
      </div>

      {/* Left side */}
      <div className="lg:grid lg:grid-cols-2 mt-10 md:px-8 text-left md:justify-between">
        <div>
          <h1 className="text-[35px] md:text-[60px] font-bold font-plex leading-11 md:leading-[72px]">
            МОМЕНТАЛЬНО КОПИРУЙ СДЕЛКИ ПРОФИ ТРЕЙДЕРОВ
          </h1>

          <p className="text-gray-400 font-plex mb-8">
            Начни копировать сделки с успешной командой профессиональных
            трейдеров в автоматическом режиме.
          </p>

          {/* Form */}
          <div className="flex md:mx-0 w-2/3">
            <input
              type="email"
              placeholder="ВАШ E-MAIL"
              className="flex-1 p-3 rounded-l-lg bg-[#201A4F] text-white border border-[#1B1F3B] focus:outline-none"
            />
            <button className="px-6 bg-[#00E0FF] text-[#070A1B] font-semibold font-plex rounded-r-lg hover:bg-[#00CFFF] transition">
              НАЧАТЬ
            </button>
          </div>

          <p className="flex text-gray-500 font-plex text-sm mt-2">
            5 дней бесплатного пользования
          </p>
        </div>

        {/* Right img */}
        <div className="hidden lg:flex lg:pl-24">
          <img
            src="/eth&usdt.svg"
            alt=""
            className="w-[260px] md:w-[320px] lg:w-[420px]"
          />
        </div>
      </div>

      <div className=""></div>

      {/* White separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-2/3 h-6 md:h-14 md:w-2/5"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 144"
        >
          <path d="M1150 0L0 0L0 600H1800Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}
