const CampaignItem = ({ number, title }) => {
  return (
    <div className="flex items-center justify-between py-2  border-gray-200 ">
      <div className="flex ">
        {/* <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-blue-500 border-4 border-solid border-blue-500 font-semibold">
          {number}
        </div> */}
        <span className=" font-medium">{title}</span>
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg> */}
    </div>
  );
};

const CampaignList = ({ isProcured }) => {
  const campaigns = [
    { number: '01', title: ' Best of ESC | Euro PCR | Cardio Core 2' },
  ];

  const samples = [
    { number: '01', title: 'Tonact - 15 ; Gibtulio - 0 ; Bisonext - 20' },
    
  ];

  return (
    <div className="p-2 rounded-md shadow-xl border-2 border-slate-200 bg-white w-full h-full">
      <h2 className="text-normal font-semibold text-green-500 mb-2">Current Marketing Campaigns
      </h2>
      {campaigns.map((campaign) => (
        <CampaignItem
          key={campaign.number}
          number={campaign.number} title={campaign.title}
          isProcured={isProcured}
        />
      ))}
       <h2 className="text-normal font-semibold text-green-500 mb-4 mt-4">Samples procured
      </h2>
      {samples.map((sample) => (
        <CampaignItem
          key={sample.number}
          number={sample.number} title={sample.title}
          isProcured={isProcured}
        />
      ))}
    </div>
  );
};

export default CampaignList;