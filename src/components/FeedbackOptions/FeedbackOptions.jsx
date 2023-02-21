import PropTypes from 'prop-types';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;

  const items = options.map((option, index) => (
    <li key={index}>
      <button className="button" name={option} onClick={onLeaveFeedback}>
        {option}
      </button>
    </li>
  ));

  return (
    <>
      <section>
        <ul
          style={{
            display: 'flex',
            marginLeft: '30px',
            padding: '0',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          {items}
        </ul>
      </section>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
