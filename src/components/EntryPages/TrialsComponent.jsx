import React from "react";
import trialgif from "../../../public/images/trials.gif"


import TrialTable from "../tableComponents/Trialtable";

export default function TrialsComponent() {
    return (
        <>
            <div className="bg-white flex flex-col shadow-2xl border-1 border-slate-200 rounded-lg p-4 m-4  h-screen md:h-auto">

                <h2 className="text-4xl font-bold ml-4 flex items-center">
                    <img
                        className="w-[80px] ml-2"
                        src={trialgif}
                        alt="edupng"
                        />
                        <p>Trials</p>
                </h2>
                <div className="clinics-table overflow-y-auto custom-scrollbar flex-1 md:max-h-[500px]">

                    <TrialTable></TrialTable>

                </div>
            </div>

        </>
    )
}