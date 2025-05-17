import { useState, useEffect } from "react";
import "./CustomRadioButtons.scss";

export default function CustomRadioButtons({
    options = [],
    value,
    name = "radio-group",
    onChange
}) {
    const [selected, setSelected] = useState(value);

    // Update internal state when external value prop changes
    useEffect(() => {
        if (value !== undefined) {
            setSelected(value);
        }
    }, [value]);

    const handleChange = (newValue) => {
        setSelected(newValue);

        // Notify parent component about the change
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="custom-radio-container">
            {options?.map((option) => (
                <label key={option.value} className="custom-radio-label">
                    <div className="custom-radio">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={selected === option.value}
                            onChange={() => handleChange(option.value)}
                        />
                        <span className="custom-radio-button"></span>
                    </div>
                    <span className="custom-radio-text">{option.label}</span>
                </label>
            ))}
        </div>
    );
}