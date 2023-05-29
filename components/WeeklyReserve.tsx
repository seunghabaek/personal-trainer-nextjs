const WeeklyReserve = () => {
  const today = new Date();

  const numberOffset = [-3, -2, -1, 0, 1, 2, 3];
  const dateOffsetArray = numberOffset.map(
    (dateOffset) => new Date(new Date().setDate(today.getDate() + dateOffset))
  );

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekArray = dateOffsetArray.map((date) => weekday[date.getDay()]);

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
                <h1>{dateOffsetArray[0].getDate()}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {weekArray[0]}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-lg font-semibold text-center text-slate-800">
                <h1>{dateOffsetArray[1].getDate()}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {weekArray[1]}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl ">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-lg font-semibold text-center text-slate-800">
                <h1>{dateOffsetArray[2].getDate()}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {weekArray[2]}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl bg-[#0168ff]/[0.06]">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-xl font-bold text-center text-[#0168ff]">
                <h1>{dateOffsetArray[3].getDate()}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-sm font-medium text-center text-[#0168ff]">
                {weekArray[3]}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-lg font-semibold text-center text-slate-800">
                <h1>{dateOffsetArray[4].getDate()}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {weekArray[4]}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-lg font-semibold text-center text-slate-800">
                <h1>{dateOffsetArray[5].getDate()}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {weekArray[5]}
              </p>
            </div>
          </div>
          <div className="container mx-auto w-[53px] h-[79px] rounded-2xl">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 px-3 top-4">
              <p className="flex-grow-0 flex-shrink-0 w-6 h-6 text-lg font-semibold text-center text-slate-800">
                <h1>{dateOffsetArray[6].getDate()}</h1>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-6 h-3.5 text-xs text-center text-slate-400">
                {weekArray[6]}
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
