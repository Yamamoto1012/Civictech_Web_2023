import AboutCircle from "./AboutCircle";

export default function AboutContainer() {
  return (
    <div className="text-center p-8 md:px-8 shadow-3xl">
      <h3 className="text-3xl font-semibold mb-6">シビックテックについて</h3>
      <div className="flex flex-wrap justify-center gap-5 md:gap-14">
        <AboutCircle
          title="01"
          text="シビックテックは、テクノロジーを活用して、市民が政治や地域社会の問題に積極的に参加します。"
          color="bg-[#FFC7C7]"
        />
        <AboutCircle
          title="02"
          text="シビックテックは、公共サービスを効率化し、市民の生活の質を高めることを目指しています。"
          color="bg-[#FFE2E2]"
        />
        <AboutCircle
          title="03"
          text="シビックテックの目標の一つは、政府や地方自治体の透明性を高めることです。"
          color="bg-[#8785A2]"
        />
      </div>
    </div>
  );
}