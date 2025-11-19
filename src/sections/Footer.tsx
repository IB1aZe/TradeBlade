export default function Footer() {
  return (
    <footer className="w-full bg-[#040617] text-white ">
      <div className="flex flex-col md:flex-row w-full min-h-[250px]">
        {/* Left side */}
        <div className="w-full md:w-2/3 flex flex-col justify-between py-10 px-6 md:px-16 lg:px-24">
          {/* Upper mobile */}
          <div className="flex md:hidden w-full items-start justify-between ">
            <p className="font-plex font-medium text-sm opacity-40 whitespace-nowrap mr-4">
              БЫСТРАЯ НАВИГАЦИЯ
            </p>

            <nav className="font-plex text-sm text-gray-300 flex flex-col gap-3">
              <a href="#">ЦИФРЫ</a>
              <a href="#">СДЕЛКИ ОНЛАЙН</a>
              <a href="#">О КОМПАНИИ</a>
              <a href="#">TRADEBLAD ЭТО</a>
              <a href="#">КАК НАЧАТЬ</a>
              <a href="#">ТАРИФЫ</a>
              <a href="#">FAQ</a>
            </nav>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex flex-col justify-between h-full pr-10">
            <p className="font-plex font-medium text-sm opacity-40">
              БЫСТРАЯ НАВИГАЦИЯ
            </p>

            <nav className="font-plex text-sm text-gray-300 flex flex-wrap gap-6">
              <a href="#">ЦИФРЫ</a>
              <a href="#">СДЕЛКИ ОНЛАЙН</a>
              <a href="#">О КОМПАНИИ</a>
              <a href="#">TRADEBLAD ЭТО</a>
              <a href="#">КАК НАЧАТЬ</a>
              <a href="#">ТАРИФЫ</a>
              <a href="#">FAQ</a>
            </nav>
          </div>
        </div>

        {/* Horizontal mobile line */}
        <div className="block md:hidden w-full h-px bg-gray-700 my-1"></div>

        {/* Vertical line */}
        <div className="hidden md:block w-0.5 bg-gray-700 mx-10"></div>

        {/* Right side */}
        <div className="w-full md:w-1/3 flex flex-col justify-between py-1 md:py-5 px-4 md:px-16 lg:px-24 items-start md:items-end">
          {/* Logo */}
          <img src="./public/footer-logo.svg" alt="Logo" className="w-40" />

          {/* Copyrite */}
          <p className="font-plex font-normal opacity-50 text-sm mt-10 md:mt-0">
            © 2022 TradeBlade. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
