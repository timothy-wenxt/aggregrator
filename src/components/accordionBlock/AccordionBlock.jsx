import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import revImg from '../../assets/1.png'
import userImg from '../../assets/2.png'
import infoImg from '../../assets/3.png'
import payImg from '../../assets/4.png'
import './AccordionBlock.scss';

const AccordionBlock = ({ accordionData }) => {
    const [openMainAccordions, setOpenMainAccordions] = useState({});
    const [openSubAccordions, setOpenSubAccordions] = useState({});

    // Toggle main accordion
    const toggleMainAccordion = (accordionId) => {
        setOpenMainAccordions(prev => ({
            ...prev,
            [accordionId]: !prev[accordionId]
        }));
    };

    // Toggle sub-accordion
    const toggleSubAccordion = (accordionId) => {
        setOpenSubAccordions(prev => ({
            ...prev,
            [accordionId]: !prev[accordionId]
        }));
    };

    // Function to render the appropriate icon
    const renderIcon = (iconName, size = 20) => {
        switch (iconName) {
            case 'message':
                return <img src={revImg} className='img_style' />;
            case 'user':
                return <img src={userImg} className='img_style' />;
            case 'file':
                return <img src={revImg} className='img_style' />;
            case 'grid':
                return <img src={infoImg} className='img_style' />;
            case 'creditCard':
                return <img src={payImg} className='img_style' />;
            default:
                return null;
        }
    };

    return (
        <div className="review-block-container">
            {/* <h2 className="review-title">Review the information you will share</h2> */}

            {accordionData.map((accordion) => (
                <div
                    key={accordion.id}
                    className="accordion-item"
                >
                    <button
                        onClick={() => toggleMainAccordion(accordion.id)}
                        className="accordion-header"
                    >
                        <div className="header-content">
                            <span className="icon">{renderIcon(accordion.icon)}</span>
                            <span className="title">{accordion.title}</span>
                        </div>
                        {openMainAccordions[accordion.id] ?
                            <ChevronDown size={20} className="chevron" /> :
                            <ChevronDown size={20} className="chevron" />
                        }
                    </button>

                    {openMainAccordions[accordion.id] && accordion.subAccordions && (
                        <div className="sub-accordions">
                            {accordion.subAccordions.map((subAccordion) => (
                                <div key={subAccordion.id} className="sub-accordion-item">
                                    <button
                                        onClick={() => toggleSubAccordion(subAccordion.id)}
                                        className="sub-accordion-header"
                                    >
                                        <div className="header-content">
                                            <span className="icon">{renderIcon(subAccordion.icon, 18)}</span>
                                            <span className="title">{subAccordion.title}</span>
                                        </div>
                                        {openSubAccordions[subAccordion.id] ?
                                            <ChevronDown size={18} className="chevron" /> :
                                            <ChevronRight size={18} className="chevron" />
                                        }
                                    </button>

                                    {openSubAccordions[subAccordion.id] && (
                                        <div className="sub-accordion-content">
                                            <ul>
                                                {subAccordion.items.map((item, index) => (
                                                    <li key={index}>• {item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {openMainAccordions[accordion.id] && accordion.items && (
                        <div className="accordion-content">
                            <ul>
                                {accordion.items.map((item, index) => (
                                    <li key={index}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AccordionBlock;