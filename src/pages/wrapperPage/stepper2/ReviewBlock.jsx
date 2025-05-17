import React from 'react';
import AccordionBlock from '../../../components/accordionBlock/AccordionBlock';
import { consentMain } from '../../wrapperPage/constants';


const ReviewBlock = ({ concentData }) => {

    const handleAccordionChange = (newCheckedState) => {
        console.log('Current checked state:', newCheckedState);
    };


    return (
        <>
            <h2 className="review-title">Review the information you will share</h2>

            <AccordionBlock
                data={concentData}
                accordionData={consentMain}
                onChange={handleAccordionChange}
                checkboxes={true}
            />
        </>
    );
};

export default ReviewBlock;