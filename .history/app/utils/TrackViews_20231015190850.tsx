const ViewTracker = (id: string) => {
  useEffect(() => {
    fetchViews(id);
  }, [id]);

  return null;
};

export default ViewTracker;
