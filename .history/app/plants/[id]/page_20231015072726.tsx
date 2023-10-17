import { Navbar } from "@/app/components/Nav";
interface Props {
  params: { id: string };
}

const Plant = ({ params: { id } }: Props) => {
  const s_name = id.replace(/-/g, " ");
  return <div className="first-letter:capitalize">{s_name}</div>;
};

export default Plant;