import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AITareqButton({ onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${isHovered ? 'shadow-lg scale-105' : 'shadow-md'
                }`}
            style={{
                background: 'linear-gradient(90deg, #00C8AF 0%, #00A1BD 25%, #0076CD 50%, #002E6F 75%, #000000 100%)',
                minWidth: '200px',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="mr-2 flex items-center justify-center w-6 h-6 bg-white rounded-full">
                <span className="text-cyan-600 font-bold text-lg">Q</span>
            </span>
            <span>Proceed using AITareq</span>
            <ArrowRight className="ml-2 w-4 h-4" />
        </button>
    );
}