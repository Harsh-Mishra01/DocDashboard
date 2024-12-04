import { useSelector } from 'react-redux';
import "../styles/EducationTable.css";

const DemoTable = () => {
  const data = useSelector((state) => state.education.data);

  return (
    <>
      <h2 className="text-2xl font-semibold m-4 flex items-center">
        <p>Education</p>
        <img
          className="w-[80px] ml-2"
          src="../../public/images/edu.gif"
          alt="edupng"
        />
      </h2>
      <div className="flex cw mx-3 shadow-lg">
        <div className="min-w-[250px] text-center">
          <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-md">
            Institution Name
          </p>
          <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
            {data.map((item, index) => (
              <p
                key={index}
                className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
              >
                {item.institutionName}
              </p>
            ))}
          </div>
        </div>
        <div className="flex w-[1000px] overflow-x-scroll custom-scrollbar">
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              Degree-Speciality
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => (
                <p
                  key={index}
                  className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                >
                  {item.degree}
                </p>
              ))}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              Passing-Year
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => (
                <p
                  key={index}
                  className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                >
                  {item.passingYear}
                </p>
              ))}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              Country
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => (
                <p
                  key={index}
                  className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                >
                  {item.country}
                </p>
              ))}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              State
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => (
                <p
                  key={index}
                  className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                >
                  {item.state}
                </p>
              ))}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              City
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => (
                <p
                  key={index}
                  className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                >
                  {item.city}
                </p>
              ))}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              City1
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => (
                <p
                  key={index}
                  className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                >
                  {item.city1}
                </p>
              ))}
            </div>
          </div>
          <div className="min-w-[150px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-sm">
              City2
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => (
                <p
                  key={index}
                  className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white"
                >
                  {item.city2}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoTable
