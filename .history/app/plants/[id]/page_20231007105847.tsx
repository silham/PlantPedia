interface Props {
  params: { id: string };
}

const Plants = ({ params: { id } }: Props) => {
  const s_name = id.replace(/-/g, " ");
  return <div>{s_name}</div>;
};

export default Plants;