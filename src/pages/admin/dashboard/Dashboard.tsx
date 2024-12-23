import DashboardStats from "../../../components/_admin/admin-overviews/DashboardStats";
import AdminBreadcrumbs from "../../../components/common/AdminBreadcrumbs";
import RecentOrderList from "../order-list/RecentOrderList";

const Dashboard = () => {
  return (
    <section>
      <AdminBreadcrumbs pageTitle="Overview" />
      <DashboardStats />
      <RecentOrderList />
    </section>
  );
};

export default Dashboard;
