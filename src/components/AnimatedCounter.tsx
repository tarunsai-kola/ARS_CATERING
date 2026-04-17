import React, { useEffect, useState } from 'react';

const parseValue = (val: string) => {
  // Parse values like '2000+' to number 2000
  const num = parseInt(val.replace(/[^0-9]/g, ''), 10);
  return isNaN(num) ? 0 : num;
};

const AnimatedCounter: React.FC<{ value: string; className?: string }> = ({ value, className }) => {
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    const target = parseValue(value);
    const duration = 1200;
    const startTime = performance.now();

    const frame = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      setDisplay(current === target ? `${target}${value.includes('+') ? '+' : ''}` : `${current}`);
      if (progress < 1) requestAnimationFrame(frame);
      else setDisplay(`${target}${value.includes('+') ? '+' : ''}`);
    };

    requestAnimationFrame(frame);
  }, [value]);

  return <div className={className}>{display}</div>;
};

export default AnimatedCounter;
