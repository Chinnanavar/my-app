import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const CustomModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open modal</button>
            <Modal open={isOpen} onClose={closeModal} center>
                <h2>Simple centered modal</h2>
            </Modal>
        </div>
    );
};

export default CustomModal;