export default function PastTrades() {
  const trades = [
    {
      pair: "NEAR/USDT",
      type: "SPOT",
      time: "1 мин. назад",
      profit: "58.6206%",
      target: 4,
      date: "06.10.2022",
    },
    {
      pair: "BTC/USDT",
      type: "SPOT",
      time: "1 мин. назад",
      profit: "6.02%",
      target: 3,
      date: "06.10.2022",
    },
    {
      pair: "ETH/USDT",
      type: "SPOT",
      time: "1 мин. назад",
      profit: "16.3%",
      target: 4,
      date: "06.10.2022",
    },
    {
      pair: "NEAR/USDT",
      type: "SPOT",
      time: "1 мин. назад",
      profit: "0.963%",
      target: 4,
      date: "06.10.2022",
    },
    {
      pair: "NEAR/USDT",
      type: "SPOT",
      time: "1 мин. назад",
      profit: "58.6206%",
      target: 4,
      date: "06.10.2022",
    },
    {
      pair: "BTC/USDT",
      type: "SPOT",
      time: "1 мин. назад",
      profit: "6.02%",
      target: 3,
      date: "06.10.2022",
    },
    {
      pair: "ETH/USDT",
      type: "SPOT",
      time: "1 мин. назад",
      profit: "16.3%",
      target: 4,
      date: "06.10.2022",
    },
    {
      pair: "NEAR/USDT",
      type: "SPOT",
      time: "1 мин. назад",
      profit: "0.963%",
      target: 4,
      date: "06.10.2022",
    },
  ];

  return (
    <div className="w-full relative pt-20 px-4 sm:px-6 lg:px-10 pb-32">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2 tracking-wide">
          ПРОШЕДШИЕ СДЕЛКИ
        </h1>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-500 text-sm">Онлайн</span>
        </div>
      </div>

      {/* Cards container */}
      <div className="pb-4 relative overflow-x-auto overflow-y-hidden scroll-smooth">
        <div className="flex gap-5 min-w-max lg:flex lg:flex-nowrap">
          {trades.map((trade, index) => (
            <div
              key={index}
              className="
                shrink-0 
                w-60 sm:w-64 md:w-72 
                h-48 sm:h-52 
                bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 
                rounded-sm p-5 shadow-2xl relative 
                overflow-hidden group 
                hover:scale-105 transition-transform duration-300
                [clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,0_100%)]
              "
            >
              {/* Background img */}
              <img
                src="/card-img.svg"
                alt=""
                className="absolute w-32 h-32 sm:w-40 sm:h-40 right-0 top-0 opacity-30"
              />

              <div className="relative z-10">
                <h3 className="text-white text-lg font-bold mb-1">
                  {trade.pair}
                </h3>
                <p className="text-purple-200 text-xs mb-4">
                  {trade.type} · {trade.time}
                </p>

                <div className="mb-4">
                  <p className="text-purple-200 text-xs uppercase mb-1">
                    Прибыль
                  </p>
                  <span className="text-green-400 text-2xl sm:text-3xl font-bold">
                    {trade.profit}
                  </span>
                </div>

                <div className="flex justify-between items-center text-[11px] sm:text-xs text-purple-200">
                  <span>Цель {trade.target}</span>
                  <span>Дата входа {trade.date}</span>
                </div>
              </div>

              {/* Shine */}
              <div
                className="
                absolute inset-0 opacity-0 
                group-hover:opacity-20 
                bg-gradient-to-r from-transparent via-white to-transparent 
                transform -skew-x-12 translate-x-full 
                group-hover:-translate-x-[200%] 
                transition-transform duration-700
              "
              ></div>
            </div>
          ))}
        </div>
      </div>

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
    </div>
  );
}
