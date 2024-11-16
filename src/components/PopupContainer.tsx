'use client';

import React, { useState } from 'react';
import Popup from './Popup';
import AdBlockerPopup from './AddBlockerPopup';

const PopupContainer = () => {
    const [isAdBlockerVisible, setIsAdBlockerVisible] = useState(true); // Initially show AdBlockerPopup
    const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup for IDM steps, initially hidden

    const handleAdBlockerClose = () => {
        setIsAdBlockerVisible(false); // Close AdBlockerPopup

        // Set a 2-second delay before showing the next popup
        setTimeout(() => {
            setIsPopupVisible(true); // Show Popup for IDM steps after 2 seconds
        }, 2000);
    };

    return (
        <div className="App">
            {/* AdBlockerPopup will show first */}
            {isAdBlockerVisible && <AdBlockerPopup onClose={handleAdBlockerClose} />}

            {/* After AdBlockerPopup is closed, Popup will appear after a 2-second delay */}
            {isPopupVisible && <Popup />}
        </div>
    );
};

export default PopupContainer;
