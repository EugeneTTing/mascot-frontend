import { createSlice } from "@reduxjs/toolkit";

export const symptomSlice = createSlice({
    name: 'symptoms',
    initialState: {
        value: [],
    },
    reducers: {
        append: (state, action) => {
            state.value[action.payload[0]] = action.payload[1];
        }
    }
})

export const { append } = symptomSlice.actions;

export default symptomSlice.reducer;