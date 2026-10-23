import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "11y.cc.cd";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = protocol + "://" + host;

  return {
    metadataBase: new URL(origin),
    title: "11Y 影音馆｜EMBY 私人影音会员",
    description: "支持手机、平板、电脑与电视端的私人影音会员服务，提供 2 天免费试用。",
    openGraph: {
      type: "website",
      locale: "zh_CN",
      url: origin,
      siteName: "11Y 影音馆",
      title: "今晚，想看就看｜11Y 影音馆",
      description: "2 天免费试用，多端畅享清晰、连贯的私人影音体验。",
      images: [{
        url: origin + "/og.png",
        width: 1728,
        height: 910,
        alt: "11Y 影音馆 — 今晚，想看就看",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: "今晚，想看就看｜11Y 影音馆",
      description: "2 天免费试用，多端畅享清晰、连贯的私人影音体验。",
      images: [origin + "/og.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

