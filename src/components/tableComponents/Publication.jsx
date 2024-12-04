import "../../styles/EducationTable.css"
import publication from "../../../public/images/publication.gif";
import { Link } from "react-router-dom";

const PublicationsTable = () => {
  const data = [
    {
      journal: "Journal",
      publicationtypes: "Journal Article",
      publishedtitle: "The Journal of the Association of Physicians of India",
      publicationdate: "1/Jan/2024",
      induction: "Heart Failure",
      coauthors: "Washington",
      publicationlink : "https://pubmed.ncbi.nlm.nih.gov/38736076",
    },
    {
      journal: "Journal",
      publicationtypes: "Journal Article",
      publishedtitle: "The Journal of the Association of Physicians of India",
      publicationdate: "1/Dec/2023",
      induction: "Heart Failure",
      coauthors: "",
      publicationlink : "https://pubmed.ncbi.nlm.nih.gov/38736057",
    },
    {
      journal: "Journal",
      publicationtypes: "Journal Article",
      publishedtitle: "European cardiology",
      publicationdate: "1/Feb/2022",
      induction: "Transcatheter Aortic Valve Replacement",
      coauthors: "",
      publicationlink : "https://pubmed.ncbi.nlm.nih.gov/36845217",
    },
  
  ];

  return (
    <>
      
      <div className="flex cw shadow-lg">
        <div className="min-w-[250px] text-center">
          <p className="py-4 px-2 bg-green-600 text-white font-bold text-center rounded-tl-md">
          Journal
          </p>
          <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.journal}
                  </p>
                );
              })}
            </div>
        </div>
        <div className="flex w-[1000px] overflow-x-scroll custom-scrollbar">
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Publication Types

            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.publicationtypes}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Published Title
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.publishedtitle}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Publication Date
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.publicationdate}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Indication
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.induction}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="min-w-[200px]">
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Co authors 
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                  >
                    {item.coauthors}
                  </p>
                );
              })}
            </div>
          </div>
          <div >
            <p className="py-4 px-2 bg-green-600 text-white font-bold text-center ">
            Publication Link 
            </p>
            <div className="even:bg-gray-200 odd:bg-white flex justify-center align-center flex-col">
              {data.map((item, index) => {
                return (
                  <a
                    key={index}
                    className="py-4 text-center h-[70px] even:bg-gray-200 odd:bg-white flex justify-center items-center"
                    href={item.publicationlink}
                  >
                    {item.publicationlink}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicationsTable;
