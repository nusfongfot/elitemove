/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import {
  BiCycling, BiSwim, BiRun, BiWalk,
} from 'react-icons/bi';
import { GiHiking } from 'react-icons/gi';
import ProgressBar from '../ProgressBar/ProgressBar';
import './ActivityAllSummary.css';

function ActivityAllSummary({ data }) {
  console.log(data);
  const selectIcon = (type) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case 'bicycling':
        return <BiCycling className="activity-icon" />;
      case 'hiking':
        return <GiHiking className="activity-icon" />;
      case 'swimming':
        return <BiSwim className="activity-icon" />;
      case 'running':
        return <BiRun className="activity-icon" />;
      case 'walking':
        return <BiWalk className="activity-icon" />;
    }
  };
  return (
    <div className="activity-all-container mt-4">
      {data.map((type) => (
        <div className={`summary-container ${type.type}`}>
          {selectIcon(type.type)}
          <span>{`Total: ${type.count} times`}</span>
          <span className="total-duration-span">{`${(type.duration / 60).toFixed(2)} Hrs`}</span>
          <div className="acitivity-bar">
            <ProgressBar
              className={`${type.type}-bar`}
              percent={type.percent}
              barColor="var(--purple)"
              barWidth="18rem"
              barHeight="0.75rem"
            />
            <span>{`${type.percent}%`}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityAllSummary;
