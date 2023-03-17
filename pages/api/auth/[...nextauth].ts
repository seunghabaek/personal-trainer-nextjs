import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from "../../../lib/prismadb";

const facebookId: string = process.env.FACEBOOK_CLIENT_ID!;
const facebookKey: string = process.env.FACEBOOK_CLIENT_SECRET!;
const googleId: string = process.env.GOOGLE_CLIENT_ID!;
const googleKey: string = process.env.GOOGLE_CLIENT_SECRET!;
const kakaoId: string = process.env.KAKAO_CLIENT_ID!;
const kakaoKey: string = process.env.KAKAO_CLIENT_SECRET!;
const naverId: string = process.env.NAVER_CLIENT_ID!;
const naverKey: string = process.env.NAVER_CLIENT_SECRET!;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    FacebookProvider({
      clientId: facebookId,
      clientSecret: facebookKey,
    }),
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleKey,
    }),
    KakaoProvider({
      clientId: kakaoId,
      clientSecret: kakaoKey,
    }),
    NaverProvider({
      clientId: naverId,
      clientSecret: naverKey,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
