import Chart from "../../component/chart/Chart";
import FeaturedInfo from "../../component/featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from "../../dummyData";
import Widgetsm from "../../component/widgetsm/Widgetsm";
import WidgetLg from "../../component/widgetlg/WidgetLg";


export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
      <Widgetsm/>
      <WidgetLg/>


      </div>
      
    </div>
  );
}