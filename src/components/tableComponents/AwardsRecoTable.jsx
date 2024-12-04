import "../../styles/EducationTable.css";
import awards from "../../../public/images/awards.gif";

const AwardsRecoTable = () => {
  const data = [
    {
      awardname: "The First Live TAVI Case By A Woman Cardiologist in SAARC Countries",
      awardedby: " ",
      year: "2021",
      country: "India",
      awardtype: "National",
    },
    {
      awardname: "The First Live TAVI Case By A Woman Cardiologist in SAARC Countries",
      awardedby: " ",
      year: "2021",
      country: "India",
      awardtype: "National",
    },
    {
      awardname: "The First Live TAVI Case By A Woman Cardiologist in SAARC Countries",
      awardedby: " ",
      year: "2021",
      country: "India",
      awardtype: "National",
    },
   
  ];

  return (
    <>
    
      <div className="flex cw shadow-lg ">
        <div className="min-w-[350px] text-center">
          <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tl-md">
          Award Name
          </p>
          <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex justify-center items-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p>{item.awardname}</p>
                  </p>
                );
              })}
            </div>
        </div>
        <div className="flex w-[1000px] overflow-x-scroll custom-scrollbar">
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Awarded by
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex items-center justify-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p> {item.awardedby}</p>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Year
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex items-center justify-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p> {item.year}</p>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[200px]">
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
          <div className="min-w-[250px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
              Type
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 flex items-center justify-center h-[70px] even:bg-gray-200 odd:bg-white"
                  >
                    <p> {item.awardtype}</p>
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

export default AwardsRecoTable;
