import { useState } from 'react';
import { Input, Tabs, Tag, Button } from 'antd';
import { Search, Filter, Info, X } from 'lucide-react';
import TabPanelHeader from '../../components/tabs/TabPanelHeader';
import { connections } from '../wrapperPage/constants';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../globalStore/slices/conscentSlice';
import { useNavigate } from 'react-router-dom';
import './consentNew.scss';

const { TabPane } = Tabs;

const ConsentNew = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [activeTabKey, setActiveTabKey] = useState('1');
    const [searchText, setSearchText] = useState('');
    const [filters, setFilters] = useState(['WeNxt']);

    const handleTabChange = key => {
        setActiveTabKey(key);
    };

    const addSearchFilter = () => {
        if (searchText && !filters.includes(searchText)) {
            setFilters([...filters, searchText]);
            setSearchText('');
        }
    };

    const removeFilter = (filterToRemove) => {
        setFilters(filters.filter(filter => filter !== filterToRemove));
    };

    const clearFilters = () => {
        setFilters([]);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && searchText) {
            addSearchFilter();
        }
    };

    const connectionList = connections.map(connection => (
        <div key={connection.id} className="connection-item">
            <div className="connection-header">
                <div className="connection-name">{connection.name}</div>
                <div className={`connection-status ${connection.status.toLowerCase()}`}>
                    {connection.status}
                </div>
            </div>

            <div className="connection-accounts">
                {connection.accounts} {connection.accounts === 1 ? 'Account' : 'Accounts'} Connected
            </div>

            <div className="connection-details">
                <div className="connection-info">
                    <div className="connection-date">Last Data shared {connection.lastShared}</div>
                    <div className="connection-expiry">Connection Expires {connection.expires}</div>
                </div>
                <div className="connection-actions">
                    <button
                        onClick={() => {
                            navigate('/consentRevoke')
                            dispatch(setProduct(connection))
                        }}
                        className="manage-button">Manage</button>
                </div>
            </div>
        </div >
    ));

    return (
        <div className="consent-new-container">
            <div className="heading-container">
                <h1 className="main-heading">Open Finance connections</h1>
                <p className="sub-heading">These are the service providers you are sharing your data with.</p>
                <div className="instruction-row">
                    <p className="instruction-text">Tap Manage to view more detail or disconnect the service</p>
                    <div className="info-icon">
                        <Info size={24} />
                    </div>
                </div>
            </div>

            <div className="search-filter-row">
                <div className="search-bar">
                    <Input
                        placeholder="Search consent"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        suffix={
                            <Search
                                className="search-icon"
                                size={20}
                                color="#999"
                                onClick={addSearchFilter}
                                style={{ cursor: 'pointer' }}
                            />
                        }
                    />
                </div>

                <div className="filter-button">
                    <Filter size={18} color="#23BCC1" />
                    <span className="filter-text">Filter</span>
                </div>
            </div>

            <div className="filter-section">
                <div className="filter-tags">
                    {filters.map(filter => (
                        <Tag
                            key={filter}
                            className="filter-tag"
                            closeIcon={<X size={14} />}
                            onClose={() => removeFilter(filter)}
                        >
                            {filter}
                        </Tag>
                    ))}

                    {filters.length > 0 && (
                        <Button
                            type="text"
                            className="clear-all-button"
                            onClick={clearFilters}
                        >
                            Clear All
                        </Button>
                    )}
                </div>

                <div className="results-count">Results: 24</div>
            </div>

            <div className="equal-width-tabs">
                <Tabs
                    defaultActiveKey="1"
                    onChange={handleTabChange}
                    className="sticky-tabs"
                >
                    <TabPane tab={<TabPanelHeader name='Current' />} key="1">
                        <div className="connections-list">
                            {connectionList}
                        </div>
                    </TabPane>
                    <TabPane tab={<TabPanelHeader name='History' />} key="2">
                        <div className="connections-list">
                            {connectionList}
                        </div>
                    </TabPane>
                </Tabs>
            </div>

        </div>
    );
};

export default ConsentNew;