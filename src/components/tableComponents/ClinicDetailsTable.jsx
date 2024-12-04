import HospitalCard from '../HospitalAddress'; // Adjust the import path as necessary
import '../../styles/EducationTable.css'; // Adjust the import path as necessary
import clinic from "../../../public/images/clinicgif.gif";

const ClinicsTable = () => {
  const hospitals = [
    {
      name: "Hegde Hospital",
      location: "Madhapur, Hyderabad",
      rating: 4.5,
      address: "67/68, Vittalrao Nagar, Landmark: Karachi Bakery Lane & Opposite Pizza Hut, Hyderabad",
      directions: "Get Directions",
      images: [
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230579-57836bb378dd0.jpg",
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230579-57836bb3d981a.jpg",
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230580-57836bb439718.jpg",
        "https://images1-fabric.practo.com/practices/1154495/medicover-hospitals-hyderabad-665ef1b6e3fb0.png",
        "https://images1-fabric.practo.com/practices/1154495/medicover-hospitals-hyderabad-665ef223b3827.png",
         "https://images1-fabric.practo.com/practices/1154495/medicover-hospitals-hyderabad-665ef223b3827.png"
      ],
      promoMessage: "Practo takes the first step in Revolutionizing Healthcare Access for Patients, launches Practo Assured. If you are a doctor, read to know more."
    },
    {
      name: "Apollo Hospital",
      location: "Jubilee Hills, Hyderabad",
      rating: 4.8,
      address: "Road No 92, Jubilee Hills, Hyderabad",
      directions: "Get Directions",
      images: [
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230579-57836bb378dd0.jpg",
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230579-57836bb3d981a.jpg",
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230580-57836bb439718.jpg",
        "https://images1-fabric.practo.com/practices/1154495/medicover-hospitals-hyderabad-665ef1b6e3fb0.png",
        "https://images1-fabric.practo.com/practices/1154495/medicover-hospitals-hyderabad-665ef223b3827.png",
      ],
      promoMessage: "Apollo Hospital is committed to providing world-class healthcare. If you are a doctor, read to know more."
    },
    {
      name: "Care Hospital",
      location: "Banjara Hills, Hyderabad",
      rating: 4.7,
      address: "Road No 10, Banjara Hills, Hyderabad",
      directions: "Get Directions",
      images: [
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230579-57836bb378dd0.jpg",
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230579-57836bb3d981a.jpg",
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230580-57836bb439718.jpg",
        "https://images1-fabric.practo.com/practices/1154495/medicover-hospitals-hyderabad-665ef1b6e3fb0.png",
        "https://images1-fabric.practo.com/practices/1154495/medicover-hospitals-hyderabad-665ef223b3827.png",
         "https://images1-fabric.practo.com/practices/1154495/medicover-hospitals-hyderabad-665ef223b3827.png"
      ],
      promoMessage: "Care Hospital ensures top-notch healthcare facilities. If you are a doctor, read to know more."
    },
    {
      name: "Care Hospital",
      location: "Banjara Hills, Hyderabad",
      rating: 4.7,
      address: "Road No 10, Banjara Hills, Hyderabad",
      directions: "Get Directions",
      images: [
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230579-57836bb378dd0.jpg",
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230579-57836bb3d981a.jpg",
        "https://images1-fabric.practo.com/maxcure-hospitals-hyderabad-1468230580-57836bb439718.jpg",
        "https://images1-fabric.practo.com/practices/1154495/medicover-hospitals-hyderabad-665ef1b6e3fb0.png",
        "https://images1-fabric.practo.com/practices/1154495/medicover-hospitals-hyderabad-665ef223b3827.png",
         "https://images1-fabric.practo.com/practices/1154495/medicover-hospitals-hyderabad-665ef223b3827.png"
      ],
      promoMessage: "Care Hospital ensures top-notch healthcare facilities. If you are a doctor, read to know more."
    }
  ];

  return (
    <div className="bg-white flex flex-col shadow-2xl border-1 border-slate-200 rounded-lg p-4 m-4 h-screen md:h-auto">
    <h2 className="text-4xl font-bold ml-4 flex items-center">
      <img className="w-[80px] ml-2" src={clinic} alt="edupng" />
      <p>Clinics</p>
    </h2>
    <div className="clinics-table space-y-4 overflow-y-auto custom-scrollbar flex-1 md:max-h-[31rem]">
      {hospitals.map((hospital, index) => (
        <HospitalCard
          key={index}
          name={hospital.name}
          location={hospital.location}
          rating={hospital.rating}
          address={hospital.address}
          directions={hospital.directions}
          images={hospital.images}
          promoMessage={hospital.promoMessage}
        />
      ))}
    </div>
  </div>
  
  );
};

export default ClinicsTable;
