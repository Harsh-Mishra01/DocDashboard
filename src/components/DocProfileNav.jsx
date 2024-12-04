const DocProfileNav = ({ activeItem, handleClick }) => {
  return (
    <>
      <div className="mb-5">
        <div className="text-lg font-bold text-white">Dr. Sarita Rao</div>
        <div className="text-sm font-medium text-white">Cardiologist</div>
      </div>
      <nav className="flex flex-col gap-2">
        <button
          onClick={() => handleClick("education")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "education"
              ? "bg-white text-green-400"
              : "bg-green-500 text-white"
            }`}
        >
          <i class="fa-solid fa-book"></i>
          Education
        </button>

        <button
          onClick={() => handleClick("clinicDetails")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "clinicDetails"
              ? "bg-white text-green-400"
              : "bg-green-500 text-white"
            }`}
        >
          <i className="fas fa-clinic-medical"></i>
          {/* <i className="fas fa-plus"></i> */}
          Clinic Details
        </button>


        <button
          onClick={() => handleClick("academicasso")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "academicasso"
              ? "bg-white text-green-400"
              : "bg-green-500 text-white"
            }`}
        >
          <i className="fas fa-graduation-cap"></i>
          {/* <i className="fas fa-plus"></i> */}
          Academic Association
        </button>

        <button
          onClick={() => handleClick("awards")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "awards"
              ? "bg-white text-green-400"
              : "bg-green-500 text-white"
            }`}
        >
          <i className="fas fa-trophy"></i>
          Awards & Records
        </button>
        <button
          onClick={() => handleClick("Publications")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "Publications"
              ? "bg-white text-green-400"
              : "bg-green-500 text-white"
            }`}
        >
          <i className="fas fa-newspaper"></i>
          Publications
        </button>
        <button
          onClick={() => handleClick("Trials")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "Trials"
              ? "bg-white text-green-400"
              : "bg-green-500 text-white"
            }`}
        >
          <i className="fas fa-gavel"></i>
          Trials
        </button>
        <button
          onClick={() => handleClick("Events")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "Events"
              ? "bg-white text-green-400"
              : "bg-green-500 text-white"
            }`}
        >
          <i className="fas fa-calendar-alt"></i>
          Events
        </button>
        <button
          onClick={() => handleClick("Press")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${activeItem === "Press"
              ? "bg-white text-green-400"
              : "bg-green-500 text-white"
            }`}
        >
          <i className="fas fa-print"></i>
          Press
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

export default DocProfileNav
