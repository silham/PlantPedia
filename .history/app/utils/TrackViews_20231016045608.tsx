import { useEffect } from "react";

const ViewTracker = ({ id: string }) => {
  useEffect(() => {
    const fetchViews = async () => {
      const response = await fetch(`/api/views?id=${id}`);
      const view = await response.json();
      console.log(view);
    };
    fetchViews();
  }, [id]);

  return null;
};

export default ViewTracker;
