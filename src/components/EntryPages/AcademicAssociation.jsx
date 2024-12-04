import React from "react";

import edugif from "/images/edu.gif"
import AcademicAssociationTable from "../tableComponents/AcademicAssociationTable";

export default function AcademicAssociation() {
    return (
        <>
            <div className="bg-white flex flex-col shadow-2xl border-1 border-slate-200 rounded-lg p-4 m-4  h-screen md:h-auto">
                <h2 className="text-4xl font-bold ml-4 flex items-center">
                    <img
                        className="w-[80px] ml-2"
                        src={edugif}
                        alt="edupng"
                        />
                        <p>Academic Association</p>
                </h2>
                <div className="clinics-table overflow-y-auto justify-center custom-scrollbar flex-1 md:max-h-[500px] ">

                    {/* <EducationTable></EducationTable> */}
                    <AcademicAssociationTable/>
                    

                </div>
            </div>

        </>
    )
}