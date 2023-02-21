import PropTypes from 'prop-types';

const Section = props => {
  const { title, children } = props;

  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
