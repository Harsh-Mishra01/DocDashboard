// import { useState } from 'react';

// const doctors = [
//   { id: 1, name: 'Dr. John Doe' },
//   { id: 2, name: 'Dr. Jane Smith' },
//   { id: 3, name: 'Dr. Emily Johnson' },
//   { id: 4, name: 'Dr. Michael Brown' },
//   { id: 5, name: 'Dr. Sarah Davis' },
//   { id: 6, name: 'Dr. James Wilson' },
//   // Add more doctors as needed
// ];

// const SearchComponent = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setQuery(value);

//     if (value.length > 0) {
//       const filteredDoctors = doctors.filter((doctor) =>
//         doctor.name.toLowerCase().includes(value.toLowerCase())
//       );
//       setResults(filteredDoctors);
//     } else {
//       setResults([]);
//     }
//   };

//   const handleResultClick = (name) => {
//     setQuery(name);
//     setResults([]); // Clear the results after selection
//   };

//   return (
//     <div className="flex flex-col items-center w-full">
//       <input
//         type="text"
//         className="w-full p-4 text-lg border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Search Doctor Name"
//         value={query}
//         onChange={handleInputChange}
//       />
//       <ul className="w-full bg-black text-white z-20 rounded-lg shadow-lg">
//         {results.map((doctor) => (
//           <li
//             key={doctor.id}
//             className="p-2 border-b last:border-b-0 cursor-pointer hover:bg-slate-800"
//             onClick={() => handleResultClick(doctor.name)}
//           >
//             {doctor.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchComponent;
// src/SearchComponent.js
const SearchComponent = () => {

  return (
    <div className="flex justify-center w-full">
      <input
        type="text"
        className="w-full h-p-4 p-4 text-lg border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Doctor Name"
      />
    </div>
  );
};

export default SearchComponent;