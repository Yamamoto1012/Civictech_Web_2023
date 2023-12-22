import { Header } from "@/ui/Header";
import CaseCard from "./CaseCard";

export default function CasePage() {
  return (
    <div className="p-4">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">シビックテックの事例</h1>
          <p className="mt-2 text-xl">実際のプロジェクトや取り組みを通じて、シビックテックの影響力を探ります。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <CaseCard
            title="台風リアルタイム・ウォッチャー"
            description="気象庁が提供する台風等の災害情報と、ソーシャルメディア上の災害情報をリアルタイムにマッシュアップするコンテンツ"
            imageUrl="/thphon.png"
            linkUrl="https://typhoon.mapping.jp/"
          />
          <CaseCard
            title="さっぽろ保育園マップ"
            description="札幌市において保育園を探すための悩みを解決するために開発されたマップアプリ"
            imageUrl="/sapporo.png"
            linkUrl="https://papamama.codeforsapporo.org/"
          />
          <CaseCard
            title="4919 for Ikoma"
            description="成長期の小中学生が毎日食べる給食にフォーカスを当て、子供の食育をサポートするアプリ"
            imageUrl="/4919.png"
            linkUrl="https://4919.jp/"
          />
          <CaseCard
            title="ちばレポ"
            description="千葉市内で起きている地域の課題を市民がレポートするアプリ"
            imageUrl="/chiba.png"
            linkUrl="https://www.city.chiba.jp/shimin/shimin/kohokocho/chibarepo.html"
          />
          <CaseCard
            title="福岡市PM2.5ダイヤル"
            description="市内9カ所の最新のPM2.5測定値と、当日のPM2.5予測情報を自動音声で伝える"
            imageUrl="/fukuoka.png"
            linkUrl="https://www.city.fukuoka.lg.jp/kankyo/k-hozen/life/kankyohozen/PM25dial.html"
          />
          <CaseCard
            title="新型コロナウイルス感染症対策サイト"
            description="東京都が3月4日にリリースした新型コロナウイルス感染症対策サイト"
            imageUrl="/covid.png"
            linkUrl="https://corona.go.jp/"
          />
          <CaseCard
            title="会津若松市消火栓マップ"
            description="スマートフォンやパソコンの位置情報をもとに、Google マップ上に周囲の消火栓や防火水槽を表示する"
            imageUrl="/aizu.png"
            linkUrl="https://aizu.io/app_list/hydrant/"
          />
          <CaseCard
            title="ガッコム安全ナビ"
            description="全国の自治体や警察から配信される事件・事故情報を、地図・アバター・アイコン・グラフなどで確認できる無料の不審者・治安情報サービス"
            imageUrl="/gacom.png"
            linkUrl="https://www.gaccom.jp/safety/"
          />
        </div>
      </div>
    </div>
  );
}
