import React from 'preact-compat';
import PropTypes from 'prop-types';

export default function Price({ amount, currencyCode }) {
  return (
    <span>
      {currencyCode}
      &nbsp;
      {amount}
    </span>
  );
}

Price.propTypes = {
  amount: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
};
