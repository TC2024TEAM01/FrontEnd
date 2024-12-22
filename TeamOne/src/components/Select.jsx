import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{ color: 'white' }}>User Info</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Stats"
          sx={{ color: 'White'}}
        >
          <MenuItem value={"stats"} sx={{ color: 'black', backgroundColor: 'white' }}>User Stats</MenuItem>
          <MenuItem value={"checks"} sx={{ color: 'black', backgroundColor: 'white' }}><Link to="/Checks">User check in/out</Link></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}