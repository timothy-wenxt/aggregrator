import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Checkbox } from 'antd';
import revImg from '../../assets/1.png';
import userImg from '../../assets/2.png';
import infoImg from '../../assets/3.png';
import payImg from '../../assets/4.png';
import './AccordionBlock.scss';

const AccordionBlock = ({ accordionData, onChange, checkboxes = false }) => {
    const [openMainAccordions, setOpenMainAccordions] = useState({});
    const [openSubAccordions, setOpenSubAccordions] = useState({});
    const [checkedState, setCheckedState] = useState({});

    // Initialize the checked state based on accordion data
    useEffect(() => {
        const initialCheckedState = {};

        accordionData.forEach(accordion => {
            initialCheckedState[accordion.id] = false;

            if (accordion.subAccordions) {
                accordion.subAccordions.forEach(subAccordion => {
                    initialCheckedState[subAccordion.id] = false;
                });
            }
        });

        setCheckedState(initialCheckedState);
    }, [accordionData]);

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

    // Handle checkbox change for main accordions
    const handleMainCheckboxChange = (accordionId, checked, subAccordions) => {
        const newCheckedState = { ...checkedState };
        newCheckedState[accordionId] = checked;

        // If this accordion has sub-accordions, update their state too
        if (subAccordions) {
            subAccordions.forEach(subAccordion => {
                newCheckedState[subAccordion.id] = checked;
            });
        }

        setCheckedState(newCheckedState);

        // Call the onChange callback with updated state
        if (onChange) {
            onChange(newCheckedState);
        }
    };

    // Handle checkbox change for sub-accordions
    const handleSubCheckboxChange = (subAccordionId, parentAccordionId, checked) => {
        const newCheckedState = { ...checkedState };
        newCheckedState[subAccordionId] = checked;

        // Find the parent accordion and its sub-accordions
        const parentAccordion = accordionData.find(acc => acc.id === parentAccordionId);

        if (parentAccordion && parentAccordion.subAccordions) {
            // Check if all sub-accordions are checked
            const allChecked = parentAccordion.subAccordions.every(sub =>
                sub.id === subAccordionId ? checked : newCheckedState[sub.id]
            );

            // Check if some sub-accordions are checked
            const someChecked = parentAccordion.subAccordions.some(sub =>
                sub.id === subAccordionId ? checked : newCheckedState[sub.id]
            );

            // Update parent accordion state based on children states
            newCheckedState[parentAccordionId] = allChecked;

            // The indeterminate state is handled in the rendering, not in the state
        }

        setCheckedState(newCheckedState);

        // Call the onChange callback with updated state
        if (onChange) {
            onChange(newCheckedState);
        }
    };

    // Function to check if a parent accordion should be in indeterminate state
    const isIndeterminate = (accordion) => {
        if (!accordion.subAccordions) return false;

        const someChecked = accordion.subAccordions.some(sub => checkedState[sub.id]);
        const allChecked = accordion.subAccordions.every(sub => checkedState[sub.id]);

        return someChecked && !allChecked;
    };

    // Function to render the appropriate icon
    const renderIcon = (iconName, size = 20) => {
        switch (iconName) {
            case 'message':
                return <img src={revImg} className='img_style' alt="message" />;
            case 'user':
                return <img src={userImg} className='img_style' alt="user" />;
            case 'file':
                return <img src={revImg} className='img_style' alt="file" />;
            case 'grid':
                return <img src={infoImg} className='img_style' alt="grid" />;
            case 'creditCard':
                return <img src={payImg} className='img_style' alt="credit card" />;
            default:
                return null;
        }
    };

    return (
        <div className="review-block-container">
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
                        <div className="control-section">
                            {checkboxes &&
                                <Checkbox
                                    className="custom-checkbox"
                                    checked={checkedState[accordion.id]}
                                    indeterminate={isIndeterminate(accordion)}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        handleMainCheckboxChange(accordion.id, e.target.checked, accordion.subAccordions);
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            }
                            {openMainAccordions[accordion.id] ?
                                <ChevronDown size={20} className="chevron" /> :
                                <ChevronDown size={20} className="chevron" />
                            }
                        </div>
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
                                        <div className="control-section">
                                            {checkboxes &&
                                                <Checkbox
                                                    className="custom-checkbox"
                                                    checked={checkedState[subAccordion.id]}
                                                    onChange={(e) => {
                                                        e.stopPropagation();
                                                        handleSubCheckboxChange(subAccordion.id, accordion.id, e.target.checked);
                                                    }}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            }
                                            {openSubAccordions[subAccordion.id] ?
                                                <ChevronDown size={18} className="chevron" /> :
                                                <ChevronRight size={18} className="chevron" />
                                            }
                                        </div>
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