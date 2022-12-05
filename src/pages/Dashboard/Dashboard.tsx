type DashboardProps = {
  name: string;
};

const Dashboard = (props: DashboardProps) => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <div>Food Catalog with categories to filter</div>
      <div>Restaurant Catalog with "view all" button to Restaurants Page</div>
      <div>Recent Orders with "view all" button to Orders Page</div>
    </div>
  );
};

export default Dashboard;
