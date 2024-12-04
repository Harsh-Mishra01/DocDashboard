import React from "react";
import SamplesPrecuredTable from "./SamplePrecuredTable";
import conversation from "/images/conversation.gif";


export default function BrandDetailing({ activeItem }) {
  console.log("Active Items main page:", activeItem);
  return (
      <div className="bg-white flex flex-col shadow-2xl border-1 border-slate-200 rounded-lg p-4 m-4  h-screen md:h-auto">
      <h2 className="text-4xl font-bold ml-4 mb-4 flex items-center">
      <img
              className="w-20 ml-3"
              src={conversation}
              alt="edupng"
              />
              <p>Brand Detailing Time</p>
      </h2>
      <div className="clinics-table overflow-y-auto custom-scrollbar flex-1 md:max-h-[500px]">


        <SamplesPrecuredTable activeItem={activeItem} />
      </div>
    </div>
  );
}
