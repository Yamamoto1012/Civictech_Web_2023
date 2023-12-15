import AboutContainer from "@/ui/AboutContainer";
import CaseContainer from "@/ui/CaseContainer";
import { Header } from "@/ui/Header";
import { HeroContainer } from "@/ui/HeroContainer";

export default function Home() {
  return (
    <div className="p-4">
      <Header />
      <HeroContainer />
      <AboutContainer />
      <CaseContainer />
    </div>
  )
}
