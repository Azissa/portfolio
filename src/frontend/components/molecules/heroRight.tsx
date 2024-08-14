import { PreTitle } from "../elements/preTitle";
import { Nama } from "../elements/nama";
import { Paragraf } from "../elements/paragraf";

export const HeroRight = () => {
  return (
    <>
      <div className="text-purple-100 ">
        <PreTitle />
        <Nama title="nama home" content="Azis Satya Agni" />
        <Paragraf
          title=""
          content="A vocational high school student majoring in Software Engineering with an interest in web development. I am proficient in HTML, CSS, JavaScript, and frameworks like React. Additionally, I am learning Firebase for backend development."
        />
      </div>
    </>
  );
};
