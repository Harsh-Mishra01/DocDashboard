import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Install react-datepicker via npm if not already installed
import "react-datepicker/dist/react-datepicker.css"; // Import default styles for react-datepicker
import { format } from "date-fns"; // To format dates

export default function PopupWithDatepicker({ triggerLabel = "Open Popup", onDateChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onDateChange?.(date); // Call the callback, if provided
        setIsOpen(false); // Close the popup on date select
    };

    return (
        <div className="relative">
            {/* Trigger button */}
            <div
                className="h-8 w-full md:w-40 ml-auto mb-8 flex items-center justify-center text-neutral-600 px-4 py-1 rounded-md shadow shadow-xl bg-cyan-100 md:h-10 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {triggerLabel}
            </div>

            {/* Popup */}
            {isOpen && (
                <div className="absolute top-12 right-0 z-10 w-72 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        inline
                    />
                </div>
            )}
        </div>
    );
}
