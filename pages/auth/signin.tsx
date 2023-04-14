import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import authOptions from "../api/auth/[...nextauth]";

const SignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="container mx-auto w-[375px] h-[829px] bg-white">
      {/* <div className="w-[296px] h-[46px] rounded-[30px] bg-[#0f0f0f]" /> */}
      <div className="container mx-auto w-[375px] h-[545px] bg-[#0168ff]">
        <div className="container mx-auto relative top-60 w-[170px] h-[40px] text-[36px] font-bold">
          <span className="text-[36px] font-bold  text-white">Fit</span>
          <span className="text-[36px] font-bold  text-[#00d1ff]">.</span>
          <span className="text-[36px] font-bold  text-white">lendar</span>
        </div>
      </div>
      <div className="container mx-auto w-[375px] h-[284]">
        <div className="container mx-auto relative top-20 w-[211px] h-[31px] text-black">
          지금 가입하고 캘린더로 수업잡기
        </div>
        <div className="container mx-auto relative top-20">
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name} style={{ marginBottom: 0 }}>
                <button onClick={() => signIn(provider.id)}>
                  {provider.name}
                </button>
              </div>
            ))}
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
