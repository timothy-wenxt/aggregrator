import React, { useEffect, useState } from 'react';
import Steppper from '../../components/stepper/Stepper';
import Stepper2 from './stepper2/Stepper2';
import LoadingScreen from '../../components/loadingScreen/LoadingScreen';
import './WrapperPage.scss';
import Stepper1 from './stepper1/Stepper1';
import { useSelector } from 'react-redux';

const WrapperPage = () => {
    const stepperIndex = useSelector(state => state?.stepper?.stepperIndex);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoader(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    // if (loader) return <LoadingScreen />;

    return (
        <div className="wrapper-page">
            <Steppper currentStep={stepperIndex} />
            {stepperIndex === 0 && <Stepper1 />}
            {stepperIndex === 1 && <Stepper2 />}
        </div>
    );
};

export default WrapperPage;
