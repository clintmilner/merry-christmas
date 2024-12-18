import { useState, useEffect } from 'react';
import './Snow.css';

const Snow = () => {
  const [tiltX, setTiltX] = useState(0);
  
  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      // gamma is the left-to-right tilt in degrees
      if (event.gamma !== null) {
        // Limit the tilt effect to a reasonable range (-20 to 20 degrees)
        const tilt = Math.max(-20, Math.min(20, event.gamma));
        setTiltX(tilt);
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div className="snowfall">
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 4 + 3;
        return (
          <div 
            key={i} 
            className="snowflake" 
            style={{
              '--tilt': `${tiltX}deg`,
              left: `${Math.random() * 100}vw`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${Math.random() * 4 + 4}s`,
              animationDelay: `${Math.random() * 2}s`
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};

export default Snow; 