// index.html 역할
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "카카오 브레인 블로그 - 클론코드",
  description: "클론 코드를 통한 프로젝트",
  themeColor: "#000000",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="18932c563ca8c7600147e0f60244307d7b421797"
        />
        <link rel="canonical" href="https://kkobrain-six.vercel.app"></link>
        <meta
          name="google-site-verification"
          content="Q2bHOLs6jaFYy4NK_gCCdUCjf270wQ8zYE_nerDd7lw"
        />
        <GoogleAnalytics gaId="G-566YCW7S5D" />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
