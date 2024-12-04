import { useEffect, useState } from "react";

export default function SamplesPrecuredTable({ activeItem }) {
    const [headers, setHeaders] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        if (activeItem === "branddetialing") {
            setHeaders(["Product Name",    "Utilization Qty" ,   "Utilization Date"]);
            setRows([
                { brand: "Tonact", data: [ 30, "14-12-23"] },
                { brand: "Tonact", data: [ 30, "14-12-23"] },
                { brand: "Tonact", data: [ 30, "14-12-23",] },
                { brand: "Tonact", data: [ 30, "14-12-23"] },
                { brand: "Tonact", data: [ 30, "14-12-23"] },
            ]);
        } else {
            setHeaders(["Brand", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]);
            setRows([
                { brand: "Tonact", data: [30, 3, 114, 50, 98, 50] },
                { brand: "Gibtulio", data: [30, 3, 50, 45, 67, 34] },
                { brand: "Tonact", data: [45, 2, 50, 67, 345, 234] },
                { brand: "Bisonext", data: [30, 3, 103, 56, 89, 50] },
            ]);
        }
    }, [activeItem]);

    console.log("Active Items my00909:", activeItem)


    return (
        <>
            <div className=" md:m-2 rounded-lg relative">
                
                { activeItem === "samplesprecured" &&
                         <div className="flex justify-end gap-2 m-2  flex-wrap">
                         <div className="h-8 w-full md:w-40 mb-8 flex items-center justify-center text-neutral-600 px-4 py-1 rounded-md shadow  shadow-xl bg-cyan-100 md:h-10">
                           Select Date
                         </div>
                         <div className="h-8 w-full md:w-40 flex items-center justify-center text-neutral-600 px-4 py-1 rounded-md shadow shadow-xl bg-cyan-100 md:h-10">
                           Select Brand
                         </div>
                       </div>
                    }
                <div className="relative overflow-x-auto">
                    <table className="w-full text-lg">
                        <thead className="text-md text-center text-white bg-green-600">
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index} scope="col" className={`px-4 py-4 ${index === 0 ? "rounded-tl-lg" : index === headers.length - 1 ? "rounded-tr-lg" : ""
                                    }`}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="bg-white border-b text-center"
                                >
                                    <th
                                        scope="row"
                                        className="px-4 py-4 font-medium whitespace-nowrap text-center"
                                    >
                                        {row.brand}
                                    </th>
                                    {row.data.map((value, colIndex) => (
                                        <td key={colIndex} className="px-6 py-4">
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
