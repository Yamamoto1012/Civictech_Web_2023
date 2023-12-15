import AboutCircle from "./AboutCircle";

export default function AboutContainer() {
  return (
    <div className="text-center p-10 md:px-8 shadow-lg">
      <h3 className="text-3xl font-semibold mb-6">シビックテックについて</h3>
      <div className="flex flex-wrap justify-center gap-5 md:gap-14">
        <AboutCircle
          title="01"
          text="市民が行政と連携しながら、さまざまな社会的課題をデジタル技術やオープンデータを活用して解決する取り組みです"
          color="bg-[#FFC7C7]"
        />
        <AboutCircle
          title="02"
          text="公共サービスの利便性向上や市民参加型の地域社会の実現などによって、持持続可能な都市や地域の創出に貢献します"
          color="bg-[#FFE2E2]"
        />
        <AboutCircle
          title="03"
          text="アメリカで始まったた概念であり、日本でもスマートシティと相性がよく、コロナ禍などで社会環境が変化する中で注目されています"
          color="bg-[#8785A2]"
        />
      </div>
    </div>
  );
}