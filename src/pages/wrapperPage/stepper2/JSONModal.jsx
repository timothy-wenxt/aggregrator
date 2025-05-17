import React from 'react';
import { Modal, Button } from 'antd';
import JsonView from 'react18-json-view';
import 'react18-json-view/src/style.css';

const JSONModal = ({ open, handleClose, JSONData }) => {
    return (
        <Modal
            title="Details"
            open={open}
            onCancel={handleClose}
            width="50%" // Sets the modal width to 80% of the viewport
            style={{ top: 20 }} // Positions the modal 20px from the top
            bodyStyle={{
                maxHeight: '75vh', // Limits the modal body height to 80% of the viewport height
                overflowY: 'auto', // Enables vertical scrolling within the modal body
            }}
            footer={[
                <Button key="close" onClick={handleClose}>
                    Close
                </Button>,
            ]}
        >
            <JsonView src={JSONData} enableClipboard={false}/>
        </Modal>
    );
};

export default JSONModal;
