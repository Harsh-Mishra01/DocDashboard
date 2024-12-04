import { ImBullhorn } from "react-icons/im";

const EngagementsNav = ({ activeItem, handleClick }) => {
  return (
    <>
      <div className="mb-5">
        <div className="text-lg font-bold text-white">Dr. Sarita Rao</div>
        <div className="text-sm font-medium text-white">Cardiologist</div>
      </div>
      <nav className="flex flex-col gap-2">
        <button
          onClick={() => handleClick("viewdetails")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "viewdetails"
            ? "bg-white text-green-400"
            : "bg-green-500 text-white"
            }`}
        >
          <i class="fa-solid fa-earth-americas"></i>
          {/* <i class="fa-solid fa-chart-simple"></i> */}
          Visit Details
        </button>
        <button
          onClick={() => handleClick("campaigndetails")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "campaigndetails"
            ? "bg-white text-green-400"
            : "bg-green-500 text-white"
            }`}
        >
          <i class="fa-solid fa-bullhorn"></i>
          Campaign Details
        </button>
        <button
          onClick={() => handleClick("samplesprecured")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "samplesprecured"
            ? "bg-white text-green-400"
            : "bg-green-500 text-white"
            }`}
        >
          <i class="fa-solid fa-vials"></i>
          Samples Procured
        </button>
        <button
          onClick={() => handleClick("branddetialing")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "branddetialing"
            ? "bg-white text-green-400"
            : "bg-green-500 text-white"
            }`}
        >
          <i class="fa-regular fa-comments"></i>
          {/* <i class="fa-solid fa-business-time"></i> */}
          Brand Detialing Time
        </button>
        <button
          onClick={() => handleClick("digitalcampaign")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "digitalcampaign"
            ? "bg-white text-green-400"
            : "bg-green-500 text-white"
            }`}
        >
          {/* <i class="fa-solid fa-computer"></i> */}
          <ImBullhorn />
          Digital Campaign
        </button>

        {/* <div className="relative">
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
                  <i
                    className={`fas fa-chevron-${
                      dropdownVisible ? "up" : "down"
                    }`}
                  ></i>
                </button>
                {dropdownVisible && (
                  <div className="absolute mt-2 w-full rounded-md shadow-lg bg-green-500 ring-1 ring-black ring-opacity-5 text-white z-10">
                    <ul className="py-1">
                      <li
                        onClick={() => handleDropdownSelect("Publication")}
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
              </div> */}
      </nav>
    </>
  )
}

export default EngagementsNav
