import { configureStore } from '@reduxjs/toolkit';
import educationReducer from './features/educationSlice';

const store = configureStore({
  reducer: {
    education: educationReducer,
  },
});

export default store;
