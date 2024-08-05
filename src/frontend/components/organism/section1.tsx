import { HeroRight } from "../molecules/heroRight";
import { HeroLeft } from "../molecules/heroLeft";

const Section1 = () => {
  return (
    <>
      <section className="pt-32 grid grid-cols-3 gap-4 ">
        <div className="flex justify-center pl-16">
          <HeroLeft />
        </div>
        <div className="flex items-center col-span-2 pl-4">
          <HeroRight />
        </div>
      </section>
    </>
  );
};

export default Section1;
