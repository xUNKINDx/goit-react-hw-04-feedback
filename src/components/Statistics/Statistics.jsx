import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  if (total() === 0) {
    return (
      <>
        <Notification message="There is no feedback"></Notification>
      </>
    );
  }

  return (
    <>
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total()}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage()}%</p>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
