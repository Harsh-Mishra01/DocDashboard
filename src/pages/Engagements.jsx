import React, { useState } from "react";
import VisitDetails from "../components/EngagementsComponents/VisitDetails";
import CampaignDetails from "../components/EngagementsComponents/CampaignDetails";
import SamplesPrecured from "../components/EngagementsComponents/SamplesPrecured";
import BrandDetialing from "../components/EngagementsComponents/BrandDetailingTime";
import DigitalCampaign from "../components/EngagementsComponents/DigitalCampaign";
import DoctorProfile from "../components/DoctorsProfile";
import Navigation from "../components/NavigationButtons";

export default function Engagements() {
    const [activeItem, setActiveItem] = useState("viewdetails");

    const renderTable = () => {
        if (activeItem === "viewdetails") {
            return <VisitDetails />;
        } else if (activeItem === "campaigndetails") {
            return <CampaignDetails />;
        }
        else if (activeItem === "samplesprecured") {
            return <SamplesPrecured activeItem={activeItem} />;
        }
        else if (activeItem === "branddetialing") {
            return <BrandDetialing activeItem={activeItem} />;
        }
        else if (activeItem === "digitalcampaign") {
            return <DigitalCampaign />;
        }
        else {
            return <VisitDetails />;
        }
    };

//console.log("Active Items 00909:", activeItem)
    return (
        <>
            <div className="grid grid-cols-[1fr_7fr]  h-screen ">
                <div className="flex mx-2 ">
                    <DoctorProfile
                        path={window.location.pathname}
                        setActiveItem={setActiveItem}
                        activeItem={activeItem}
                    />
                </div>
                <div className="md:h-screen h-screen  ">
                <div className="m-2">
                        <Navigation/>
                    </div>
                    <div className="m-2">
                        {renderTable()}
                        {/* <DemoTable/> */}
                    </div>
                </div>
            </div>
        </>
    )

}