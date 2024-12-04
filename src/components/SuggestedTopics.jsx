import { useState } from "react";

// Popup component max-w-lg max-h-full
const Popup = ({ topics, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-yellow-200/50 rounded-lg p-7">
      <div className="bg-white rounded-lg p-4 w-[800px] overflow-y-auto scrollbar-thin scrollbar-thumb-green-600">
        <h2 className="text-lg font-semibold text-blue-700 mb-2">
          All Suggested Topics
        </h2>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li
              key={index}
              className="text-sm text-gray-700 border-b border-gray-200 pb-2 last:border-none"
            >
              {topic}
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mt-4 text-red-600 text-sm font-medium hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

const SuggestedTopics = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const topics = [
    "Dr attended conference on Ischemic Heart Disease: Clinical case studies on 5th Jul – Take her feedback",
    "RCPA of Gibutilo has reduced – Check if there are any concerns",
    "Discuss about the mailer - Cardiovascular Revascularization Medicine",
    "She is tech savvy and also into awareness campaigns: Engage her into digital awareness campaigns",
  ];

  return (
    <div className="bg-white shadow-xl border-2 border-slate-200 rounded-lg p-4 lg:max-h-60 overflow-y-auto custom-scrollbar">
      {/* Title */}
      <h2 className="text-lg font-semibold text-blue-700 mb-2">
        Suggested Topic of discussion
      </h2>

      {/* Topics List */}
      <ul className="space-y-2">
        {topics.slice(0, 3).map((topic, index) => (
          <li
            key={index}
            className="text-sm text-gray-700 border-b border-gray-200 pb-2 last:border-none"
          >
            {topic}
          </li>
        ))}
      </ul>

      {/* "See All" Link */}
      <div className="text-right mt-4">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="text-green-600 text-sm font-medium hover:underline"
        >
          See all
        </button>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <Popup topics={topics} onClose={() => setIsPopupOpen(false)} />
      )}
    </div>
  );
};

export default SuggestedTopics;
