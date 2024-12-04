// const VisitFrequency = () => {
//   return (
//     <div className="visit-frequency font-semibold flex justify-between text-indigo-700">
//       <p>Visit Frequency: 3V</p>
//       <p>{"Last Visit Date: 29th Oct '24"}</p>
//       <p>{"Focus Brands : Tonact, Gibtulio"}</p>
//     </div>
//   );
// };

// export default VisitFrequency;

// import sc1 from "../../public/images/sc1.png";
// import sc2 from "../../public/images/sc2.png";
// import sc3 from "../../public/images/sc3.png";

const VisitFrequency = ({ statsData }) => {
  // const statsData=[
  //   {
  //     url:sc1,
  //     icon: <i className="fa-solid fa-user-group"></i>,
  //     title: 'Visit Frequency',
  //     details: ' 3V',
  //     details2: '2/3 on Jun\'23',
  //     color: 'bg-green-100',
  //   },
  //   {
  //     url:sc3,
  //     icon: <i className="fa-solid fa-calendar-day"></i>,
  //     title: 'Last Visit Date',
  //     details: " 29th Oct '24",
  //     details2: 'Jul 15, 2023',
  //     // color: 'bg-green-100',
  //     color: 'bg-cyan-100',
  //   },
  //   {
  //     url:sc2,
  //     icon: <i className="fa-solid fa-stopwatch"></i>,
  //     title: 'Focus Brands',
  //     details: ' Tonact, Gibtulios,Tonact, Gibtulios ',
  //     // color: 'bg-green-100',
  //     color: 'bg-yellow-100',
  //   },
  // ];

  return (
    <div className="flex justify-between gap-4 bg-white rounded-lg shadow-md p-2 border-2 border-slate-200">
      {statsData.map((item, index) => (
        <div
          key={index}
          className={`min-w-[31vh] flex items-center gap-4 p-2 rounded-md shadow ${item.color}`}
        >
          {/* <div className="rounded-full p-3 bg-white shadow-md">
            {item.icon}
          </div> */}
          <div className="rounded-full p-3  bg-white shadow-md">
            <img src={item.url} alt="icon" width={25}/>
          </div>
          <div className="flex items-center w-full">
            <h3 className="font-bold text-base">{item.title}</h3>
            <div className="m-1">:</div>
            <div className="flex text-sm">
              <span>{item.details}</span>
              {/* <span>{item.details2}</span> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisitFrequency;