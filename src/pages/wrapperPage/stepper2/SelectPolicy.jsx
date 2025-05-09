import { Checkbox } from 'antd'
import { CalendarDays } from 'lucide-react'
import React from 'react'
import { selectPolicy } from '../constants'

const SelectPolicy = () => {
    return (
        <>
            <p className='title_text'>Select Policy(s) to share information with [TPP Trading Name]</p>
            <div className='card_structure'>
                {selectPolicy?.map((item, index) => (
                    <div className='policy_cards' key={index}>
                        <div className='head'>
                            <p className='main-text'>{item?.name} - {item?.number}</p>
                            <Checkbox className="custom-checkbox" />
                        </div>
                        <p className='sub-text'>{item?.polNo}</p>
                        <div className='head'>
                            <p className='sub-text'>Policy Expires</p>
                            <p className='sub-text'>{item?.expires}</p>
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
                <p className='text-style-sub'>30/06/2025</p>
            </div>
        </>
    )
}

export default SelectPolicy