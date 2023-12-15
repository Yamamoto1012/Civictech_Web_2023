import CaseMainContext from "./CaseMainContext";
import CasePicture from "./CasePicutre";
import CaseTitle from "./CaseTitle";

function CaseContainer() {
  return (
    <div>
      <div className="h-[704px] w-full rounded-3xl shadow-md">
        <CaseTitle title="事例①" color="bg-[#FFC7C7]" />
        <div>
          <CasePicture picture="/5374.png"/>
          <CaseMainContext />
        </div>
      </div>
    </div>
  );
}

export default CaseContainer;
