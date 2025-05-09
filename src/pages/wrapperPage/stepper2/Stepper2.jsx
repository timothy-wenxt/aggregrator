import React from 'react'
import SelectPolicy from './SelectPolicy'
import ReviewBlock from './ReviewBlock'
import { CalendarDays } from 'lucide-react'
import AITareqButton from '../../../components/AITareqButton/AITareqButton'
import CancelButton from '../../../components/cancelButton/CancelButton'
import { useNavigate } from 'react-router-dom'
import { customCol } from '../constants'

const Stepper2 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='select_policy'>
                <SelectPolicy />
            </div>
            <div className='select_policy'>
                <ReviewBlock />
            </div>
            <div className='date_block'>
                <div className='flex items-center'>
                    <CalendarDays className='icon_style' />
                    <p className='text-style'>You are sharing your data only for today</p>
                </div>
                <p className='text-style-sub'>30/06/2025</p>
            </div>
            <div className='btn_container_s2'>
                <div className='main-btns'>
                    <CancelButton onClick={() => navigate('/login')} />
                    <AITareqButton />
                </div>
                <p className='footer_text'>Continue to
                    <span> {customCol} </span>
                    to share your insurance policy information under these terms</p>
            </div>
        </>
    )
}

export default Stepper2