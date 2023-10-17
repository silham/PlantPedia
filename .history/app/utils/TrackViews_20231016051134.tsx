import { useEffect, useRef } from "react";

const ViewTracker = (props: { id: string }) => {
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      const fetchViews = async () => {
        initialized.current = true;
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
