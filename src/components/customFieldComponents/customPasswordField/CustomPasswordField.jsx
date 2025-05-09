import React, { useState } from 'react';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

const CustomPasswordField = ({
    placeholder,
    onChange,
    value,
    size = 'large',
    disabled = false,
    isModal = true,
}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const fieldSize = {
        small: { code: '1/3', desc: '2/3', main: '2/5' },
        medium: { code: '1/4', desc: '3/4', main: '3/5' }, // 3/4
        large: { code: '1/4', desc: '3/4', main: 'full' },
    };

    const handleTogglePasswordVisibility = status => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className={`w-${fieldSize[size].main}`}>
            <Input
                placeholder={placeholder}
                disabled={disabled}
                className='customer-select-fields'
                value={value}
                onChange={onChange}
                suffix={
                    passwordVisible ? (
                        <EyeOutlined onClick={() => handleTogglePasswordVisibility(false)} />
                    ) : (
                        <EyeInvisibleOutlined onClick={() => handleTogglePasswordVisibility(true)} />
                    )
                }
                type={passwordVisible ? 'text' : 'password'}
            />

        </div>
    );
};

export default CustomPasswordField;
