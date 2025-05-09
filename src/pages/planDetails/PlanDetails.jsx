import React from 'react'
import PlanList from './PlanList'
import AccordionBlock from '../../components/accordionBlock/AccordionBlock'
import { accordionDataPlanDetails } from '../wrapperPage/constants'
import AITareqButton from '../../components/AITareqButton/AITareqButton'
import CancelButton from '../../components/cancelButton/CancelButton'
import { useNavigate } from 'react-router-dom'
import './PlanDetails.scss'

const PlanDetails = () => {
    const navigate = useNavigate();
    return (
        <div className='plan_details_wrapper'>
            <div className='plan_details'>
                <p className='title-plan'>Plan Details</p>

                <PlanList />
                <div className='plan_details_review_block'>
                    <AccordionBlock accordionData={accordionDataPlanDetails} />
                </div>
            </div>
            <div className='btn_container_plan_details'>
                <CancelButton onClick={() => navigate('/wrapperPage')} />
                <AITareqButton
                    onClick={() => navigate('/consent')}
                />
            </div>
        </div>
    )
}

export default PlanDetails