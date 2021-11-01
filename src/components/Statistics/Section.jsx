import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Section(props) {
  const { title, children } = props;
  return (
    <section className={s.section}>
      {title && <h2 className={s.h2}>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
