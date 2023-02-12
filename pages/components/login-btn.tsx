import { useSession, signIn, signOut } from "next-auth/react";

export const LoginBtn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="bg-sky-200" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
};
