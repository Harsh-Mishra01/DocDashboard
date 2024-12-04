import "../../styles/EducationTable.css"
import eventgif from "../../../public/images/event.gif";

const EventsTable = () => {
  const data = [
    {
      institutionName: "74TH Annual Conference of the Cardiology Society of India (CSI)",
      degree: "STEMI IN WOMEN- What is the Difference?",
      passingYear: "Conference",
      country: "Speaker",
      state: "8/Dec/2022",
      city: "11/Dec/2022",
      city1: "Cardiology Society of India",
      city2: "Washington",
    },
    {
      institutionName: "2024 Innovations CHIP India Coronary Structural Peripheral",
      degree: "",
      passingYear: "Conference",
      country: "Faculty",
      state: "3/Aug/2024",
      city: "4/Aug/2024",
      city1: "Fortis Escorts Heart Institute",
      city2: "Sophia Antipolis",
    },
   
  ];

  return (
    <>
      
      <div className="flex cw shadow-lg">
        <div className="min-w-[250px] text-center">
          <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tl-md">
          Event Topic
          </p>
          <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.institutionName}
                  </p>
                );
              })}
            </div>
        </div>
        <div className="flex w-[1000px] overflow-x-scroll custom-scrollbar">
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Event Type
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.passingYear}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Role            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.passingYear}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Start date
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.country}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            End Date
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.state}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Event sponsoror
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.city}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Event City 
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.city1}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tr-md">
            Event Link
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
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

export default EventsTable;
