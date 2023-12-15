import CaseMainContext from "./CaseMainContext";
import CasePicture from "./CasePicutre";
import CaseTitle from "./CaseTitle";

function CaseContainer() {
  return (
    <>
      <div className="p-4 md:p-8">
        <div className="h-auto md:h-[704px] w-full rounded-3xl shadow-md">
          <CaseTitle title="5374.jp" color="bg-[#FFC7C7]" />
          <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-20 mt-8 space-x-12 space-y-4 md:space-y-0 md:space-x-36">
            <CasePicture picture="/5374.png" link="http://5374.jp/"/>
            <CaseMainContext text="あああああああああああああああああああああああああああああああああああああああああああああああああああ" />
          </div>
        </div>
      </div>
      <div className="p-4 md:p-8">
        <div className="h-auto md:h-[704px] w-full rounded-3xl shadow-md">
          <CaseTitle title="地域解決マッチング箱" color="bg-[#FFE2E2]" />
          <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-20 mt-8 space-x-12 space-y-4 md:space-y-0 md:space-x-36">
            <CasePicture picture="/5374.png" link="https://kanazawa.ha4go.net/"/>
            <CaseMainContext text="あああああああああああああああああああああああああああああああああああああああああああああああああああ" />
          </div>
        </div>
      </div>
      <div className="p-4 md:p-8">
        <div className="h-auto md:h-[704px] w-full rounded-3xl shadow-md">
          <CaseTitle title="のとノットアローン" color="bg-[#8785A2]" />
          <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-20 mt-8 space-x-12 space-y-4 md:space-y-0 md:space-x-36">
            <CasePicture picture="/5374.png" link="http://noto.not-alone.jp/"/>
            <CaseMainContext text="あああああああああああああああああああああああああああああああああああああああああああああああああああ" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseContainer;
