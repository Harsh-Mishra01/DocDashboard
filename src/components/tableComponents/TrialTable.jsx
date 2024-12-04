import "../../styles/EducationTable.css"
import trialgif from "../../../public/images/trials.gif"

const TrialTable = () => {
  const data = [
    {
      trialpublictitle: "Efficacy and Safety of Lorundrostat in Subjects with Uncontrolled and Resistant Hypertension",
      trialphase: "Unknown",
      trialstatus: "Active",
      trialstartdate: "07/02/2019",
      trialenddate: " 07/02/2026",
      trialinduction: "Hepatocellular Carcinoma",
      trialcoinvestigators: "Unknown",
      traillink: "https://clinicaltrials.gov/studyNCT06153693",
    },
    {
      trialpublictitle: "Efficacy and Safety of Lorundrostat in Subjects with Uncontrolled and Resistant Hypertension",
      trialphase: "Phase2",
      trialstatus: "Active",
      trialstartdate: "06/02/2019",
      trialenddate: "28/01/2029",
      trialinuction: "Previously Treated Non-Small Cell Lung Cancer",
      trialcoinvestigators: "Unknown",
      traillink: "https://clinicaltrials.gov/studyNCT04759586",
    },
    
  ];

  return (
    <>
      <div className="flex cw shadow-lg">
        <div className="min-w-[200px] text-center">
          <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tl-md">
          Trial Public Title
          </p>
          <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.trialpublictitle}
                  </p>
                );
              })}
            </div>
        </div>
        <div className="flex w-[1000] overflow-x-scroll custom-scrollbar">
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Trial Phase
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.trialphase}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Trial Status
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.trialstatus}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Trial Start Date
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.trialstartdate}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Trial End date
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.trialenddate}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center">
            Trial Indication
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.trialinduction}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[180px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tr-md">
            Trial co-investigators
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.trialcoinvestigators}
                  </p>
                );
              })}
            </div>
          </div>

          <div >
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tr-md">
            Trial Link
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.traillink}
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

export default TrialTable;
