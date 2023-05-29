const RecordDiary = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const clickAlert = () => {
    alert("버튼이 클릭되었습니다");
  };
  return (
    <div className="flex items-center w-[355px] h-[54px]  gap-4 px-1 rounded-[21px] bg-slate-300">
      <div className="flex mx-3">
        <p className="text-[12.5px] text-left text-black">
          <p className="text-[9.5px] font-bold text-left text-[#2cf79f]">
            {year}년 {month}월 {day}일
          </p>
          일지를 작성해보세요
        </p>
      </div>
      <p className="flex justify-start">
        <button onClick={clickAlert}>
          <svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[30px] h-[30px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <g opacity="0.3">
              <path
                d="M13.75 10C13.75 9.30965 14.3096 8.75 15 8.75C15.6904 8.75 16.25 9.30965 16.25 10V13.75H20C20.6904 13.75 21.25 14.3096 21.25 15C21.25 15.6904 20.6904 16.25 20 16.25H16.25V20C16.25 20.6904 15.6904 21.25 15 21.25C14.3096 21.25 13.75 20.6904 13.75 20V16.25H10C9.30964 16.25 8.75 15.6904 8.75 15C8.75 14.3096 9.30965 13.75 10 13.75H13.75V10Z"
                fill="#20232B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.75 15C28.75 22.5939 22.5939 28.75 15 28.75C7.40609 28.75 1.25 22.5939 1.25 15C1.25 7.40609 7.40609 1.25 15 1.25C22.5939 1.25 28.75 7.40609 28.75 15ZM3.75854 15C3.75854 21.2085 8.79151 26.2415 15 26.2415C21.2085 26.2415 26.2415 21.2085 26.2415 15C26.2415 8.79151 21.2085 3.75854 15 3.75854C8.79151 3.75854 3.75854 8.79151 3.75854 15Z"
                fill="#20232B"
              />
            </g>
          </svg>
        </button>
      </p>
    </div>
  );
};

export default RecordDiary;
