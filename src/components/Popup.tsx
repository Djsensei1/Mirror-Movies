'use client';

import { siteConfig } from '@/configs/site';
// src/components/Popup.tsx
import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Check if the user has visited before by checking localStorage
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsVisible(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const steps = [
    {
      title: 'Step 1: Download Internet Download Manager (IDM)',
      content: (
        <>
          <p className="mb-4">
            To get started with downloading videos from {siteConfig.name}, you
            need to install Internet Download Manager (IDM). Follow these steps:
          </p>
          <ul className="mb-6 ml-5 list-disc">
            <li>
              Go to the official IDM website:{' '}
              <a
                href="https://www.internetdownloadmanager.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-500">
                https://www.internetdownloadmanager.com
              </a>
            </li>
            <li>Click on the "Download" button to get the IDM installer.</li>
            <li>
              Once downloaded, run the installer and follow the on-screen
              instructions to complete the installation.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Step 2: Install IDM',
      content: (
        <>
          <p className="mb-4">
            After downloading IDM, follow these steps to install it on your
            computer:
          </p>
          <ul className="mb-6 ml-5 list-disc">
            <li>Run the IDM installer.</li>
            <li>
              Follow the instructions to install the program. You may need to
              agree to the license terms and choose installation preferences.
            </li>
            <li>
              Once installed, open IDM to configure it for use with your
              browser.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Step 3: Configure IDM for Browser Integration',
      content: (
        <>
          <p className="mb-4">
            IDM needs to be integrated with your browser to automatically detect
            video downloads. Here's how to do it:
          </p>
          <ul className="mb-6 ml-5 list-disc">
            <li>
              Open IDM and go to "Options" by clicking on the gear icon in the
              top right corner.
            </li>
            <li>
              Under the "General" tab, make sure that your browser is listed
              under "Capture downloads from the following browsers".
            </li>
            <li>
              If your browser isn't listed, you can add it manually or make sure
              the browser integration extension is installed in your browser.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: `Step 4: Download Videos from ${siteConfig.name}`,
      content: (
        <>
          <p className="mb-4">
            Now you're ready to download videos! Here’s how to use IDM to
            download videos from {siteConfig.name}:
          </p>
          <ul className="mb-6 ml-5 list-disc">
            <li>
              Visit the video page on {siteConfig.name} where you want to
              download content.
            </li>
            <li>
              As the video starts playing, IDM should automatically detect it. A
              "Download this video" button will appear on the top right of the
              video.
            </li>
            <li>
              Click on the "Download this video" button, and IDM will start
              downloading the video.
            </li>
            <li>You can monitor the progress in the IDM download manager.</li>
          </ul>
          {/* Use iframe to embed the video */}
          <iframe
            className="mb-4 w-full rounded-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KJ1Q4ZNgALQ?si=pFbdso8o6WCOQ_Qv"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </>
      ),
    },
    {
      title: 'Step 5: Enjoy Your Downloaded Videos!',
      content: (
        <>
          <p className="mb-4">
            Once the download is complete, you can enjoy watching the video
            offline anytime. If you need help or more features, explore IDM's
            settings.
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
                Got all of it!
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
