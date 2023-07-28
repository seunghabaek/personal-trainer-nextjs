import { SearchModalBox, SearchModalContent } from "./ModalStyle";
import Image from "next/image";
import CustomizedSelects from "./ClientSearch/SearchCard";

const DiaryModal = (props) => {
  const { clickModal } = props;

  return (
    <SearchModalBox onClick={clickModal}>
      <SearchModalContent onClick={(e) => e.stopPropagation()}>
        <p className="w-[323px] h-[362px]">
          <button onClick={clickModal}>
            <Image src="/xmark.svg" alt="me" width="24" height="24" />
          </button>
          <div className="flex">
            <CustomizedSelects />
            <button onClick={clickModal}>
              <Image src="/index.svg" alt="me" width="17" height="17" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-start w-[275px] h-0 absolute left-[61px] top-[385px] gap-2"></div>
        </p>
        <button>확인</button>
      </SearchModalContent>
    </SearchModalBox>
  );
};

export default DiaryModal;
