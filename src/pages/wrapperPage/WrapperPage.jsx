import React, { useEffect, useState } from 'react';
import Steppper from '../../components/stepper/Stepper';
import Stepper2 from './stepper2/Stepper2';
import LoadingScreen from '../../components/loadingScreen/LoadingScreen';
import './WrapperPage.scss';

const WrapperPage = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoader(false), 1000); // 2 seconds delay
        return () => clearTimeout(timer);
    }, []);

    if (loader) return <LoadingScreen />;

    return (
        <div className="wrapper-page">
            <Steppper currentStep={1} />

            <Stepper2 />
        </div>
    );
};

export default WrapperPage;
