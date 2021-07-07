import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import locales from './locales';

const Table = (props) => {
  const { lang } = props;
  const locale = locales[lang || 'es_ES'];

  return (
    <MaterialTable localization={locale} {...props} />
  );
};

Table.defaultProps = {
  lang: 'es_ES',
};

Table.propTypes = {
  lang: PropTypes.string,
};

export default Table;
