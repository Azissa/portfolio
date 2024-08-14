import { HeroRight } from "../molecules/heroRight";
import { HeroLeft } from "../molecules/heroLeft";
import ContributionGraph from "../molecules/contributionGraph";

const Section1 = () => {
  return (
    <>
      <section className="pt-32 grid grid-cols-3 gap-4 ">
        <div className="flex justify-center pl-16">
          <HeroLeft />
        </div>
        <div className="flex items-center col-span-2 ">
          <HeroRight />
        </div>
      </section>
      <ContributionGraph />
    </>
  );
};

export default Section1;
