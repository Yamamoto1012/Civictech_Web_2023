import CaseMainContext from "./CaseMainContext";
import CasePicture from "./CasePicutre";
import CaseTitle from "./CaseTitle";

function CaseContainer() {
  return (
    <>
      <div className="p-4 md:p-8">
        <div className="h-auto md:h-[704px] w-full rounded-3xl shadow-md">
          <CaseTitle title="5374.jp" color="bg-[#FFC7C7]" />
          <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-20 mt-8 space-y-4 md:space-y-0 md:space-x-36">
            <CasePicture picture="/5374.png" link="http://5374.jp/"/>
            <CaseMainContext text="5374.jpは、地域のゴミの分別と収集日を自動で表示するというシンプルなアプリです。" />
          </div>
        </div>
      </div>
      <div className="p-4 md:p-8">
        <div className="h-auto md:h-[704px] w-full rounded-3xl shadow-md">
          <CaseTitle title="地域解決マッチング箱" color="bg-[#FFE2E2]" />
          <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-20 mt-8 space-y-4 md:space-y-0 md:space-x-36">
            <CasePicture picture="/hash5.png" link="https://kanazawa.ha4go.net/"/>
            <CaseMainContext text="地域解決マッチング箱は、自分たちの周りの地域課題について、課題を持つ方々と、解決に向けて一緒に取り組んでみたい方々が集い、ディスカッションを行い、解決に向けた協働を行うためのプラットフォームです。" />
          </div>
        </div>
      </div>
      <div className="p-4 md:p-8">
        <div className="h-auto md:h-[704px] w-full rounded-3xl shadow-md">
          <CaseTitle title="のとノットアローン" color="bg-[#8785A2]" />
          <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-20 mt-8 space-y-4 md:space-y-0 md:space-x-36">
            <CasePicture picture="/noto.png" link="http://noto.not-alone.jp/"/>
            <CaseMainContext text="のとノットアローンは、奥能登で孤立しがちな子育てママの手をテクノロジーの力でで繋ぎたいという目的で作られたサービスです。" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseContainer;
