export default function NumbersSell() {
  return (
    <section className="bg-white text-[#070A1B] py-16 px-6">
      <div className="lg:flex lg:justify-center mx-1 items-center">
        {/* Title */}
        <div className="mb-10 mr-50 text-start items-start">
          <p className="text-3xl md:text-5xl font-bold font-plex leading-9 md:leading-14">
            ЦИФРЫ
          </p>
          <p className="pt-2 text-black font-plex text-sm leading-2 md:leading-5 opacity-50">
            Сентябрь 2022
          </p>
        </div>

        {/* Statistics */}
        <div
          className="
          grid 
          grid-cols-2 
          lg:grid-cols-none
          lg:flex
          gap-10
          text-left
        "
        >
          <div>
            <p className="text-black font-plex font-normal mb-2 text-sm md:text-base leading-5 opacity-80">
              ТОРГОВОЙ ПРИБЫЛИ
            </p>
            <p className="text-4xl md:text-6xl font-medium font-plex leading-[110%] text-[#5B5BF0]">
              2756%
            </p>
          </div>

          <div>
            <p className="text-black font-plex font-normal mb-2 text-sm md:text-base leading-5 opacity-80">
              ФЬЮЧЕРСНЫХ И СПОТОВЫХ СДЕЛОК
            </p>
            <p className="text-4xl md:text-6xl font-medium font-plex leading-[110%] text-[#5B5BF0]">
              67
            </p>
          </div>

          <div>
            <p className="text-black font-plex font-normal mb-2 text-sm md:text-base leading-5 opacity-80">
              ПРИБЫЛЬ ПОДПИСЧИКОВ
            </p>
            <p className="text-4xl md:text-6xl font-medium font-plex leading-[110%] text-[#5B5BF0]">
              375000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
