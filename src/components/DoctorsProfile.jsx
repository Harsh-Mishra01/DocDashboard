// import { useState } from "react";
import practo from "../../public/images/practo.jpg"
import lybrate from "../../public/images/lybrate.jpg"
import justdial from "../../public/images/justdiallogo.png"
import saritharao from "../../public/images/dr_sarita_rao.png"
import EngagementsNav from "./EngagementsNav";
import DocProfileNav from "./DocProfileNav";

const DoctorProfile = ({ path,activeItem,setActiveItem }) => {
  // const [activeItem, setActiveItem] = useState(null);
  // const [dropdownVisible, setDropdownVisible] = useState(false);
  // const [publicationValue, setPublicationValue] = useState("Publication");

  const handleClick = (item) => {
    setActiveItem(item);
    // setDropdownVisible(false); // Close the dropdown when an item is clicked
  };

  // const handleDropdownSelect = (value) => {
  //   setPublicationValue(value);
  //   handleClick("publication");
  // };

  // const toggleDropdown = () => {
  //   setDropdownVisible(!dropdownVisible);
  // };
  return (
    <div className="bg-green-600 text-white p-3  rounded-2xl w-[270px]   flex flex-col justify-between">
      {console.log("001 ",path)}
      <div>
        <img
          className="w-38 rounded-full mx-auto mb-4"
          src={saritharao}
          alt="Dr. Sarita Rao"
        />
        {path == "/" ? (
          <>
            <div className="flex-block">
              <div>
                <h2 className="text-xl font-bold">Dr. Sarita Rao</h2>
                <p className="mb-2">Cardiologist</p>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td className="text-sm font-bold">UIN</td>
                    <td>:</td>
                    <td> xxxxxxxxx</td>
                  </tr>
                  <tr>
                    <td className="text-sm font-bold">Doctor Name</td>
                    <td>:</td>
                    <td> xxxxxxxxx</td>
                  </tr>
                  <tr>
                    <td className="text-sm font-bold">Cell Phone:</td>
                    <td>:</td>
                    <td> xxxxxxxxx</td>
                  </tr>
                  <tr>
                    <td className="text-sm font-bold">Email ID</td>
                    <td>:</td>
                    <td> xxxxxxxxx</td>
                  </tr>
                  <tr>
                    <td className="text-sm font-bold">Specialty</td>
                    <td>:</td>
                    <td> xxxxxxxxx</td>
                  </tr>
                  {/* <tr>
                    <td className="text-sm font-bold">Sub-Specialty</td>
                    <td>:</td>
                    <td> xxxxxxxxx</td>
                  </tr> */}
                  <tr>
                    <td className="text-sm font-bold">Qualification</td>
                    <td>:</td>
                    <td> xxxxxxxxx</td>
                  </tr>
                  <tr>
                    <td className="text-sm font-bold">Years of Experience</td>
                    <td>:</td>
                    <td> xxxxxxxxx</td>
                  </tr>
                  <tr>
                    <td className="text-sm font-bold">Area</td>
                    <td>:</td>
                    <td> xxxxxxxxx</td>
                  </tr>
                  <tr>
                    <td className="text-sm font-bold">Hobbies</td>
                    <td>:</td>
                    <td> xxxxxxxxx</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : path=="/engagements"? (<EngagementsNav activeItem={activeItem} setActiveItem={setActiveItem} handleClick={handleClick}/>) : (
          <DocProfileNav activeItem={activeItem} setActiveItem={setActiveItem} handleClick={handleClick}/>
        ) }
      </div>
      {path == "/" ? (
        <>
          <div>
          <div>
            <div>
              {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">Digital Presence</button> */}
              <div className="bg-green-600 rounded-md p-2">
                <div className="bg-white text-gray-900 rounded-3xl text-center px-4 py-1 mb-4 font-bold">
                  Digital Presence
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-green-600 bg-white hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:text-green-900"
                  >
                    <i className="fab fa-facebook-f text-xl text-blue-500"></i>
                  </a>
                  <a
                    href="#"
                    className="text-green-600 bg-white hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:text-green-900"
                  >
                    <i className="fab fa-youtube text-xl text-red-500"></i>
                  </a>
                  <a
                    href="#"
                    className="text-green-600 bg-white hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:text-green-900"
                  >
                    <i className="fab fa-linkedin text-xl text-blue-500"></i>
                  </a>
                  <a
                    href="#"
                    className="text-green-600 bg-white hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:text-green-900"
                  >
                    <div className="text-xl bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm flex flex-col justify-between">
            <div>
              {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">Digital Presence</button> */}
              <div className="bg-green-600 rounded-md p-2">
              <div className="bg-white text-gray-900 rounded-3xl text-center px-4 py-2 mb-4 font-bold">
                  Doctors Platform
                </div>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="#"
                    className="text-green-600 bg-white hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:text-green-900"
                  >
                    <i><img src={practo} alt="" className="rounded-full w-8 h-8"/></i>
                  </a>
                  <a
                    href="#"
                    className="text-green-600 bg-white hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:text-green-900"
                  >
                    <i><img src={lybrate} alt="" className="rounded-full"/></i>
                  </a>
                  <a
                    href="#"
                    className="text-green-600 bg-white hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:text-green-900"
                  >
                    <i><img src={justdial} alt="" className="rounded-full w-8 h-8"/></i>
                  </a>
                </div>
              </div>
            </div>
            </div>
            </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DoctorProfile;
