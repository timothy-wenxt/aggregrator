import { Checkbox } from 'antd'
import { CalendarDays } from 'lucide-react'
import React from 'react'

const SelectPolicy = () => {
    return (
        <>
            <p className='title_text'>Select Policy(s) to share information with [TPP Trading Name]</p>
            <div className='card_structure'>
                {Array.from({ length: 2 }).map((_, index) => (
                    <div className='policy_cards' key={index}>
                        <div className='head'>
                            <p className='main-text'>Car - 20 11240</p>
                            <Checkbox className="custom-checkbox" />
                        </div>
                        <p className='sub-text'>090909099009090</p>
                        <div className='head'>
                            <p className='sub-text'>Policy Expires</p>
                            <p className='sub-text'>30/06/2025</p>
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