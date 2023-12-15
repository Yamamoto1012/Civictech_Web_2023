import { Header } from "@/ui/Header";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"; // 例としてInfoアイコンをインポート
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="p-4">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <InfoOutlinedIcon className="mx-auto text-6xl" />
          <h1 className="text-4xl font-bold mt-4">シビックテック</h1>
          <p className="mt-2 text-xl">
            シビックテックとは、技術を活用して市民生活を向上させる取り組みです。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* セクション1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">セクションのタイトル</h2>
            <p>ここにセクションの内容を記述します。</p>
          </div>

          {/* セクション2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">中部地方の関連する団体</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {/* 団体のカード */}
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500">
                <Link href="https://www.codeforniigata.org/">
                  <h3 className="text-lg font-semibold mb-2 ">
                    Code for Niigata
                  </h3>
                </Link>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500">
                <Link href="https://code4yamanashi.jimdosite.com/">
                  <h3 className="text-lg font-semibold mb-2 ">
                    Code for Yamanashi
                  </h3>
                </Link>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500">
                <Link href="https://codeforkanazawa.org/">
                  <h3 className="text-lg font-semibold mb-2 ">
                    Code for Kanazawa
                  </h3>
                </Link>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500">
                <Link href="http://code4takaoka.org/">
                  <h3 className="text-lg font-semibold mb-2 ">
                    Code for TAKAOKA
                  </h3>
                </Link>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500">
                <Link href="https://code4toyama.studio.site/">
                  <h3 className="text-lg font-semibold mb-2">
                    Code for Toyama City
                  </h3>
                </Link>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500">
                <Link href="https://www.codefornanto.org/">
                  <h3 className="text-lg font-semibold mb-2">Code for NANTO</h3>
                </Link>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500">
                <Link href="https://github.com/code4fukui?language=html">
                  <h3 className="text-lg font-semibold mb-2 ">
                    Code for FUKUI
                  </h3>
                </Link>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500">
                <Link href="https://c4.sabae.cc/">
                  <h3 className="text-lg font-semibold mb-2">Code for SABAE</h3>
                </Link>
              </div>
            </div>
          </div>

          {/* 追加セクションはここに */}
        </div>
      </div>
    </div>
  );
}
