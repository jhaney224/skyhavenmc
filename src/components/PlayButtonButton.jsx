import { useState } from 'react';

export default function PlayNowButton() {
  const [copied, setCopied] = useState(false);
  const serverIP = 'play.skyhavenmc.net';

  const handleClick = () => {
    navigator.clipboard.writeText(serverIP).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Hide after 3 seconds
    });
  };

  return (
    <div className="relative inline-block">
      <button onClick={handleClick} className="button">Play Now</button>

      {copied && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-green-500 text-white text-sm px-3 py-1 rounded shadow">
          IP copied to clipboard!
        </div>
      )}
    </div>
  );
}