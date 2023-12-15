import CaseMainContext from "./CaseMainContext";
import CasePicture from "./CasePicutre";
import CaseTitle from "./CaseTitle";

function CaseContainer() {
  return (
    <div className="p-4 md:p-8">
      <div className="h-auto md:h-[704px] w-full rounded-3xl shadow-md">
        <CaseTitle title="事例①" color="bg-[#FFC7C7]" />
        <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-20 mt-8 space-x-12 space-y-4 md:space-y-0 md:space-x-36">
          <CasePicture picture="/5374.png" />
          <CaseMainContext text="aaaaaaaaa" />
        </div>
      </div>
    </div>
  );
}

export default CaseContainer;
