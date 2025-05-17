/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    policyDetails: '',
};

const PolDetailsSlice = createSlice({
    name: 'polDetailsSlice',
    initialState,
    reducers: {
        setPolDetails: (state, action) => {
            state.policyDetails = action.payload;
        },
    },
});

export const {
    setPolDetails,
} = PolDetailsSlice.actions;

export default PolDetailsSlice.reducer;
