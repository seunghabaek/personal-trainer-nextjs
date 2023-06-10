import { useState } from "react";
import DiaryModal from "./DiaryModal";
import Image from "next/image";

const RecordDiary = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const [showModal, setShowModal] = useState<Boolean>(false);

  const clickModal = () => setShowModal(!showModal);

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
        <button onClick={clickModal}>
          <Image src="/plusmark.svg" alt="me" width="34" height="34" />
        </button>
        {showModal && <DiaryModal clickModal={clickModal} />}
      </p>
    </div>
  );
};

export default RecordDiary;
