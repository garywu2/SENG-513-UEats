import Sidebar from "../../components/common/Sidebar";
// TODO display Sidebar only if user is logged in

const HomePage = () => {
  return (
    <div>
      <Sidebar />
      <h1>
        Login goes here. Sidebar should be not be displayed at this point, this
        depends on login state TBD
      </h1>
    </div>
  );
};

export default HomePage;
