import React from "react";
import SamplesPrecuredTable from "./SamplePrecuredTable";
import DigitalCampaignsTable from "../tableComponents/DigitalCampaignsTable";
import marketing from "/images/social-marketing.gif";



export default function DigitalCampaign(props) {
  return (
    <>
      <>

        <div className="bg-white flex flex-col shadow-2xl border-1 border-slate-200 rounded-lg p-4 m-4  h-screen md:h-auto">
          <h2 className="text-4xl font-bold ml-4 mb-4 flex items-center">

            <img
              className="w-20 ml-3"
              src={marketing}
              alt="edupng"
              />
              <p>Digital Campaign</p>
          </h2>
          <div className="clinics-table overflow-y-auto custom-scrollbar flex-1 md:max-h-[500px]">
            <DigitalCampaignsTable></DigitalCampaignsTable>
          </div>
        </div>
      </>

    </>
  )

}