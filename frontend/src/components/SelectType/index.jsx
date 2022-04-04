import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectType({ value, onChange }) {
  const types = ['MARVEL', 'DC'];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Type</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='heroType'
          value={value}
          label='Type'
          name='heroType'
          onChange={onChange}
        >
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
