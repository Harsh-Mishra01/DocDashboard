import React, { useState } from "react";

const CampaignDetailsAccordian = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index); // Close if already open
  };

  return (
    <div className="w-full  ">
      {items.map((item, index) => (
        <div key={index} className={`border border-gray-300 rounded-2xl mb-2 shadow-2xl `}>
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between items-center p-4 text-left rounded-2xl font-semibold ${
               index === 0 ? "bg-green-500 text-white" : "bg-white text-gray-900 "
            }`}
          >
            {item.title}
            <span className="ml-2">
              {openIndex === index ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-down"></i>
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-900 text-sm">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CampaignDetailsAccordian;
