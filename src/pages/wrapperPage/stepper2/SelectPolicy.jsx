import React, { useEffect } from 'react';
import { Checkbox } from 'antd';
import { CalendarDays } from 'lucide-react';
import { tradingName } from '../constants';
import moment from 'moment';

const SelectPolicy = ({ polData, selectedPolicy, setSelectedPolicy }) => {
    const formattedDate = moment().format('DD/MM/YYYY');

    const handleCheckboxChange = (policyNumber) => {
        setSelectedPolicy((prevSelected) =>
            prevSelected === policyNumber ? null : policyNumber
        );
    };

    return (
        <>
            <p className='title_text'>
                Select Policy(s) to share information with {tradingName}
            </p>
            <div className='card_structure'>
                {polData?.map((item, index) => (
                    <div className='policy_cards' key={index}>
                        <div className='head'>
                            <p className='main-text'>{item?.VehicleType}</p>
                            <Checkbox
                                className='custom-checkbox'
                                checked={selectedPolicy === item?.PolicyNumber}
                                onChange={() => handleCheckboxChange(item?.PolicyNumber)}
                            />
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
                    <p className='text-style'>This permission will expire on:</p>
                </div>
                <p className='text-style-sub'>{formattedDate}</p>
            </div>
        </>
    );
};

export default SelectPolicy;
