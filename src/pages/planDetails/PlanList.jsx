import React from 'react'

const PlanList = () => {
    return (
        <div className="details_container">
            <div className="header">
                <div className="selected_lfi">[SELECTED LFI]</div>
                <div className="premium_info">
                    <div className="premium_label">Total Premium</div>
                    <div className="premium_value">AED 735</div>
                </div>
            </div>

            <div className='main_section'>

                <div className="liability_section">
                    <div className="section_title">Third Party Liability</div>

                    <div className="detail_row">
                        <div className="detail_label">Excess Amount</div>
                        <div className="detail_value">AED 0</div>
                    </div>

                    <div className="detail_row">
                        <div className="detail_label">Own Damage Cover</div>
                        <div className="detail_value">X</div>
                    </div>

                    <div className="detail_row">
                        <div className="detail_label">Third Party Limit Up to</div>
                        <div className="detail_value">AED 2,000,000</div>
                    </div>
                </div>

                <div className="additional_section">
                    <div className="section_title">Additional Cover</div>

                    <div className="detail_row">
                        <div className="detail_label">Personal Accident Driver</div>
                        <div className="detail_value">X</div>
                    </div>

                    <div className="detail_row">
                        <div className="detail_label">Roadside Assistance</div>
                        <div className="detail_value">X</div>
                    </div>

                    <div className="detail_row">
                        <div className="detail_label">Personal Accident Passenger</div>
                        <div className="detail_value">X</div>
                    </div>

                    <div className="detail_row">
                        <div className="detail_label">Agency Repair</div>
                        <div className="detail_value">X</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanList