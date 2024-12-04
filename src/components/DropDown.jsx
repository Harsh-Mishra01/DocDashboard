import { useState } from "react";

const Dropdown = ({setBargraphData,setPiechartData}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const initialPiechartData = [
    { name: 'Potential', value: 85, color: '#07A241' }, // Tailwind's green-500
    { name: 'RCPA', value: 15, color: '#A7F3D0' }, // Tailwind's green-200
  ];

  const initialBargraphData = [
    { month: 'Jan', value: 8000 },
    { month: 'Feb', value: 7000 },
    { month: 'Mar', value: 6000 },
    { month: 'Apr', value: 7000 },
    { month: 'May', value: 5000 },
    { month: 'Jun', value: 6000 },
    { month: 'Jul', value: 7000 },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(option);

    // Update piechartData and bargraphData based on the selected option
    switch (option) {
      case "toncat":
        setPiechartData([
          { name: 'Potential', value: 75, color: '#07A241' },
          { name: 'RCPA', value: 25, color: '#A7F3D0' },
        ]);
        setBargraphData([
          { month: 'Jan', value: 9000 },
          { month: 'Feb', value: 2200 },
          { month: 'Mar', value: 7500 },
          { month: 'Apr', value: 3320 },
          { month: 'May', value: 6800 },
          { month: 'Jun', value: 700 },
          { month: 'Jul', value: 750 },
        ]);
        break;
      case "genpat":
        setPiechartData([
          { name: 'Potential', value: 65, color: '#07A241' },
          { name: 'RCPA', value: 35, color: '#A7F3D0' },
        ]);
        setBargraphData([
          { month: 'Jan', value: 2700 },
          { month: 'Feb', value: 7050 },
          { month: 'Mar', value: 6350 },
          { month: 'Apr', value: 3680 },
          { month: 'May', value: 1690 },
          { month: 'Jun', value: 7420 },
          { month: 'Jul', value: 6740 },
        ]);
        break;
      case "x":
        setPiechartData([
          { name: 'Potential', value: 55, color: '#07A241' },
          { name: 'RCPA', value: 45, color: '#A7F3D0' },
        ]);
        setBargraphData([
          { month: 'Jan', value: 6220 },
          { month: 'Feb', value: 1640 },
          { month: 'Mar', value: 2680 },
          { month: 'Apr', value: 4700 },
          { month: 'May', value: 6570 },
          { month: 'Jun', value: 1690 },
          { month: 'Jul', value: 3710 },
        ]);
        break;
      case "y":
        setPiechartData([
          { name: 'Potential', value: 45, color: '#07A241' },
          { name: 'RCPA', value: 55, color: '#A7F3D0' },
        ]);
        setBargraphData([
          { month: 'Jan', value: 6400 },
          { month: 'Feb', value: 6600 },
          { month: 'Mar', value: 6300 },
          { month: 'Apr', value: 6000 },
          { month: 'May', value: 6500 },
          { month: 'Jun', value: 6700 },
          { month: 'Jul', value: 6800 },
        ]);
        break;
      case "a":
        setPiechartData([
          { name: 'Potential', value: 35, color: '#07A241' },
          { name: 'RCPA', value: 65, color: '#A7F3D0' },
        ]);
        setBargraphData([
          { month: 'Jan', value: 5000 },
          { month: 'Feb', value: 5200 },
          { month: 'Mar', value: 5300 },
          { month: 'Apr', value: 5500 },
          { month: 'May', value: 5700 },
          { month: 'Jun', value: 5900 },
          { month: 'Jul', value: 6000 },
        ]);
        break;
      case "b":
        setPiechartData([
          { name: 'Potential', value: 25, color: '#07A241' },
          { name: 'RCPA', value: 75, color: '#A7F3D0' },
        ]);
        setBargraphData([
          { month: 'Jan', value: 4000 },
          { month: 'Feb', value: 4500 },
          { month: 'Mar', value: 4200 },
          { month: 'Apr', value: 4300 },
          { month: 'May', value: 4400 },
          { month: 'Jun', value: 4600 },
          { month: 'Jul', value: 4700 },
        ]);
        break;
      default:
        setPiechartData(initialPiechartData);
        setBargraphData(initialBargraphData);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="options-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : "Select an Brand Name"}
          <svg
            className="-mr-1 ml-2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1">
            {["toncat", "genpat", "x", "y", "a", "b"].map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
