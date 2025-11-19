export default function GetStarted() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-[#6A54FF] rounded-sm items-center justify-between gap-6 px-6 md:px-16 lg:px-24 py-8">
      {/* Text */}
      <div className="w-full md:w-1/2">
        <p className="font-medium font-plex text-[20px] sm:text-[24px] md:text-[28px] leading-7 md:leading-9 tracking-[-0.04em] text-white text-center md:text-left">
          Начните прямо сейчас с бесплатным 5–и дневным пробным периодом!
        </p>
      </div>

      {/* Form */}
      <form className="w-full md:w-2/3 lg:w-1/3 flex flex-col gap-2 lg:flex-row lg:gap-0 relative">
        <input
          type="email"
          placeholder="ВАШ E-MAIL"
          className="w-full h-14 px-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#57E1FF]"
        />

        <button
          className="
            h-14 px-6  bg-[#57E1FF] hover:bg-[#4dc3dd] transition rounded-lg text-black font-medium w-full sm:w-auto"
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
      </form>
    </div>
  );
}
