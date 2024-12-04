import "../../styles/EducationTable.css"

const VisitDetails = () => {
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
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold m-4 flex items-center">
        <p>Visit Details</p>
      </h2>
      <div className="flex cw mx-3 shadow-lg">
        <div className="min-w-[250px] text-center">
          <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-md">
            Institution Name
          </p>
          <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    {item.institutionName}
                  </p>
                );
              })}
            </div>
        </div>
        <div className="flex w-[1000px] overflow-x-scroll custom-scrollbar">
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              Degree-Speciality
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    {item.passingYear}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              Passing-Year
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    {item.passingYear}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              Country
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    {item.country}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              State
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    {item.state}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              City
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    {item.city}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              City1
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    {item.city1}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              City2
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    {item.city2}
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

export default VisitDetails;
