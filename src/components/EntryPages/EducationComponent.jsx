import React from "react";

import academic from "/images/academic.gif"
import EducationTable from "../EducationTable";

export default function EducationComponent() {
    return (
        <>
            <div className="bg-white flex flex-col shadow-2xl border-1 border-slate-200 rounded-lg p-4 m-4  h-screen md:h-auto">
                <h2 className="text-4xl font-bold ml-4 flex items-center">
                    <img
                        className="w-[80px] ml-2"
                        src={academic}
                        alt="edupng"
                        />
                        <p>Education</p>
                </h2>
                <div className="clinics-table overflow-y-auto custom-scrollbar flex-1 md:max-h-[31rem]">

                     <EducationTable></EducationTable>

                </div>
            </div>

        </>
    )
}