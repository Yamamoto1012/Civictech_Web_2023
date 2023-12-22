import { Header } from "@/ui/Header";
import CaseCard from "./CaseCard";

export default function CasePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">シビックテックの事例</h1>
          <p className="mt-2 text-xl">実際のプロジェクトや取り組みを通じて、シビックテックの影響力を探ります。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* 事例のカード1 */}
          <CaseCard
            title="台風リアルタイム・ウォッチャー"
            description="気象庁が提供する台風等の災害情報と、ソーシャルメディア上の災害情報をリアルタイムにマッシュアップするコンテンツ"
            imageUrl="/5374.png"
            linkUrl="https://example.com/link1"
          />

          {/* 事例のカード2 */}


          {/* 追加の事例カード */}
        </div>
      </div>
    </>
  );
}
