import { combineReducers } from 'redux';
import IdSlices from '../slices/IdSlices';
import ConsentRevokeSlice from '../slices/conscentSlice';

const rootReducer = combineReducers({
    id: IdSlices,
    consentRevoke: ConsentRevokeSlice
});

export default rootReducer;
