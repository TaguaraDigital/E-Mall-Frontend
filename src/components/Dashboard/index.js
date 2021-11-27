import {
  DashboardCard,
  DashboardContainer,
  DashboardLink,
} from "./Dashboard.Style";
import image1 from "../../assets/image/pictures/dashboard1.jpg";
import image2 from "../../assets/image/pictures/dashboard2.jpg";
import image3 from "../../assets/image/pictures/dashboard3.jpg";
import image4 from "../../assets/image/pictures/dashboard4.jpg";
const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardCard>
        <DashboardLink to="/invoice">
          <img src={image1} alt="image1" />
        </DashboardLink>
      </DashboardCard>
      <DashboardCard>
        <DashboardLink to="/updatecliente">
          <img src={image2} alt="image2" />
        </DashboardLink>
      </DashboardCard>
      <DashboardCard>
        <DashboardLink to="/">
          <img src={image3} alt="image3" />
        </DashboardLink>
      </DashboardCard>
      <DashboardCard>
        <DashboardLink to="/">
          <img src={image4} alt="image4" />
        </DashboardLink>
      </DashboardCard>
    </DashboardContainer>
  );
};

export default Dashboard;
