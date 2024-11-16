'use client';

import React, { useState, useEffect } from 'react';

// Define props for the component, including the onClose prop
interface AdBlockerPopupProps {
    onClose: () => void;
}

const AdBlockerPopup: React.FC<AdBlockerPopupProps> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        // Check if the user has already seen the popup
        const hasVisited = localStorage.getItem('hasVisitedAdBlocker');
        if (!hasVisited) {
            setIsVisible(true);
            localStorage.setItem('hasVisitedAdBlocker', 'true'); // Set to prevent showing again
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        onClose(); // Call the onClose prop when closing the popup
    };

    const steps = [
        {
            title: 'Step 1: Download uBlock Origin Extension',
            content: (
                <>
                    <p className="mb-4">
                        To block ads and improve your browsing experience, we recommend using the uBlock Origin extension for Chrome. Follow these steps:
                    </p>
                    <ul className="mb-6 ml-5 list-disc">
                        <li>
                            Go to the official uBlock Origin page on the Chrome Web Store:{' '}
                            <a
                                href="https://chrome.google.com/webstore/detail/ublock-origin"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-400 hover:text-blue-500"
                            >
                                uBlock Origin - Chrome Web Store
                            </a>
                        </li>
                        <li>Click on the "Add to Chrome" button to install the extension.</li>
                        <li>Click "Add Extension" to confirm the installation.</li>
                    </ul>
                </>
            ),
        },
        {
            title: 'Step 2: Install uBlock Origin',
            content: (
                <>
                    <p className="mb-4">
                        After downloading the uBlock Origin extension, it should automatically install. If it doesn't, follow these steps:
                    </p>
                    <ul className="mb-6 ml-5 list-disc">
                        <li>Once installed, you will see the uBlock Origin icon in the top-right corner of Chrome.</li>
                        <li>Click the icon to configure settings if needed.</li>
                    </ul>
                </>
            ),
        },
        {
            title: 'Step 3: Enable Ad Blocker',
            content: (
                <>
                    <p className="mb-4">
                        After installation, you need to enable the ad blocker:
                    </p>
                    <ul className="mb-6 ml-5 list-disc">
                        <li>Click on the uBlock Origin icon in your browser's toolbar.</li>
                        <li>Ensure the switch is turned on (green) to activate the ad blocker.</li>
                        <li>If you want to block ads on specific websites, adjust the settings accordingly in the extension's options.</li>
                    </ul>
                </>
            ),
        },
        {
            title: 'Step 4: Enjoy an Ad-Free Experience!',
            content: (
                <>
                    <p className="mb-4">
                        You are all set! Now you can browse the web without annoying ads. Enjoy a smoother and faster browsing experience.
                    </p>
                </>
            ),
        },
    ];

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        isVisible && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                <div className="w-full max-w-lg rounded-lg bg-gray-900 p-8 text-white shadow-lg">
                    <h2 className="mb-4 text-2xl font-semibold">
                        {steps[currentStep].title}
                    </h2>
                    {steps[currentStep].content}

                    <div className="mt-6 flex justify-between">
                        {currentStep > 0 && (
                            <button
                                className="rounded-md bg-gray-600 px-6 py-2 text-white transition duration-200 hover:bg-gray-700"
                                onClick={prevStep}>
                                Previous
                            </button>
                        )}
                        {currentStep < steps.length - 1 ? (
                            <button
                                className="rounded-md bg-blue-600 px-6 py-2 text-white transition duration-200 hover:bg-blue-700"
                                onClick={nextStep}>
                                Next
                            </button>
                        ) : (
                            <button
                                className="rounded-md bg-green-600 px-6 py-2 text-white transition duration-200 hover:bg-green-700"
                                onClick={handleClose}>
                                Got it!
                            </button>
                        )}
                    </div>
                </div>
            </div>
        )
    );
};

export default AdBlockerPopup;
