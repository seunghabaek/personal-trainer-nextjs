import { ReactElement } from "react";
import PersonalLayout from "@/components/layout/PersonalLayout";
import type { NextPageWithLayout } from "../_app";
import WeeklyReserve from "../../components/WeeklyReserve";
import RecordDiary from "@/components/RecordDiary";

const Home: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto w-[375px] h-[829px] bg-white">
      <div className="container mx-auto w-[375px] h-[191px] bg-[#0168ff]"></div>
      <WeeklyReserve />
      <br />
      <RecordDiary />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PersonalLayout>{page}</PersonalLayout>;
};

export default Home;
