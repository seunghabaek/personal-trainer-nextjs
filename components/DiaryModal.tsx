import { SearchModalBox, SearchModalContent } from "./ModalStyle";
import Image from "next/image";

const DiaryModal = (props) => {
  const { clickModal } = props;

  return (
    <SearchModalBox onClick={clickModal}>
      <SearchModalContent onClick={(e) => e.stopPropagation()}>
        <p className="w-[323px] h-[362px]">
          <button onClick={clickModal}>
            <Image src="/xmark.svg" alt="me" width="24" height="24" />
          </button>
          <p className="absolute left-[61px] top-[284px] text-[13px] text-left text-white">
            회원검색
          </p>
          <p className="absolute left-[61px] top-[364px] text-[9px] text-left text-white">
            최근 검색
          </p>
          <p className="absolute left-[83px] top-[395px] text-[11px] text-left text-white">
            박소영 회원님
          </p>
          <p className="absolute left-[83px] top-[429px] text-[11px] text-left text-white">
            백승하 회원님
          </p>
          <p className="absolute left-[83px] top-[462px] text-[11px] text-left text-white">
            김한섭 회원님
          </p>
          <p className="absolute left-[223px] top-[396px] text-[9px] text-left text-[#2cf79f]">
            2023. 04. 26 am 08:00
          </p>
          <p className="absolute left-56 top-[430px] text-[9px] text-left text-[#2cf79f]">
            2023. 05. 01 am 09:30
          </p>
          <p className="absolute left-[226px] top-[463px] text-[9px] text-left text-[#2cf79f]">
            2023. 05. 03 am 11:00
          </p>
          <p className="absolute left-[61px] top-[266px] text-[9.5px] text-left text-[#2cf79f]">
            2023년 05월 08일 PM 13:00
          </p>
          <p className="absolute left-[184px] top-[564px] text-[13px] text-center text-[#2cf79f]">
            확인
          </p>
          <svg
            width={17}
            height={17}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[254.5px] top-[314.5px]"
            preserveAspectRatio="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5715 6.94231C11.5715 7.55016 11.4518 8.15206 11.2192 8.71363C10.9866 9.27521 10.6457 9.78547 10.2159 10.2153C9.78613 10.6451 9.27591 10.986 8.71439 11.2187C8.15286 11.4513 7.55102 11.571 6.94323 11.571C6.33543 11.571 5.73359 11.4513 5.17206 11.2187C4.61054 10.986 4.10032 10.6451 3.67055 10.2153C3.24077 9.78547 2.89986 9.27521 2.66726 8.71363C2.43467 8.15206 2.31496 7.55016 2.31496 6.94231C2.31496 5.71471 2.80258 4.53738 3.67055 3.66934C4.53851 2.80129 5.71573 2.31362 6.94323 2.31362C8.17072 2.31362 9.34794 2.80129 10.2159 3.66934C11.0839 4.53738 11.5715 5.71471 11.5715 6.94231ZM10.9652 12.6017C9.54643 13.6105 7.80048 14.0494 6.07337 13.8315C4.34626 13.6135 2.76405 12.7546 1.6403 11.425C0.516544 10.0954 -0.0667269 8.39209 0.00607951 6.65265C0.0788859 4.91322 0.802456 3.26462 2.03339 2.03357C3.26432 0.802528 4.91277 0.0788931 6.65205 0.00608007C8.39133 -0.0667329 10.0945 0.51659 11.424 1.64044C12.7535 2.7643 13.6123 4.34666 13.8302 6.07392C14.0481 7.80119 13.6092 9.54729 12.6005 10.9662L16.6317 14.9962C16.7454 15.1022 16.8366 15.2299 16.8998 15.3719C16.9631 15.5138 16.9971 15.667 16.9998 15.8224C17.0026 15.9778 16.974 16.1321 16.9158 16.2762C16.8576 16.4203 16.771 16.5512 16.6611 16.6611C16.5512 16.771 16.4204 16.8576 16.2763 16.9158C16.1322 16.974 15.9779 17.0026 15.8225 16.9998C15.6672 16.9971 15.5139 16.9631 15.372 16.8998C15.2301 16.8366 15.1023 16.7454 14.9964 16.6317L10.9652 12.6017Z"
              fill="#2CF79F"
            />
          </svg>
          <div className="w-[188px] h-[25px] absolute left-[59.5px] top-[310.5px] rounded-[10px] bg-white" />
          <div className="flex flex-col justify-center items-start w-[275px] h-0 absolute left-[61px] top-[385px] gap-2">
            <svg
              width={277}
              height={2}
              viewBox="0 0 277 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M1 1L276 0.999976"
                stroke="#2CF79F"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-start w-[323px] h-0 absolute left-[35px] top-[543px] gap-2">
            <svg
              width={325}
              height={2}
              viewBox="0 0 325 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M1 1L324 0.999972"
                stroke="white"
                stroke-opacity="0.8"
                stroke-width="0.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-start w-[275px] h-0 absolute left-[61px] top-[419px] gap-2">
            <svg
              width={277}
              height={2}
              viewBox="0 0 277 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M1 1.00003L276 1.00001"
                stroke="#2CF79F"
                stroke-opacity="0.5"
                stroke-width="0.2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-start w-[275px] h-0 absolute left-[61px] top-[453px] gap-2">
            <svg
              width={277}
              height={2}
              viewBox="0 0 277 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M1 1.00003L276 1.00001"
                stroke="#2CF79F"
                stroke-width="0.2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-start w-[275px] h-0 absolute left-[61px] top-[486px] gap-2">
            <svg
              width={277}
              height={2}
              viewBox="0 0 277 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M1 1.00003L276 1.00001"
                stroke="#2CF79F"
                stroke-opacity="0.5"
                stroke-width="0.2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="w-[9px] h-[9px]">
            <svg
              width={9}
              height={9}
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[323.5px] top-[398.5px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4.5" fill="#D9D9D9" />
            </svg>
            <p className="w-[9px] h-2 absolute left-[324px] top-[399px] text-[6px] text-center text-[#0d0f14]">
              x
            </p>
          </div>
          <div className="w-[9px] h-[9px]">
            <svg
              width={9}
              height={9}
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[323.5px] top-[432.5px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4.5" fill="#D9D9D9" />
            </svg>
            <p className="w-[9px] h-2 absolute left-[324px] top-[433px] text-[6px] text-center text-[#0d0f14]">
              x
            </p>
          </div>
          <div className="w-[272px] h-[85px]">
            <svg
              width={9}
              height={9}
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[323.5px] top-[465.5px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="4.5" cy="4.5" r="4.5" fill="#D9D9D9" />
            </svg>
            <p className="w-[9px] h-2 absolute left-[324px] top-[466px] text-[6px] text-center text-[#0d0f14]">
              x
            </p>
            <div className="w-[18.38px] h-[18px]">
              <svg
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[60.5px] top-[393.5px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="8.04255" cy="8.04255" r="8.04255" fill="#2CF79F" />
              </svg>
              <img
                src="image-2.png"
                className="w-[18px] h-[18px] absolute left-[60.88px] top-[393.5px] object-cover"
              />
            </div>
            <div className="w-[18.38px] h-[18px]">
              <svg
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[60.5px] top-[427.5px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="8.04255" cy="8.04255" r="8.04255" fill="#00FFFF" />
              </svg>
              <img
                src="image-2.png"
                className="w-[18px] h-[18px] absolute left-[60.88px] top-[427.5px] object-cover"
              />
            </div>
            <div className="w-[18.38px] h-[18px]">
              <svg
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[60.5px] top-[460.5px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="8.04255" cy="8.04255" r="8.04255" fill="#BBBBBB" />
              </svg>
              <img
                src="image-2.png"
                className="w-[18px] h-[18px] absolute left-[60.88px] top-[460.5px] object-cover"
              />
            </div>
          </div>
        </p>
        <button>확인</button>
      </SearchModalContent>
    </SearchModalBox>
  );
};

export default DiaryModal;
