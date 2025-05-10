import { useState, useEffect } from 'react';
import { ChevronDown, Calendar, RefreshCw, Grid, List } from 'lucide-react';
import { useSelector } from 'react-redux';
import userImg from '../../assets/2.png'
import infoImg from '../../assets/3.png'
import payImg from '../../assets/4.png'
import { accordionDataConsent, dateInfoListConsent, updatesListConsent } from '../wrapperPage/constants';
import { useNavigate } from 'react-router-dom';
import './ConsentRevoke.scss';

const ConsentRevoke = () => {
  const navigate = useNavigate();
  const product = useSelector(state => state?.consentRevoke?.product);
  const [viewMode, setViewMode] = useState('table');
  const [showUpdates, setShowUpdates] = useState(false);

  const renderIcon = (iconName, size = 20) => {
    switch (iconName) {
      case 'userImg':
        return <img src={userImg} className='img_style' />;
      case 'payImg':
        return <img src={payImg} className='img_style' />;
      case 'infoImg':
        return <img src={infoImg} className='img_style' />;
      case 'calender':
        return <Calendar className='icon' size={18} />;
      case 'refresh':
        return <RefreshCw className='icon' size={18} />;
      default:
        return null;
    }
  };

  // State for accordion and animated list items
  const [accordionState, setAccordionState] = useState({});
  const [visibleItems, setVisibleItems] = useState({});

  // Initialize accordion state
  useEffect(() => {
    const initialAccordionState = {};
    const initialVisibleItems = {};

    accordionDataConsent.forEach(section => {
      initialAccordionState[section.id] = false;
      initialVisibleItems[section.id] = [];
    });

    setAccordionState(initialAccordionState);
    setVisibleItems(initialVisibleItems);
  }, []);

  // Toggle accordion sections
  const toggleAccordion = (section) => {
    setAccordionState(prev => {
      const newState = {
        ...prev,
        [section]: !prev[section]
      };

      // Reset visible items when closed
      if (!newState[section]) {
        setVisibleItems(prev => ({
          ...prev,
          [section]: []
        }));
      }
      // Start animating items when opened
      else {
        animateItems(section);
      }

      return newState;
    });
  };

  // Function to animate items appearing one by one
  const animateItems = (section) => {
    const sectionContent = accordionDataConsent.find(item => item.id === section).content;

    // Reset visible items for this section
    setVisibleItems(prev => ({
      ...prev,
      [section]: []
    }));

    // Add items one by one with delay
    sectionContent.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => ({
          ...prev,
          [section]: [...prev[section], index]
        }));
      }, index * 0); // 150ms delay between each item
    });
  };

  const toggleUpdates = () => {
    // setShowUpdates(!showUpdates);
  };

  return (
    <div className='consent-revoke-box'>
      <div className='consent-header'>
        <div className='trading-name'>
          <h1>{product?.name || "Trading Name"}</h1>
          <span className='status-active'>Active</span>
        </div>
        <p className='last-updated'>Last data shared 30/09/2024 11:45</p>
        <div className='consent-id'>
          <span>Consent ID</span>
          <span className='id-number'>1234......6789</span>
        </div>
      </div>

      <section className='accounts-section'>
        <h2>Your Accounts</h2>

        <div className='account-item'>
          <div className='account-type'>Current Account</div>
          <div className='account-details'>
            <span>IBAN</span>
            <span className='iban-number'>AE07 0331 2345 6789 0123 456</span>
          </div>
        </div>

        <div className='account-item'>
          <div className='account-type'>Savings Account</div>
          <div className='account-details'>
            <span>IBAN</span>
            <span className='iban-number'>AE07 0331 2345 6789 3456 012</span>
          </div>
        </div>

        <div className='account-item'>
          <div className='account-type'>Shared Current Account</div>
          <div className='account-details'>
            <span>IBAN</span>
            <span className='iban-number'>AE07 0331 2345 6789 2323 479</span>
          </div>
        </div>
      </section>

      <section className='data-section'>
        <h2>Data they get</h2>

        {accordionDataConsent.map((section) => (
          <div className='accordion-item' key={section.id}>
            <div
              className={`accordion-header ${accordionState[section.id] ? 'active' : ''}`}
              onClick={() => toggleAccordion(section.id)}
            >
              <div className='header-content'>
                {renderIcon(section.icon)}
                <span>{section.title}</span>
              </div>
              <ChevronDown className={`chevron ${accordionState[section.id] ? 'rotated' : ''}`} />
            </div>
            <div className={`accordion-content ${accordionState[section.id] ? 'open' : ''}`}>
              <ul>
                {section.content.map((item, index) => (
                  <li
                    key={index}
                    className={visibleItems[section.id]?.includes(index) ? 'visible' : 'hidden'}
                  >
                    * {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className='dates-section'>
        <div className='dates-grid'>
          {dateInfoListConsent.map((item) => (
            <div key={item.id} className='date-item'>
              <div className='date-label'>
                {renderIcon(item.icon)}
                <span>{item.label}</span>
              </div>
              <div className='date-value'>{item.value}</div>
            </div>
          ))}
        </div>

        <div className='updates-section'>
          <button className='updates-button' onClick={toggleUpdates}>
            List of Updates
          </button>

          {showUpdates && (
            <div className='updates-container'>
              <div className='view-toggles'>
                <button
                  className={`view-toggle ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={16} />
                </button>
                <button
                  className={`view-toggle ${viewMode === 'table' ? 'active' : ''}`}
                  onClick={() => setViewMode('table')}
                >
                  <List size={16} />
                </button>
              </div>

              {viewMode === 'table' ? (
                <table className='updates-table'>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {updatesListConsent.map((update, index) => (
                      <tr key={index}>
                        <td>{update.date}</td>
                        <td>{update.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className='updates-grid'>
                  {updatesListConsent.map((update, index) => (
                    <div key={index} className='update-card'>
                      <div className='update-date'>{update.date}</div>
                      <div className='update-description'>{update.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <div className='action-section'>
        <button
          onClick={() => navigate('/consentNew')}
          className='stop-sharing-button'>Stop Sharing</button>
      </div>
    </div>
  );
};

export default ConsentRevoke;