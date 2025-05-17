import React from 'react'
import RevCard from '../../../components/revCard/RevCard'
import SingleAccordion from '../../../components/singleAccordion/SingleAccordion'
import { accordionDataAuthorize, accordionDataSharePolicy, accordionDataSharePolicyPayment, LFIName, tradingName } from '../constants'
import AccordionBlock from '../../../components/accordionBlock/AccordionBlock'
import { CalendarDays } from 'lucide-react'
import CancelButton from '../../../components/cancelButton/CancelButton'
import AITareqButton from '../../../components/AITareqButton/AITareqButton'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { setStepperIndex } from '../../../globalStore/slices/stepperSlice'

const PolConsent = ({ setCurrentStep }) => {
    const dispatch = useDispatch();
    const formattedDate = moment().format('DD/MM/YYYY');
    const handleAccordionChange = (newCheckedState) => {
        console.log('Current checked state:', newCheckedState);
    };

    return (
        <div className='pol-review'>
            <div className='main_conatiner'>
                <p className='review-title'>Share your policy(s)</p>

                <p className='sub-text'>For you to use this service ,{tradingName} need to access information from your insurance policy accounts</p>
                <div className='mt-4'>
                    <SingleAccordion />
                </div>
            </div>
            <div className='mt-5'>
                <RevCard title='Insurance Type' value='Motor Insurance' />
            </div>
            <div className='mt-5'>
                <RevCard title='Insurance Provider' value={LFIName} />
            </div>
            <div className='consent_box'>
                <h2 className="review-title">Review the information you will share</h2>

                <AccordionBlock
                    accordionData={accordionDataSharePolicy}
                    onChange={handleAccordionChange}
                    checkboxes={true}
                />

                <p className="review-title-acc">Additional information you can share</p>

                <AccordionBlock
                    accordionData={accordionDataSharePolicyPayment}
                    onChange={handleAccordionChange}
                    checkboxes={true}
                />
            </div>
            <div className='date_block'>
                <div className='flex items-center'>
                    <CalendarDays className='icon_style' />
                    <p className='text-style'>You are sharing your data only for today</p>
                </div>
                <p className='text-style-sub'>{formattedDate}</p>
            </div>
            <div className='btn_container_s2'>
                <div className='main-btns'>
                    <CancelButton onClick={() => setCurrentStep(2)} />
                    <AITareqButton onClick={() => dispatch(setStepperIndex(1))} />
                </div>
                <p className='footer_text'>Continue to
                    <span> {LFIName} </span>
                    to share your insurance policy information under these terms</p>
            </div>
        </div>
    )
}

export default PolConsent