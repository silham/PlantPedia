interface Props {
  params: { id: string };
}

const Plants = ({ params: { id } }: Props) => {
  return <div>{id.replace(/-/g, " ")}</div>;
};

export default Plants;
