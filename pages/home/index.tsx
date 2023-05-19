import type { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import PersonalLayout from "@/components/layout/PersonalLayout";
import type { NextPageWithLayout } from "../_app";
import WeeklyReserve from "../../components/WeeklyReserve";

const Home: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto w-[375px] h-[829px] bg-white">
      <div className="container mx-auto w-[375px] h-[191px] bg-[#0168ff]"></div>
      <WeeklyReserve />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PersonalLayout>{page}</PersonalLayout>;
};

export default Home;
