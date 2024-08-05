import image from "../../../assets/img/image.png";

export const Gambar = () => {
  return (
    <>
      <div className="w-70 h-80 ">
        <img
          src={image}
          className="object-contain w-full h-full rounded-full border-2 border-black outline outline-white outline-2 outline-offset-8"
          alt=""
        />
      </div>
    </>
  );
};

