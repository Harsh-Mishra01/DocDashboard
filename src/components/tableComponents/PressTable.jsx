import "../../styles/EducationTable.css"
import press from "../../../public/images/press.gif";

const PressTable = () => {
  const data = [
   
    {
      presspublication: "Business Standard",
      presstitle: "Don't miss a beat: Heart ailments in young women on the rise, shows data",
      pressabstract: "",
      pressdate: "28/Sep/2023",
      pressyear: "2023",
      presscountry: " India",
      presslink: "https://www.business-standard.com/health/heart-disease-rising-in-women-due-to-lifestyle-changes-heightened-stress-123092801051_1.html",
    },
    {
      presspublication: "Deccan Herald",
      presstitle: "Shakti Conclave 2.0 reveals gender disparities in heart disease awareness",
      pressabstract: "",
      pressdate: "4/Feb/2024",
      pressyear: "2024",
      presscountry: "India",
presslink: "https://www.deccanherald.com/india/karnataka/bengaluru/shakti-conclave-2-0-reveals-gender-disparities-in-heart-disease-awareness-2878813",
    },
  
  
  ];

  return (
    <>
      <div className="flex cw  shadow-lg">
        <div className="min-w-[250px] text-center">
          <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tl-md">
          Press Publication
          </p>
          <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.presspublication}
                  </p>
                );
              })}
            </div>
        </div>
        <div className="flex w-[1000px] overflow-x-scroll custom-scrollbar">
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Press Title
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.presstitle}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Press abstract
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.pressabstract}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Press date
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.pressdate}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Press Year
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.pressyear}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Press country
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.presscountry}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tr-md">
            Press Link
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.presslink}
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
export default PressTable;


// import "../../styles/EducationTable.css";
// import press from "../../../public/images/press.gif";

// const PressTable = () => {
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
//       institutionName: "European Society of Cardiology",
//       degree: "FESC",
//       passingYear: "2016",
//       country: "France",
//       state: "",
//       city: "Sophia Antipolis",
//       city1: "Sophia Antipolis",
//       city2: "Sophia Antipolis",
//     },
//     {
//       institutionName: "LPS Institute Of Cardiology",
//       degree: "DM-Cardiology",
//       passingYear: "2007",
//       country: "India",
//       state: "Uttar Pradesh",
//       city: "Kanpur",
//       city1: "Kanpur",
//       city2: "Kanpur",
//     },
//     {
//       institutionName: "Mahatma Gandhi Memorial Medical College",
//       degree: "MBBS",
//       passingYear: "1996",
//       country: "India",
//       state: "Jharkhand",
//       city: "Jamshedpur",
//       city1: "Jamshedpur",
//       city2: "Jamshedpur",
//     },
//     {
//       institutionName: "National Board of Examinations in Medical Sciences",
//       degree: "DNB",
//       passingYear: "2002",
//       country: "India",
//       state: "New Delhi",
//       city: "New Delhi",
//       city1: "New Delhi",
//       city2: "New Delhi",
//     },
//     {
//       institutionName: "Patna Medical College and Hospital",
//       degree: "MD",
//       passingYear: "2001",
//       country: "India",
//       state: "Bihar",
//       city: "Patna",
//       city1: "Patna",
//       city2: "Patna",
//     },
//     {
//       institutionName: "Society for Cardiovascular Angiography & Interventions",
//       degree: "FSCAI",
//       passingYear: "",
//       country: "India",
//       state: "",
//       city: "",
//       city1: "",
//       city2: "",
//     },
//     {
//       institutionName: "National Board of Examinations in Medical Sciences",
//       degree: "DNB",
//       passingYear: "2002",
//       country: "India",
//       state: "New Delhi",
//       city: "New Delhi",
//       city1: "New Delhi",
//       city2: "New Delhi",
//     },
//   ];

//   return (
//     <>
//       <h2 className="text-2xl font-semibold ml-4 flex items-center">
//         <p>Press</p>
//         <img className="w-[60px] ml-2" src={press} alt="edupng" />
//       </h2>
//       <div className="flex shadow-red-500 mx-3 shadow-lg">
//         <div className="w-full">
//           <div className="text-center">
//             <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tl-md">
//               Press Publication
//             </p>
//             <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
//               {data.map((item, index) => {
//                 return (
//                   <p
//                     key={index}
//                     className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
//                   >
//                     {item.institutionName}
//                   </p>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="flex w-[100%]">
//             <div>
//               <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
//                 Press Title
//               </p>
//               <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
//                 {data.map((item, index) => {
//                   return (
//                     <p
//                       key={index}
//                       className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
//                     >
//                       {item.passingYear}
//                     </p>
//                   );
//                 })}
//               </div>
//             </div>
//             <div>
//               <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
//                 Press abstract
//               </p>
//               <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
//                 {data.map((item, index) => {
//                   return (
//                     <p
//                       key={index}
//                       className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
//                     >
//                       {item.passingYear}
//                     </p>
//                   );
//                 })}
//               </div>
//             </div>
//             <div>
//               <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
//                 Press date
//               </p>
//               <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
//                 {data.map((item, index) => {
//                   return (
//                     <p
//                       key={index}
//                       className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
//                     >
//                       {item.country}
//                     </p>
//                   );
//                 })}
//               </div>
//             </div>
//             <div>
//               <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
//                 Press Year
//               </p>
//               <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
//                 {data.map((item, index) => {
//                   return (
//                     <p
//                       key={index}
//                       className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
//                     >
//                       {item.state}
//                     </p>
//                   );
//                 })}
//               </div>
//             </div>
//             <div>
//               <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
//                 Press country
//               </p>
//               <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
//                 {data.map((item, index) => {
//                   return (
//                     <p
//                       key={index}
//                       className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
//                     >
//                       {item.city}
//                     </p>
//                   );
//                 })}
//               </div>
//             </div>
//             <div>
//               <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tr-md">
//                 Press Link
//               </p>
//               <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
//                 {data.map((item, index) => {
//                   return (
//                     <p
//                       key={index}
//                       className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
//                     >
//                       {item.city1}
//                     </p>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PressTable;
