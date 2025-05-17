import React, { useState } from 'react';
import { Checkbox } from 'antd';
import AWNIC from '/AWNIC.png'
import ADNIC from '/ADNIC.png'
import Sukoon from '/sukoon.png'
import MetLife from '/metLife.jpg'
import './InsuranceProviderSelector.scss';

const InsuranceProviderSelector = ({ selectable = true, options = [] }) => {
    const [selectedProviders, setSelectedProviders] = useState([]);

    const handleCheckboxChange = (providerId) => {
        // Handle "All Insurers" special case
        if (providerId === 'all') {
            if (selectedProviders.includes('all')) {
                // If "All" is being unchecked, uncheck everything
                setSelectedProviders([]);
            } else {
                // If "All" is being checked, check everything
                setSelectedProviders(options.map(provider => provider.id));
            }
            return;
        }

        // Handle individual provider selection
        if (selectedProviders.includes(providerId)) {
            // If provider is being unchecked
            const newSelected = selectedProviders.filter(id => id !== providerId);
            // If all other providers are still selected except "all", keep "all" selected
            // Otherwise remove "all" from selection
            if (newSelected.length === options.length - 1 && newSelected.includes('all')) {
                setSelectedProviders(newSelected.filter(id => id !== 'all'));
            } else {
                setSelectedProviders(newSelected);
            }
        } else {
            // If provider is being checked
            const newSelected = [...selectedProviders, providerId];
            // If all providers are now selected, also select "All"
            if (newSelected.length === options.length - 1 && !newSelected.includes('all')) {
                setSelectedProviders([...newSelected, 'all']);
            } else {
                setSelectedProviders(newSelected);
            }
        }
    };

    const renderIcon = (iconName, size = 20) => {
        switch (iconName) {
            case 'AWNIC':
                return <img src={AWNIC} className='provider-logo' />;
            case 'ADNIC':
                return <img src={ADNIC} className='provider-logo' />;
            case 'Sukoon':
                return <img src={Sukoon} className='provider-logo' />;
            case 'MetLife':
                return <img src={MetLife} className='provider-logo' />;
            default:
                return null;
        }
    };

    return (
        <div className="insurance-provider-selector">
            <div className="provider-grid">
                {options.map((provider, index) => (
                    <div className="provider-item" key={provider.id}>
                        <div className="provider-info">
                            {provider.logo && renderIcon(provider.logo)}
                            <span className={index === 0 && provider.name === 'All Insurers'
                                ? 'first_row' : 'provider-name'}>{provider.name}</span>
                        </div>
                        {selectable &&
                            <Checkbox
                                checked={selectedProviders.includes(provider.id)}
                                onChange={() => handleCheckboxChange(provider.id)}
                                className="custom-checkbox"
                            />
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InsuranceProviderSelector;