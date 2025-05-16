import React, { useState } from 'react'
import { Input, Select } from 'antd'
import { Search } from 'lucide-react'
import InsuranceProviderSelector from '../../../components/InsuranceProviderSelector/InsuranceProviderSelector'
import AITareqButton from '../../../components/AITareqButton/AITareqButton'
import CustomRadioButtons from '../../../components/customRadioButtons/CustomRadioButtons'
import { insuranceProviders, insuranceType, quoteOptions, quotePurpose } from '../constants'

const labelRender = props => {
    const { label, value } = props;
    if (label) {
        return value;
    }
    return <span>No option match</span>;
};

const PolChoose = ({ setCurrentStep }) => {
    const [quoteOptionValue, setQuoteOptionValue] = useState(1);
    const [purposeValue, setPurposeValue] = useState(1);

    const onSearch = (value) => {
        console.log('Search input:', value);
    };
    return (
        <>
            <div className="insurance-quote">
                {/* <div className="info-icon">
                    <span>1</span>
                </div> */}
                <span className="quote-text">Insurance Quote</span>
            </div>

            <div className='main-ctn'>
                <div>
                    <p className='review-title'>Choose your option</p>
                    <CustomRadioButtons
                        options={quoteOptions}
                        value={quoteOptionValue}
                        name="quote-options"
                        onChange={(val) => setQuoteOptionValue(val)}
                    />
                </div>
                <div className='ins_type'>
                    <p className='review-title'>Insurance Type</p>
                    <p className='type-ins'>Type of Insurance Policy</p>
                    <Select labelRender={labelRender} defaultValue={1} style={{ width: '40%' }} options={insuranceType} />
                </div>
                <div className='mt-5'>
                    <p className='review-title'>Quotation Purpose</p>
                    <CustomRadioButtons
                        options={quotePurpose}
                        value={purposeValue}
                        name="quote-purpose"
                        onChange={(val) => setPurposeValue(val)}
                    />
                </div>
            </div>

            <div className='ins_providere'>
                <p className='review-title'>Select the insurance providers to request quotes from</p>
                <Input
                    placeholder="Enter search text"
                    onPressEnter={(e) => onSearch(e.target.value)}
                    suffix={<Search size={20} color="#1890ff" />}
                    style={{ width: '40%' }}
                />
                <InsuranceProviderSelector selectable={true} options={insuranceProviders} />
            </div>
            <div className='btn_container_s2'>
                <div className='main-btns'>
                    <AITareqButton onClick={() => setCurrentStep(2)} />
                </div>
            </div>
        </>
    )
}

export default PolChoose