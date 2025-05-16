import { combineReducers } from 'redux';
import IdSlices from '../slices/IdSlices';
import ConsentRevokeSlice from '../slices/conscentSlice';
import StepperSlice from '../slices/stepperSlice';

const rootReducer = combineReducers({
    id: IdSlices,
    consentRevoke: ConsentRevokeSlice,
    stepper: StepperSlice
});

export default rootReducer;
