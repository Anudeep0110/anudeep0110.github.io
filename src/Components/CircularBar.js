import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ title , pro }) => {
    const progress = pro
  return (
    <div className="circular-progress-bar">
      <CircularProgressbar
        value={progress}
        text={title}
        strokeWidth={8}
        styles={{
          root: { width: 120 , height: 120 },
          path: { stroke: '#007bff' },
          text: { fill: '#fff', fontSize: '16px' },
        }}
      />
    </div>
  );
};

export default CircularProgressBar;
