import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "부엉이게임 | 두뇌 서바이벌 게임",
  description:
    "모두가 주인공이 되는 두뇌 서바이벌. 전략, 협상, 배신. 당신의 선택이 결과를 바꿉니다.",
  openGraph: {
    title: "부엉이게임 | 두뇌 서바이벌 게임",
    description:
      "모두가 주인공이 되는 두뇌 서바이벌. 전략, 협상, 배신. 당신의 선택이 결과를 바꿉니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
