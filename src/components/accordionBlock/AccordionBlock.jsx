import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Checkbox } from 'antd';
import revImg from '../../assets/1.png';
import userImg from '../../assets/2.png';
import infoImg from '../../assets/3.png';
import payImg from '../../assets/4.png';
import './AccordionBlock.scss';

const AccordionBlock = ({ accordionData, onChange, checkboxes = false, data = {} }) => {
    const [openMainAccordions, setOpenMainAccordions] = useState({});
    const [openSubAccordions, setOpenSubAccordions] = useState({});
    const [checkedState, setCheckedState] = useState({});

    useEffect(() => {
        const initialCheckedState = {};

        accordionData.forEach(accordion => {
            initialCheckedState[accordion.id] = !!data[accordion.id];

            if (accordion.subAccordions) {
                accordion.subAccordions.forEach(sub => {
                    initialCheckedState[sub.id] = !!data[sub.id];
                });
            }
        });

        setCheckedState(initialCheckedState);
    }, [accordionData]);

    const toggleMainAccordion = (accordionId) => {
        setOpenMainAccordions(prev => ({
            ...prev,
            [accordionId]: !prev[accordionId]
        }));
    };

    const toggleSubAccordion = (accordionId) => {
        setOpenSubAccordions(prev => ({
            ...prev,
            [accordionId]: !prev[accordionId]
        }));
    };

    const handleMainCheckboxChange = (accordionId, checked, subAccordions) => {
        const newCheckedState = { ...checkedState };
        newCheckedState[accordionId] = checked;

        if (subAccordions) {
            subAccordions.forEach(sub => {
                newCheckedState[sub.id] = checked;
            });
        }

        setCheckedState(newCheckedState);
        if (onChange) onChange(newCheckedState);
    };

    const handleSubCheckboxChange = (subId, parentId, checked) => {
        const newCheckedState = { ...checkedState };
        newCheckedState[subId] = checked;

        const parent = accordionData.find(acc => acc.id === parentId);
        if (parent?.subAccordions) {
            const allChecked = parent.subAccordions.every(sub =>
                sub.id === subId ? checked : newCheckedState[sub.id]
            );

            newCheckedState[parentId] = allChecked;
        }

        setCheckedState(newCheckedState);
        if (onChange) onChange(newCheckedState);
    };

    const isIndeterminate = (accordion) => {
        if (!accordion.subAccordions) return false;

        const someChecked = accordion.subAccordions.some(sub => checkedState[sub.id]);
        const allChecked = accordion.subAccordions.every(sub => checkedState[sub.id]);

        return someChecked && !allChecked;
    };

    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'message': return <img src={revImg} className="img_style" alt="message" />;
            case 'user': return <img src={userImg} className="img_style" alt="user" />;
            case 'file': return <img src={revImg} className="img_style" alt="file" />;
            case 'grid': return <img src={infoImg} className="img_style" alt="grid" />;
            case 'creditCard': return <img src={payImg} className="img_style" alt="credit card" />;
            default: return null;
        }
    };

    return (
        <div className="review-block-container">
            {accordionData.map((accordion) => {
                const hasChildren = accordion.subAccordions || accordion.items;

                return (
                    <div key={accordion.id} className="accordion-item">
                        <button
                            onClick={() => hasChildren && toggleMainAccordion(accordion.id)}
                            className="accordion-header"
                        >
                            <div className="header-content">
                                <span className="icon">{renderIcon(accordion.icon)}</span>
                                <span className="title">{accordion.title}</span>
                            </div>
                            <div className="control-section">
                                {checkboxes && (
                                    <Checkbox
                                        className="custom-checkbox"
                                        checked={checkedState[accordion.id]}
                                        indeterminate={isIndeterminate(accordion)}
                                        // onChange={(e) => {
                                        //     e.stopPropagation();
                                        //     handleMainCheckboxChange(accordion.id, e.target.checked, accordion.subAccordions);
                                        // }}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                )}
                                {hasChildren && (
                                    openMainAccordions[accordion.id] ?
                                        <ChevronDown size={20} className="chevron" /> :
                                        <ChevronRight size={20} className="chevron" />
                                )}
                            </div>
                        </button>

                        {openMainAccordions[accordion.id] && accordion.subAccordions && (
                            <div className="sub-accordions">
                                {accordion.subAccordions.map((sub) => (
                                    <div key={sub.id} className="sub-accordion-item">
                                        <button
                                            onClick={() => sub.items?.length > 0 && toggleSubAccordion(sub.id)}
                                            className="sub-accordion-header"
                                        >
                                            <div className="header-content">
                                                <span className="icon">{renderIcon(sub.icon)}</span>
                                                <span className="title">{sub.title}</span>
                                            </div>
                                            <div className="control-section">
                                                {checkboxes && (
                                                    <Checkbox
                                                        className="custom-checkbox"
                                                        checked={checkedState[sub.id]}
                                                        onChange={(e) => {
                                                            e.stopPropagation();
                                                            handleSubCheckboxChange(sub.id, accordion.id, e.target.checked);
                                                        }}
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                )}
                                                {sub.items?.length > 0 && (
                                                    openSubAccordions[sub.id] ?
                                                        <ChevronDown size={18} className="chevron" /> :
                                                        <ChevronRight size={18} className="chevron" />
                                                )}
                                            </div>
                                        </button>

                                        {openSubAccordions[sub.id] && sub.items && (
                                            <div className="sub-accordion-content">
                                                <ul>
                                                    {sub.items.map((item, index) => (
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
                );
            })}
        </div>
    );
};

export default AccordionBlock;
