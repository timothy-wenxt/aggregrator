import React from 'react'
import PolicyCardConsent from '../../components/policyCardConsent/policyCardConsent';
import CancelButton from '../../components/cancelButton/CancelButton';
import { useNavigate } from 'react-router-dom';
import './Consent.scss'

const policies = [
    {
        id: 1,
        policyNumber: '2011356',
        phoneNumber: '1900 8988 5456',
        expiryDate: '02/11/2019'
    },
    {
        id: 2,
        policyNumber: '2022471',
        phoneNumber: '1900 8988 1234',
        expiryDate: '15/03/2020'
    },
    {
        id: 3,
        policyNumber: '2033592',
        phoneNumber: '1900 8988 6789',
        expiryDate: '24/06/2020'
    }
];

const Consent = () => {
    const navigate = useNavigate();
    return (
        <div className='consent_wrapper'>
            <p className='title-plan'>Policy List</p>

            <div className="card-structure-policy-list">
                {policies.map(policy => (
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