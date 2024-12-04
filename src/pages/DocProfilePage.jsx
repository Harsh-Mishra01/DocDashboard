import Navigation from "../components/NavigationButtons";
import DoctorProfile from "../components/DoctorsProfile";
import ClinicDetailsTable from "../components/tableComponents/ClinicDetailsTable"
import { useState } from "react";
// import DemoTable from "../components/DemoTable";
import EducationComponent from "../components/EntryPages/EducationComponent";
import AwardsComponent from "../components/EntryPages/AwardsComponent";
import PublicationComponent from "../components/EntryPages/PublicationComponent";
import TrialsComponent from "../components/EntryPages/TrialsComponent";
import EventComponent from "../components/EntryPages/EventComponent";
import PressComponent from "../components/EntryPages/PressComponent";
import AcademicAssociation from "../components/EntryPages/AcademicAssociation";

const DocProfilePage = () => {
  const [activeItem, setActiveItem] = useState("education");

  const renderTable = () => {
    if (activeItem === "education") {
      return <EducationComponent />;
    } else if (activeItem === "clinicDetails") {
      return <ClinicDetailsTable />;
    }
    else if (activeItem === "academicasso") {
      return <AcademicAssociation></AcademicAssociation>;
    }
    else if (activeItem === "awards") {
      return <AwardsComponent/>;
    }
    else if (activeItem === "Publications") {
      return <PublicationComponent/>;
    }
    else if (activeItem === "Trials") {
      return <TrialsComponent/>;
    }
    else if (activeItem === "Events") {
      return <EventComponent/>;
    }
    else if (activeItem === "Press") {
      return <PressComponent/>;
    }
    else {
      return <EducationComponent />;
    }
  };

  return (
    <div className="grid grid-cols-[1fr_7fr] h-scren">
      <div className="flex mx-2 ">
        <DoctorProfile
          path={window.location.pathname}
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
      </div>
      <div className="md:h-screen h-screen ">
        <div className="m-2">
          <Navigation />
        </div>
        <div className="m-2">
          {renderTable()}
          {/* <DemoTable/> */}
        </div>
      </div>
    </div>
  );
};

export default DocProfilePage;
