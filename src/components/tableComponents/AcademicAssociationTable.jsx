import "../../styles/EducationTable.css"
import eventgif from "../../../public/images/event.gif";

const AcademicAssociationTable = () => {
  const data = [
    {
      institutionName: "N.I.M.S",
      department: "Neurology",
      position: "Associate Professor",
      city: " ",
      state: "",
      tenuref: "2003",
      tenuret: "2007",
    },
    {
        institutionName: "N.I.M.S",
        department: "Neurology",
        position: "Assistant Professor",
        city: " ",
        state: "",
        tenuref: "1997",
        tenuret: "2003",
      },
   
  ];

  return (
    <>
      
      <div className="flex cw  shadow-lg justify-center">
        <div className="min-w-[250px] text-center">
          <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tl-md">
          Name of Institute
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
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Department
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.department}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Position           </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.position}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            City
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
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            State
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
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Tenure (From)
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.tenuref}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Tenure(To)
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.tenuret}
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

export default AcademicAssociationTable;
