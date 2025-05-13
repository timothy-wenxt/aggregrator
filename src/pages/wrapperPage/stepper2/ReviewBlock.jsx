import React from 'react';
import AccordionBlock from '../../../components/accordionBlock/AccordionBlock';
import { accordionDataAuthorize } from '../../wrapperPage/constants';


const ReviewBlock = () => {

    const handleAccordionChange = (newCheckedState) => {
        console.log('Current checked state:', newCheckedState);
    };


    return (
        <>
            <h2 className="review-title">Review the information you will share</h2>

            <AccordionBlock
                accordionData={accordionDataAuthorize}
                onChange={handleAccordionChange}
                checkboxes={true}
            />
        </>
    );
};

export default ReviewBlock;