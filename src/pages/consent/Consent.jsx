import React from 'react'
import PolicyCardConsent from '../../components/policyCardConsent/policyCardConsent';
import CancelButton from '../../components/cancelButton/CancelButton';
import { useNavigate } from 'react-router-dom';
import { policiesConsent } from '../wrapperPage/constants';
import './Consent.scss'

const Consent = () => {
    const navigate = useNavigate();
    return (
        <div className='consent_wrapper'>
            <p className='title-plan'>Policy List</p>

            <div className="card-structure-policy-list">
                {policiesConsent.map(policy => (
                    <PolicyCardConsent
                        key={policy.id}
                        policyNumber={policy.policyNumber}
                        phoneNumber={policy.phoneNumber}
                        expiryDate={policy.expiryDate}
                        onClick={() => navigate(`/thankyou`)}
                    />
                ))}
            </div>

            <div className='btn_container_consent'>
                <CancelButton onClick={() => navigate('/planDetails')} />
            </div>
        </div>
    )
}

export default Consent