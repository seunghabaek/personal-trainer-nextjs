import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import authOptions from "../api/auth/[...nextauth]";
import Image from "next/image";
import { Button } from "@mui/material";
import { LoginButton } from "@/components/loginButton";

const SignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="container mx-auto w-[375px] h-[829px] bg-white">
      <div className="container mx-auto w-[375px] h-[545px] bg-white">
        <div className="container mx-auto relative top-60 w-[170px] h-[40px] text-[36px] font-bold">
          <p className="text-[43px] font-bold text-center">
            <span className="text-[43px] font-bold text-center text-[#101828]">
              Fit
            </span>
            <span className="text-[43px] font-bold text-center text-[#2cf79f]">
              .
            </span>
            <span className="text-[43px] font-bold text-center text-[#101828]">
              lendar
            </span>
          </p>
          <p className=" text-center w-[294px] text-lg text-center text-[#101828]">
            오늘도 핏랜더와 힘차게 오운완
          </p>
        </div>
      </div>
      <LoginButton />
      <Button>test</Button>
      <Button
        onClick={() => signIn("kakao")}
        className="container mx-auto relative top-20 w-[337px] h-[50px] rounded-[21px] bg-[#e9cd00] border border-[#e9cd00]"
      >
        <Image src="/kakao.svg" alt="me" width="30" height="30" />{" "}
        <p className="w-[111px] text-[15px] font-medium text-left text-black">
          카카오로 로그인
        </p>
      </Button>
      <Button
        onClick={() => signIn("naver")}
        className="container mx-auto relative top-20 w-[337px] h-[50px] rounded-[21px] bg-[#06be34] border border-[#199c3a]"
      >
        <Image src="/naver.svg" alt="me" width="30" height="30" />
        <p className="w-[122px] text-[15px] font-medium text-left text-white">
          NAVER로 로그인
        </p>
      </Button>
      <Button
        onClick={() => signIn("google")}
        className="container mx-auto relative top-20 w-[337px] h-[50px] rounded-[21px] bg-black border border-black"
      >
        <Image src="/google.svg" alt="me" width="30" height="30" />
        <p className="w-[122px] text-[15px] font-medium text-left text-white">
          구글로 로그인
        </p>
      </Button>
      <Button
        onClick={() => signIn("facebook")}
        className="container mx-auto relative top-20 w-[337px] h-[50px] rounded-[21px] bg-neutral-100 border border-[#dcdcdc]"
      >
        <Image src="/facebook.svg" alt="me" width="30" height="30" />
        <p className="w-[136px] text-[15px] font-medium text-left text-black">
          페이스북으로 로그인
        </p>
      </Button>

      <div className="container mx-auto w-[375px] h-[284] ">
        <div className="container mx-auto relative top-20 w-[211px] h-[31px] text-black ">
          <div className="flex px-10 w-[202px] h-[4 6px] relative top-5 gap-2"></div>
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
