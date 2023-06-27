import { configureStore } from "@reduxjs/toolkit";
import symptomReducer from './symptomSlice';

export default configureStore({
    reducer: {
        symptom: symptomReducer,
    },
})