'use client';
import React from 'react';

interface EmbedPlayerProps {
  url: string;
}

function EmbedPlayer(props: EmbedPlayerProps) {
  React.useEffect(() => {
    const iframe = document.querySelector('iframe') as HTMLIFrameElement;
    if (iframe) {
      const iframeUrl = new URL(iframe.src);

      // Get the current domain
      const currentDomain = window.location.hostname;

      // Exclude video sources (check if "vidsrc" is in the URL)
      if (iframeUrl.hostname !== currentDomain && !iframeUrl.href.includes('vidsrc')) {
        alert(`Blocked external content from ${iframeUrl.hostname}`);
        iframe.src = ''; // Block the iframe by clearing its source
      }
    }
  }, [props.url]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#000',
      }}
    >
      <iframe
        src={props.url}
        width="100%"
        height="100%"
        allowFullScreen
        style={{ opacity: 1 }}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default EmbedPlayer;
