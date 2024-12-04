import React from "react";
import press from "../../../public/images/press.gif";

import PressTable from "../tableComponents/PressTable";

export default function PressComponent() {
    return (
        <>
            <div className="bg-white flex flex-col shadow-2xl border-1 border-slate-200 rounded-lg p-4 m-4  h-screen md:h-auto">
                <h2 className="text-4xl font-bold ml-4 flex items-center">
                    <img
                        className="w-[60px] ml-2"
                        src={press}
                        alt="edupng"
                        />
                        <p>Press</p>
                </h2>
                <div className="clinics-table overflow-y-auto custom-scrollbar flex-1 md:max-h-[500px]">

                    <PressTable></PressTable>

                </div>
            </div>

        </>
    )
}