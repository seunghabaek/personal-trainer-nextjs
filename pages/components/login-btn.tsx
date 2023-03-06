import { useSession, signIn, signOut } from "next-auth/react";

export const LoginBtn = () => {
  const { data: session } = useSession();
  const user: string = session.user;
  if (session) {
    return (
      <>
        Signed in as {user.email} <br />
        <button className="bg-sky-200" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
        onClick={() => signIn("google")}
      >
        Sign in with Google
        {/* <img src="https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/facebook.svg" /> */}
      </button>
      <button
        className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 "
        onClick={() => signIn("facebook")}
      >
        Sign in with Facebook
      </button>
      <button
        className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
        onClick={() => signIn("naver")}
      >
        Sign in with Naver
      </button>
      <button
        className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
        onClick={() => signIn("kakao")}
      >
        Sign in with Kakao
      </button>
    </>
  );
};
