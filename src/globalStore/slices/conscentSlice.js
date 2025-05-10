/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: '',
};

const ConsentRevokeSlice = createSlice({
    name: 'consentRevokeSlice',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
    },
});

export const {
    setProduct,
} = ConsentRevokeSlice.actions;

export default ConsentRevokeSlice.reducer;
