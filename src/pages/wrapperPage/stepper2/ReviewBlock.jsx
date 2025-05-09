import React from 'react';
import AccordionBlock from '../../../components/accordionBlock/AccordionBlock';
import { accordionDataAuthorize } from '../../wrapperPage/constants';


const ReviewBlock = () => {
    return (
        <>
            <h2 className="review-title">Review the information you will share</h2>

            <AccordionBlock accordionData={accordionDataAuthorize} />
        </>
    );
};

export default ReviewBlock;