/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stepperIndex: 0,
};

const IdSlices = createSlice({
    name: 'IdSlices',
    initialState,
    reducers: {
        setStepperIndex: (state, action) => {
            state.stepperIndex = action.payload;
        },
    },
});

export const {
    stepperIndex,
} = IdSlices.actions;

export default IdSlices.reducer;
