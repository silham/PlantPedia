interface Props {
  params: { id: string };
}

const Plants = ({ params: { id } }: Props) => {
  return <div>{id}</div>;
};

export default Plants;
