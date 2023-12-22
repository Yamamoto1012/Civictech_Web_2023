import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenmaru = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "CivicTech Web",
  description: "シビックテックについての情報を発信するサイトです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={zenmaru.className}>{children}</body>
    </html>
  );
}
