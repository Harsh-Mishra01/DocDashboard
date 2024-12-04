import React from "react";
import CampaignDetailsAccordian from "../CampaignDetailsAccordian";
import marketing from "/images/marketing.gif";




export default function CampaignDetails() {



    const accordionItems = [
        {
          title: "Section 1",
          content: "Coming Soon....",
        },
        {
          title: "Section 2",
          content: "Coming Soon....",
        },
        {
          title: "Section 3",
          content: "Coming Soon....",
        },
      ];
    return (
        <>
          <div className="bg-white flex flex-col shadow-2xl border-1 border-slate-200 rounded-lg p-4 m-4  h-screen md:h-auto">
                <h2 className="text-4xl font-bold ml-4 flex items-center mb-4">
                <img
                        className="w-20 ml-2"
                        src={marketing}
                        alt="edupng"
                        />
                        <p>Campaign Details</p>
                </h2>
                <div className="clinics-table overflow-y-auto custom-scrollbar flex-1 md:max-h-[500px]">
            
                <CampaignDetailsAccordian items={accordionItems}></CampaignDetailsAccordian>
              </div>
          </div>
        </>
      );
    
}