import { Navbar } from "../molecules/navbar";
import { Logo } from "../elements/logo";

const Header = () => {
  return (
    <>
      <header className="flex justify-center mt-5 ">
        <div className="flex-1 pl-3 mt-2">
          <Logo />
        </div>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
