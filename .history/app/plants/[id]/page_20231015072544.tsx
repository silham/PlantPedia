import { Navbar } from "@/app/components/Nav";
interface Props {
  params: { id: string };
}

const Plant = ({ params: { id } }: Props) => {
  const s_name = id.replace(/-/g, " ");
  const s_name_1 = s_name[0].charAt;
  return <div>{s_name}</div>;
};

export default Plant;
