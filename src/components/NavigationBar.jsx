import { useState } from "react";

function NavigationBar() {
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [publicationValue, setPublicationValue] = useState("Publication");

  const handleClick = (item) => {
    setActiveItem(item);
    setDropdownVisible(false); // Close the dropdown when an item is clicked
  };

  const handleDropdownSelect = (value) => {
    setPublicationValue(value);
    handleClick("publication");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="bg-green-600 rounded-2xl p-8 flex justify-between flex-col">
      <div className="flex flex-col gap-4">
        <img
          className="w-48 rounded-full mx-auto mb-4"
          src="../../public/images/dr_sarita_rao.png"
          alt="Dr. Sarita Rao"
        />
        <div className="text-lg font-bold text-white">Dr. Sarita Rao</div>
        <div className="text-sm font-medium text-white">Cardiologist</div>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => handleClick("clinicDetails")}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${
              activeItem === "clinicDetails"
                ? "bg-white text-green-400"
                : "bg-green-500 text-white"
            }`}
          >
            <i className="fas fa-home"></i>
            Clinic Details
          </button>
          <button
            onClick={() => handleClick("education")}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${
              activeItem === "education"
                ? "bg-white text-green-400"
                : "bg-green-500 text-white"
            }`}
          >
            <i className="fas fa-home"></i>
            Education
          </button>
          <button
            onClick={() => handleClick("awards")}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${
              activeItem === "awards"
                ? "bg-white text-green-400"
                : "bg-green-500 text-white"
            }`}
          >
            <i className="fas fa-home"></i>
            Awards & Reco
          </button>
          <button
            onClick={() => handleClick("academic")}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${
              activeItem === "academic"
                ? "bg-white text-green-400"
                : "bg-green-500 text-white"
            }`}
          >
            <i className="fas fa-home"></i>
            Academic Asso
          </button>
          <button
            onClick={() => handleClick("events")}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${
              activeItem === "events"
                ? "bg-white text-green-400"
                : "bg-green-500 text-white"
            }`}
          >
            <i className="fas fa-home"></i>
            Events & Press
          </button>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`flex items-center justify-between gap-2 px-3 py-2 rounded-md transition duration-300 w-full ${
                activeItem === "publication"
                  ? "bg-white text-green-400"
                  : "bg-green-500 text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <i className="fas fa-home"></i>
                {publicationValue}
              </span>
              <i className={`fas fa-chevron-${dropdownVisible ? 'up' : 'down'}`}></i>
            </button>
            {dropdownVisible && (
              <div className="absolute mt-2 w-full rounded-md shadow-lg bg-green-500 ring-1 ring-black ring-opacity-5 text-white z-10">
                <ul className="py-1">
                  <li
                    onClick={() => handleDropdownSelect('Publication')}
                    className="block px-4 py-2 text-sm cursor-pointer hover:bg-green-400"
                  >
                    Publication
                  </li>
                  <li
                    onClick={() => handleDropdownSelect("Trials")}
                    className="block px-4 py-2 text-sm cursor-pointer hover:bg-green-400"
                  >
                    Trials
                  </li>
                  <li
                    onClick={() => handleDropdownSelect("Events")}
                    className="block px-4 py-2 text-sm cursor-pointer hover:bg-green-400"
                  >
                    Events
                  </li>
                  <li
                    onClick={() => handleDropdownSelect("Press")}
                    className="block px-4 py-2 text-sm cursor-pointer hover:bg-green-400"
                  >
                    Press
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavigationBar;
