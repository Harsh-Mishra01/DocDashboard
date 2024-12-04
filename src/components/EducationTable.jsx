// import "../styles/EducationTable.css"

// const EducationTable = () => {
//   const data = [
//     {
//       institutionName: "American College of Cardiology",
//       degree: "FACC",
//       passingYear: "2013",
//       country: "United States",
//       state: "District of Columbia",
//       city: "Washington",
//       city1: "Washington",
//       city2: "Washington",
//     },
//     // Add more data as needed
//   ];

//   return (
//     <>
//       <h2 className="text-2xl font-semibold m-4 flex items-center">
//         <p>Education</p>
//         <img className="w-[80px] ml-2" src="../../public/images/edu.gif" alt="edupng" />
//       </h2>
//       <div className="mx-3 shadow-lg overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-4 px-2 bg-blue-400 text-white font-bold text-center rounded-md">Institution Name</th>
//               <th className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">Degree-Speciality</th>
//               <th className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">Passing Year</th>
//               <th className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">Country</th>
//               <th className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">State</th>
//               <th className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">City</th>
//               <th className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">City1</th>
//               <th className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">City2</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-green-200'}>
//                 <td className="py-4 text-center">{item.institutionName}</td>
//                 <td className="py-4 text-center">{item.degree}</td>
//                 <td className="py-4 text-center">{item.passingYear}</td>
//                 <td className="py-4 text-center">{item.country}</td>
//                 <td className="py-4 text-center">{item.state}</td>
//                 <td className="py-4 text-center">{item.city}</td>
//                 <td className="py-4 text-center">{item.city1}</td>
//                 <td className="py-4 text-center">{item.city2}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default EducationTable;

// const DemoTable = () => {
//   const data = [
//     {
//       institutionName: "American College of Cardiology",
//       degree: "FACC",
//       passingYear: "2013",
//       country: "United States",
//       state: "District of Columbia",
//       city: "Washington",
//       city1: "Washington",
//       city2: "Washington",
//     },
//     {
//       institutionName: "American College of Cardiology",
//       degree: "FACC",
//       passingYear: "2013",
//       country: "United States",
//       state: "District of Columbia",
//       city: "Washington",
//       city1: "Washington",
//       city2: "Washington",
//     },
//     {
//       institutionName: "American College of Cardiology",
//       degree: "FACC",
//       passingYear: "2013",
//       country: "United States",
//       state: "District of Columbia",
//       city: "Washington",
//       city1: "Washington",
//       city2: "Washington",
//     },
//     {
//       institutionName: "American College of Cardiology",
//       degree: "FACC",
//       passingYear: "2013",
//       country: "United States",
//       state: "District of Columbia",
//       city: "Washington",
//       city1: "Washington",
//       city2: "Washington",
//     },
//     {
//       institutionName: "American College of Cardiology",
//       degree: "FACC",
//       passingYear: "2013",
//       country: "United States",
//       state: "District of Columbia",
//       city: "Washington",
//       city1: "Washington",
//       city2: "Washington",
//     },
//     // Add more data as needed
//   ];

//   return (
//     <>
//       <div>
//         Training
//         <div className="red flex">
//           <div>
//             <p>institutionName</p>
//           </div>
//           <div className="flex w-[800px] green overflow-x-scroll">
//             <p className="blue min-w-[200px]">State</p>
//             <p className="blue min-w-[200px]">City</p>
//             <p className="blue min-w-[200px]">Country</p>
//             <p className="blue min-w-[200px]">Passing Year</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//           </div>
//         </div>
//         <div className="flex">
//         <div>
//             <p>institutionName</p>
//           </div>
//           <div className="flex w-[800px] green overflow-x-scroll">
//             <p className="blue min-w-[200px]">State</p>
//             <p className="blue min-w-[200px]">City</p>
//             <p className="blue min-w-[200px]">Country</p>
//             <p className="blue min-w-[200px]">Passing Year</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//             <p className="blue min-w-[200px]">Speciality</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DemoTable;

import "../styles/EducationTable.css";
import edugif from "../../public/images/edu.gif"

const EducationTable = () => {
  const data = [
    {
      institutionName: "American College of Cardiology",
      degree: "FACC",
      passingYear: "2013",
      country: "United States",
      state: "District of Columbia",
      city: "Washington",
      city1: "Washington",
      city2: "Washington",
    },
    {
      institutionName: "European Society of Cardiology",
      degree: "FESC",
      passingYear: "2016",
      country: "France",
      state: "",
      city: "Sophia Antipolis",
      city1: "Sophia Antipolis",
      city2: "Sophia Antipolis",
    },
    {
      institutionName: "LPS Institute Of Cardiology",
      degree: "DM-Cardiology",
      passingYear: "2007",
      country: "India",
      state: "Uttar Pradesh",
      city: "Kanpur",
      city1: "Kanpur",
      city2: "Kanpur",
    },
    {
      institutionName: "Mahatma Gandhi Memorial Medical College",
      degree: "MBBS",
      passingYear: "1996",
      country: "India",
      state: "Jharkhand",
      city: "Jamshedpur",
      city1: "Jamshedpur",
      city2: "Jamshedpur",
    },
    {
      institutionName: "National Board of Examinations in Medical Sciences",
      degree: "DNB",
      passingYear: "2002",
      country: "India",
      state: "New Delhi",
      city: "New Delhi",
      city1: "New Delhi",
      city2: "New Delhi",
    },
    {
      institutionName: "Patna Medical College and Hospital",
      degree: "MD",
      passingYear: "2001",
      country: "India",
      state: "Bihar",
      city: "Patna",
      city1: "Patna",
      city2: "Patna",
    },
    {
      institutionName: "Society for Cardiovascular Angiography & Interventions",
      degree: "FSCAI",
      passingYear: "",
      country: "India",
      state: "",
      city: "",
      city1: "",
      city2: "",
    },
  ];

  return (
    <>
      {/* <h2 className="text-2xl font-semibold mx-2 flex items-center">
        <p>Education</p>
        <img
          className="w-[80px] ml-2"
          src={edugif}
          alt="edupng"
        />
      </h2> */}
      <div className="flex cw shadow-lg ">
        <div className="min-w-[250px] text-center">
          <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tl-md">
            Institution Name
          </p>
          <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex justify-center items-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p>{item.institutionName}</p>
                  </p>
                );
              })}
            </div>
        </div>
        <div className="flex w-[1000px] overflow-x-scroll custom-scrollbar">
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
              Degree-Speciality
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex items-center justify-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p>{item.d}</p>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
              Passing-Year
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex items-center justify-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p>{item.passingYear}</p>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
              Country
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex items-center justify-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p>{item.country}</p>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
              State
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex items-center justify-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p>{item.state}</p>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
              City
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex items-center justify-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p>{item.city}</p>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
              City1
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex items-center justify-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p>{item.city1}</p>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tr-lg">
              City2
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex items-center justify-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p>{item.city2}</p>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationTable;
