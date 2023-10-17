import { useEffect } from "react";

const ViewTracker = (props: { id: string }) => {
  useEffect(() => {
    const fetchViews = async () => {
      const response = await fetch(`/api/views?id=${props.id}`);
      const view = await response.json();
      console.log(view);
    };
    fetchViews();
  }, [props.id]);

  return null;
};

export default ViewTracker;
