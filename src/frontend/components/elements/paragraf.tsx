interface namaProps {
  title: string;
  content: string;
}

export const Paragraf: React.FC<namaProps> = (props) => {
  return (
    <>
      <p className="text-lg pt-4 flex">{props.content}</p>
    </>
  );
};
