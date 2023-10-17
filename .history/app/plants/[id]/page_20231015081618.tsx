import { Navbar } from "@/app/components/Nav";
interface Props {
  params: { id: string };
}

export async function getServerSideProps(context) {
  try {
    // Your function here
    console.log("Page is loading...");
  } catch (error) {
    console.error(error);
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}

const Plant = ({ params: { id } }: Props) => {
  const s_name = id.replace(/-/g, " ");
  const viewsId = id.replace(/-/g, "_");

  return <div className="first-letter:capitalize">{s_name}</div>;
};

export default Plant;
