import { useState } from 'react';
import PolChoose from './PolChoose';
import PolReview from './PolReview';
import PolConsent from './PolConsent';

const Stepper1 = () => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className='stepper1'>
            {currentStep === 1 && <PolChoose setCurrentStep={setCurrentStep} />}
            {currentStep === 2 && <PolReview setCurrentStep={setCurrentStep} />}
            {currentStep === 3 && <PolConsent setCurrentStep={setCurrentStep} />}
        </div>
    )
}

export default Stepper1