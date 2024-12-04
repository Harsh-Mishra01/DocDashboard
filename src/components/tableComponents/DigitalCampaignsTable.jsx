import React from "react";
import PopupWithDatepicker from "../../components/PopupWithDatePicker"; // Adjust the path as needed

export default function DigitalCampaignsTable() {
    const headers = ["Campaign Date", "Campaign Name", "E-mail Action", "WhatsApp Action"];

    const rows = [
        {
            date: "15/11/2024",
            name: "Heart Failure Myth",
            emailAction: { value: 57, status: "Open & Clicked" },
            whatsappAction: { read: -20 },
        },
        {
            date: "15/11/2024",
            name: "Heart Failure Myth",
            emailAction: { value: 30, status: "Open & Clicked" },
            whatsappAction: { read: 50 },
        },
    ];

    const handleDateChange = (date) => {
        console.log("Selected date:", date); // Handle the selected date here
    };

    return (
        <div className="md:m-2 rounded-lg relative">
            <PopupWithDatepicker triggerLabel="Month" onDateChange={handleDateChange} />
            <div className="relative overflow-x-auto">
                <table className="w-full text-lg border-collapse">
                    <thead className="text-md text-center text-white bg-green-600">
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    scope="col"
                                    className={`px-4 py-4 ${
                                        index === 0
                                            ? "rounded-tl-lg"
                                            : index === headers.length - 1
                                            ? "rounded-tr-lg"
                                            : ""
                                    }`}
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className={`${
                                    rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"
                                } text-center`}
                            >
                                <td className="px-4 py-4">{row.date}</td>
                                <td className="px-4 py-4">{row.name}</td>
                                <td className="px-4 py-4">
                                    <span>{row.emailAction.status}</span>
                                </td>
                                <td className="px-4 py-4">
                                    <span>Read</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
