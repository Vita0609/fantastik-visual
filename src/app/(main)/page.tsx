import { ComingSoon } from "./coming-soon";
import { Pass } from "./pass";
import { Hero } from "./hero";
import { Vision } from "./vision";
import { Profit } from "./profit";
import { Roadmap } from "./roadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-[1480px] px-4 lg:px-5 xl:mx-auto">
        <Pass />
        <Profit />
        <Vision />
        <ComingSoon />
      </div>
      <Roadmap />
    </>
  );
}