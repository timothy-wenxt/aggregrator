import React from 'react'
import RevCard from '../../../components/revCard/RevCard'
import { Input } from 'antd'
import { Search } from 'lucide-react'
import InsuranceProviderSelector from '../../../components/InsuranceProviderSelector/InsuranceProviderSelector'
import { insuranceProvidersAccess } from '../constants'
import CancelButton from '../../../components/cancelButton/CancelButton'
import AITareqButton from '../../../components/AITareqButton/AITareqButton'

const PolReview = ({ setCurrentStep }) => {
    const onSearch = (value) => {
        console.log('Search input:', value);
    };

    return (
        <div className='pol-review'>
            <div className='main_conatiner'>
                <p className='review-title'>Share your policy(s)</p>

                <p className='sub-text'>For you to use this service ,[TPP TRADING NAME] need to access information from your insurance policy accounts</p>

                <div className='mt-8'>
                    <p className='review-title-sub'>Why we need you to share your data</p>

                    <p className='sub-text'>We need you to share your data with us for the purpose of requesting policy quotes from your selected insurance Providers</p>
                </div>
            </div>
            <div className='mt-5'>
                <RevCard title='Insurance Type' value='Motor Insurance' />
            </div>

            <div className='ins_providere'>
                <p className='review-title'>Select the insurance providers your are giving us access to</p>
                <Input
                    placeholder="Enter search text"
                    onPressEnter={(e) => onSearch(e.target.value)}
                    suffix={<Search size={20} color="#1890ff" />}
                    style={{ width: '40%' }}
                />
                <InsuranceProviderSelector selectable={false} options={insuranceProvidersAccess} />
            </div>
            <div className='btn_container_s2'>
                <div className='main-btns'>
                    <CancelButton onClick={() => setCurrentStep(1)} />
                    <AITareqButton onClick={() => setCurrentStep(3)} />
                </div>
            </div>
        </div>
    )
}

export default PolReview