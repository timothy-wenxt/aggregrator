import React from 'react'
import { Checkbox } from 'antd'
import { CalendarDays } from 'lucide-react'
import { tradingName, selectPolicy } from '../constants'
import moment from 'moment'

const SelectPolicy = ({ polData }) => {
    const formattedDate = moment().format('DD/MM/YYYY');
    return (
        <>
            <p className='title_text'>Select Policy(s) to share information with {tradingName}</p>
            <div className='card_structure'>
                {polData?.map((item, index) => (
                    <div className='policy_cards' key={index}>
                        <div className='head'>
                            <p className='main-text'>{item?.VehicleType}</p>
                            <Checkbox className="custom-checkbox" />
                        </div>
                        <p className='sub-text'>{item?.PolicyNumber}</p>
                        <div className='head'>
                            <p className='sub-text'>Policy Expires</p>
                            <p className='sub-text'>{item?.CoverEndDate}</p>
                        </div>
                    </div>
                ))}
            </div>

            <hr className='divider' />

            <div className='date_block'>
                <div className='flex items-center'>
                    <CalendarDays className='icon_style' />
                    <p className='text-style'>This permission will expires on:</p>
                </div>
                <p className='text-style-sub'>{formattedDate}</p>
            </div>
        </>
    )
}

export default SelectPolicy