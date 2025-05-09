import { useState } from 'react';

const CancelButton = ({ onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onClick={onClick}
            className="relative">
            {/* Gradient border background */}
            <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00C8AF] via-[#0076CD] to-black"
                style={{
                    background: 'linear-gradient(90deg, #00C8AF 0%, #00A1BD 25%, #0076CD 50%, #002E6F 75%, #000000 100%)',
                }}
            ></div>

            {/* Inner white background with padding for border effect */}
            <button
                className={`relative flex items-center justify-center px-6 py-2 rounded-full bg-white font-medium transition-all duration-300 ${isHovered ? 'shadow-lg scale-105' : 'shadow-md'
                    }`}
                style={{
                    margin: '2px',
                    minWidth: 'calc(200px - 4px)', // Account for the 2px margin on all sides
                }}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            >
                <span>Cancel</span>
            </button>
        </div>
    );
};

export default CancelButton;