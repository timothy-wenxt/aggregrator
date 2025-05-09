import React from 'react';
import { Steps } from 'antd';
import './Stepper.scss';

const { Step } = Steps;

const stepperData = [
    { title: 'Consent' },
    { title: 'Authorize' },
    { title: 'Complete' },
];

const Steppper = ({ currentStep = 1 }) => {
    return (
        <Steps
            current={currentStep}
            labelPlacement="vertical"
            responsive={false}
            direction="horizontal"
            progressDot={false}
        >
            {stepperData.map((step, index) => (
                <Step
                    key={index}
                    title={step.title}
                    icon={
                        <div className="custom-step-icon">
                            {index + 1}
                        </div>
                    }
                />
            ))}
        </Steps>
    );
};

export default Steppper;
