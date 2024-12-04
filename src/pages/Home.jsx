import DoctorProfile from "../components/DoctorsProfile";
import VisitFrequency from "../components/VisitFrequency";
import PotentialVsROI from "../components/PotentialVsROI";
import CampaignList from "../components/CurrentCamp";
import SuggestedTopics from "../components/SuggestedTopics";
import Preferences from "../components/Preferences";
import Navigation from "../components/NavigationButtons";
import BusinessImpactBarChart from "../components/BusinessImpactCharts";
import Dropdown from "../components/DropDown";
import { useState } from "react";
import SearchComponent from "../components/SearchBar";
import sc1 from "../../public/images/sc1.png";
import sc2 from "../../public/images/sc2.png";
import sc3 from "../../public/images/sc3.png";

const Home = () => {
  const initialPiechartData = [
    { name: "Potential", value: 85, color: "#07A241" }, 
    { name: "RCPA", value: 15, color: "#A7F3D0" }, 
  ];

  const initialBargraphData = [
    { month: "Jan", value: 8000 },
    { month: "Feb", value: 7000 },
    { month: "Mar", value: 6000 },
    { month: "Apr", value: 7000 },
    { month: "May", value: 5000 },
    { month: "Jun", value: 6000 },
    { month: "Jul", value: 7000 },
  ];

  

  const statsData=[
    {
      url:sc1,
      icon: <i className="fa-solid fa-user-group"></i>,
      title: 'Visit Frequency',
      details: ' 3V',
      details2: '2/3 on Jun\'23',
      color: 'bg-green-100',
    },
    {
      url:sc3,
      icon: <i className="fa-solid fa-calendar-day"></i>,
      title: 'Last Visit Date',
      details: " 29th Oct '24",
      details2: 'Jul 15, 2023',
      // color: 'bg-green-100',
      color: 'bg-cyan-100',
    },
    {
      url:sc2,
      icon: <i className="fa-solid fa-stopwatch"></i>,
      title: 'Focus Brands',
      details: ' Tonact, Gibtulios,Tonact, Gibtulios ',
      // color: 'bg-green-100',
      color: 'bg-yellow-100',
    },
  ];



  const [piechartData, setPiechartData] = useState(initialPiechartData);
  const [bargraphData, setBargraphData] = useState(initialBargraphData);
  return (
    <div className="grid grid-cols-[1fr_7fr]">
      <div className="flex justify-center gap-2 mx-2">
        <DoctorProfile path={window.location.pathname}/>
      </div>
      <div className="h-screen">
        <div className="roudned-lg flex flex-col gap-2 m-2 h-1/4 ">
          <div className="flex justify-center lg:h-14 md:h-20 mb-6">
            <SearchComponent />
            <Navigation />
          </div>
          <VisitFrequency statsData={statsData} />
        </div>
        <div className="grid lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-1 gap-2 m-2 h-2/5 ">
          <div className="shadow-xl border-2 border-slate-200 flex justify-evenly items-center flex-col rounded-lg">
            <Dropdown
              setPiechartData={setPiechartData}
              setBargraphData={setBargraphData}
            />
            <PotentialVsROI data={piechartData} />
          </div>
          <BusinessImpactBarChart data={bargraphData} />
          <div>
            <CampaignList name="Toncat" title="Title" isProcured={true} />
          </div>
        </div>
        <div className="h-1/4">
        <div className="grid grid-cols-[3fr_2fr] grid-rows-1 gap-2 m-2">
          <SuggestedTopics />
          <Preferences />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
