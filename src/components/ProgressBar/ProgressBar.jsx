/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
import './ProgressBar.css';

function ProgressBar(props) {
  return (
    <div
      className="progress-bar"
      style={{
        '--width': props.percent,
        '--bar-color': props.barColor,
        '--bar-width': props.barWidth,
        '--bar-height': props.barHeight,
      }}
    >
    </div>
  );
}

export default ProgressBar;
