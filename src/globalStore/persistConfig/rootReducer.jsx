import { combineReducers } from 'redux';
import IdSlices from '../slices/IdSlices';
import ConsentRevokeSlice from '../slices/conscentSlice';
import StepperSlice from '../slices/stepperSlice';
import PolDetailsSlice from '../slices/polDetailsSlice';

const rootReducer = combineReducers({
    id: IdSlices,
    consentRevoke: ConsentRevokeSlice,
    stepper: StepperSlice,
    polDetails: PolDetailsSlice
});

export default rootReducer;
