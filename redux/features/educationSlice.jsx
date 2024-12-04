import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      institutionName: "American College of Cardiology",
      degree: "FACC",
      passingYear: "2013",
      country: "United States",
      state: "District of Columbia",
      city: "Washington",
      city1: "Washington",
      city2: "Washington",
    },
    {
      institutionName: "European Society of Cardiology",
      degree: "FESC",
      passingYear: "2016",
      country: "France",
      state: "",
      city: "Sophia Antipolis",
      city1: "Sophia Antipolis",
      city2: "Sophia Antipolis",
    },
    {
      institutionName: "LPS Institute Of Cardiology",
      degree: "DM-Cardiology",
      passingYear: "2007",
      country: "India",
      state: "Uttar Pradesh",
      city: "Kanpur",
      city1: "Kanpur",
      city2: "Kanpur",
    },
    {
      institutionName: "Mahatma Gandhi Memorial Medical College",
      degree: "MBBS",
      passingYear: "1996",
      country: "India",
      state: "Jharkhand",
      city: "Jamshedpur",
      city1: "Jamshedpur",
      city2: "Jamshedpur",
    },
    {
      institutionName: "National Board of Examinations in Medical Sciences",
      degree: "DNB",
      passingYear: "2002",
      country: "India",
      state: "New Delhi",
      city: "New Delhi",
      city1: "New Delhi",
      city2: "New Delhi",
    },
    {
      institutionName: "Patna Medical College and Hospital",
      degree: "MD",
      passingYear: "2001",
      country: "India",
      state: "Bihar",
      city: "Patna",
      city1: "Patna",
      city2: "Patna",
    },
    {
      institutionName: "Society for Cardiovascular Angiography & Interventions",
      degree: "FSCAI",
      passingYear: "",
      country: "India",
      state: "",
      city: "",
      city1: "",
      city2: "",
    },
  ],
};

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {},
});

export default educationSlice.reducer;
