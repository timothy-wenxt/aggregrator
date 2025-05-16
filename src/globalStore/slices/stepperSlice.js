/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stepperIndex: 0,
};

const StepperSlice = createSlice({
    name: 'StepperSlice',
    initialState,
    reducers: {
        setStepperIndex: (state, action) => {
            state.stepperIndex = action.payload;
        },
    },
});

export const {
    setStepperIndex,
} = StepperSlice.actions;

export default StepperSlice.reducer;
