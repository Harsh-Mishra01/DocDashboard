import React from "react";
import GraphicalComponent from "../GraphicalComponent";

import visitworld from "../../../public/images/visit-world.gif"



export default function VisitDetails() {




  return (
    <>
      <div className="bg-white flex flex-col shadow-2xl border-1 border-slate-200 rounded-lg p-4 m-4  h-screen md:h-auto">
        <h2 className="text-4xl font-bold ml-4 mb-4 flex items-center">
          <img
            className="w-[80px] ml-2"
            src={visitworld}
            alt="edupng"
            />
            <p>Visit Details</p>
        </h2>
        <div className="clinics-table overflow-y-auto custom-scrollbar flex-1 md:max-h-[500px]">
          <div>

            <div className="h-14 w-full md:w-96 ml-auto mb-8 flex  text-blue-800 items-center justify-center text-neutral-600 px-4 py-1 rounded-md shadow shadow-2xl bg-green-200 md:h-12">
              Other divisions meeting doctor : CVN Stellar
            </div>

          </div>
          <GraphicalComponent />
        </div>
      </div>
    </>
  );
}
