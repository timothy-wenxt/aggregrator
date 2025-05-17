import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './SingleAccordion.scss';

const SingleAccordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="acc_rev">
            <div
                className="accordion-header"
                onClick={toggleAccordion}
            >
                <p className="review-title-sa">Why we need you to share your data</p>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {isOpen && (
                <div className="accordion-content">
                    <p className="sub-text-sa">
                        We need you to share your data with us for the purpose of requesting policy
                        quotes from your selected insurance Providers
                    </p>
                </div>
            )}
        </div>
    );
};

export default SingleAccordion;
