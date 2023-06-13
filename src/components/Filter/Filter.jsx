import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <TextField
      id="outlined-controlled"
      type="text"
      placeholder="Find contacts by name"
      name="filter"
      value={filter}
      onChange={handleChangeFilter}
    />
  );
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
