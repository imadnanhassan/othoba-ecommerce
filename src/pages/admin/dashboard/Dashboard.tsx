import DashboardStats from "../../../components/_admin/admin-overviews/DashboardStats";
import AdminBreadcrumbs from "../../../components/common/AdminBreadcrumbs";
import OrderList from "../order-list/OrderList";

const Dashboard = () => {
  return (
    <section>
      <AdminBreadcrumbs pageTitle="Overview" />
      <DashboardStats />
      <OrderList />
    </section>
  );
};

export default Dashboard;
