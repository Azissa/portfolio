import { Logo } from "../elements/logo";
import { Label } from "../elements/label";

export const Navbar = () => {
  return (
    <>
      <div className="bg-biru-tua-bet flex justify-between items-center p-4 drop-shadow-xl fixed w-full">
        <div className="flex-1">
          <Logo />
        </div>
        <div>
          <Label />
        </div>
      </div>
    </>
  );
};

