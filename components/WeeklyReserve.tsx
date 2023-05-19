const WeeklyReserve = () => {
  let today = new Date();
  let date = today.getDate();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let week = weekday[today.getDay()];

  return (
    <div
      className="flex justify-start items-center w-[355px] h-[122px]  gap-4 px-1 rounded-[20px] bg-white"
      style={{ boxShadow: "0px 2px 8px 0 rgba(0,0,0,0.1)" }}
    >
      <div className="ustify-start items-center flex-grow w-[355px] h-12 gap-4" />
      <div className="container w-20%">
        <div className="flex items-center w-[332px] h-[79px]">
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-lg font-semibold text-center text-slate-800">
                <h1>{date}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {week}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-lg font-semibold text-center text-slate-800">
                <h1>{date}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {week}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl ">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-lg font-semibold text-center text-slate-800">
                <h1>{date}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {week}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl bg-[#0168ff]/[0.06]">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-xl font-bold text-center text-[#0168ff]">
                <h1>{date}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-sm font-medium text-center text-[#0168ff]">
                {week}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-lg font-semibold text-center text-slate-800">
                <h1>{date}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {week}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-lg font-semibold text-center text-slate-800">
                <h1>{date}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {week}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-lg font-semibold text-center text-slate-800">
                <h1>{date}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {week}
              </p>
            </div>
          </div>
        </div>
        <div className="container w-20%">
          <div className="flex relative gap-2">
            <div className="flex justify-start w-[57.14px] h-5 rounded-[9px] border border-[#0056e5]">
              <p className="w-[65.71px] text-[8px] font-bold text-center text-[#0168ff]">
                10:00
              </p>
            </div>
            <div className="flex justify-start w-[57.14px] h-5 rounded-[9px] border border-[#0056e5]">
              <p className="w-[65.71px] text-[8px] font-bold text-center text-[#0168ff]">
                11:00
              </p>
            </div>
            <div className="flex justify-start w-[57.14px] h-5 rounded-[9px] border border-[#0056e5]">
              <p className="w-[65.71px] text-[8px] font-bold text-center text-[#0168ff]">
                12:00
              </p>
            </div>
            <div className="flex justify-start w-[57.14px] h-5 rounded-[9px] border border-[#0056e5]">
              <p className="w-[65.71px] text-[8px] font-bold text-center text-[#0168ff]">
                13:00
              </p>
            </div>
            <div className="flex justify-start w-[57.14px] h-5 rounded-[9px] border border-[#0056e5]">
              <p className="w-[65.71px] text-[8px] font-bold text-center text-[#0168ff]">
                14:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReserve;
