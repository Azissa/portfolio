interface namaProps {
  title: string;
  content: string;
}

export const Nama: React.FC<namaProps> = (props) => {
  return (
    <>
      <h1 className="pt-2 pb-2 font-bold text-4xl">{props.content}</h1>
    </>
  );
};
