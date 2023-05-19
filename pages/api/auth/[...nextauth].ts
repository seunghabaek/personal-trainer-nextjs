import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
// import prisma from "../../../lib/prismadb";

const facebookId: string = process.env.FACEBOOK_CLIENT_ID!;
const facebookKey: string = process.env.FACEBOOK_CLIENT_SECRET!;
const googleId: string = process.env.GOOGLE_CLIENT_ID!;
const googleKey: string = process.env.GOOGLE_CLIENT_SECRET!;
const kakaoId: string = process.env.KAKAO_CLIENT_ID!;
const kakaoKey: string = process.env.KAKAO_CLIENT_SECRET!;
const naverId: string = process.env.NAVER_CLIENT_ID!;
const naverKey: string = process.env.NAVER_CLIENT_SECRET!;

const facebookCustomProvider = FacebookProvider({
  clientId: facebookId,
  clientSecret: facebookKey,
});

facebookCustomProvider.style = {
  logo: "/facebook.svg",
  logoDark: "/facebook-dark.svg",
  bg: "#fff",
  text: "#006aff",
  bgDark: "#006aff",
  textDark: "#fff",
};

const googleCustormProvider = GoogleProvider({
  clientId: googleId,
  clientSecret: googleKey,
});

googleCustormProvider.style = {
  logo: "https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/google.svg",
  logoDark:
    "https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/google.svg",
  bgDark: "#fff",
  bg: "#fff",
  text: "#000",
  textDark: "#000",
};

const kakaoCustomProvider = KakaoProvider({
  clientId: kakaoId,
  clientSecret: kakaoKey,
});

kakaoCustomProvider.style = {
  logo: "https://www.kakaocorp.com/page/favicon.ico",
  logoDark: "https://www.kakaocorp.com/page/favicon.ico",
  bgDark: "#FEE500",
  bg: "#FEE500",
  text: "#191919",
  textDark: "#191919",
};

const naverCustomProvider = NaverProvider({
  clientId: naverId,
  clientSecret: naverKey,
});

naverCustomProvider.style = {
  logo: "https://logoproject.naver.com/favicon.ico",
  logoDark: "https://logoproject.naver.com/favicon.ico",
  bgDark: "#2DB400",
  bg: "#2DB400",
  text: "#FFFFFF",
  textDark: "#FFFFFF",
};

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    // FacebookProvider({
    //   clientId: facebookId,
    //   clientSecret: facebookKey,
    // }),
    facebookCustomProvider,
    googleCustormProvider,
    // KakaoProvider({
    //   clientId: kakaoId,
    //   clientSecret: kakaoKey,
    // }),
    kakaoCustomProvider,
    // NaverProvider({
    //   clientId: naverId,
    //   clientSecret: naverKey,
    // }),
    naverCustomProvider,
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
