import Analytics from "@/components/Charts/Analytics";
import LocationResponseTime from "@/components/Charts/LocationResponseTime";
import UniqueVisitors from "@/components/Charts/UniqueVisitors";
import VisitorStatistics from "@/components/Charts/VisitorStatistics";

const AdminDashboard = () => {
  return (
    <>
      <Analytics />
      <UniqueVisitors />
      <VisitorStatistics />
      <LocationResponseTime />
    </>
  );
};

export default AdminDashboard;
