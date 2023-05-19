import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import authOptions from "../api/auth/[...nextauth]";
import Image from "next/image";

const SignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="container mx-auto w-[375px] h-[829px] bg-white">
      <div className="container mx-auto w-[375px] h-[545px] bg-[#0168ff]">
        <div className="container mx-auto relative top-60 w-[170px] h-[40px] text-[36px] font-bold">
          <span className="text-[36px] font-bold  text-white">Fit</span>
          <span className="text-[36px] font-bold  text-[#00d1ff]">.</span>
          <span className="text-[36px] font-bold  text-white">lendar</span>
        </div>
      </div>
      <div className="container mx-auto w-[375px] h-[284] ">
        <div className="container mx-auto relative top-20 w-[211px] h-[31px] text-black ">
          지금 가입하고 캘린더로 수업잡기
          <div className="flex px-10 w-[202px] h-[46px] relative top-5 gap-2">
            <button onClick={() => signIn("google")}>
              <Image src="/google.svg" alt="me" width="30" height="30" />
            </button>
            <button onClick={() => signIn("facebook")}>
              <Image src="/facebook.svg" alt="me" width="30" height="30" />
            </button>
            <button onClick={() => signIn("naver")}>
              <Image src="/naver.svg" alt="me" width="30" height="30" />
            </button>
            <button onClick={() => signIn("kakao")}>
              <Image src="/kakao.svg" alt="me" width="30" height="30" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
