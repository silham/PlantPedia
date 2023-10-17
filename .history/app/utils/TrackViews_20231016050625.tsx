import { useEffect, useState } from "react";

const ViewTracker = (props: { id: string }) => {
  const [apiCalled, setApiCalled] = useState(false);
  useEffect(() => {
    if (!apiCalled) {
      const fetchViews = async () => {
        const response = await fetch(`/api/views?id=${props.id}`);
        const view = await response.json();
        console.log(view);
      };
      fetchViews();
    }
  }, [props.id]);

  return null;
};

export default ViewTracker;
