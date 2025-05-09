import './policyCardConsent.scss';

const PolicyCardConsent = ({ policyNumber, phoneNumber, expiryDate, onClick }) => {
    return (
        <div className="policy-card">
            <div className="policy-card-content">
                <div className="policy-info">
                    <div className="policy-title">Car - {policyNumber}</div>
                    <div className="policy-phone">{phoneNumber}</div>
                </div>
                <div className="policy-expiry">
                    <div className="expiry-label">Policy Expires</div>
                    <div className="expiry-date">{expiryDate}</div>
                </div>
            </div>
            <button
                onClick={onClick}
                className="revoke-button">Revoke</button>
        </div>
    );
};

export default PolicyCardConsent;