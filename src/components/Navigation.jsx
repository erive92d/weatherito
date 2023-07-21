
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export default function Navigation({ handleSearch, handleInput }) {



    return (
        <div className="flex flex-col w-1/2 mx-auto">
            <TextField id="outlined-basic" label="Enter City Name" variant="standard" onChange={handleInput} placeholder="Oakland, CA" />
            <Button variant="contained" onClick={handleSearch}>Search</Button>
        </div>
    )
}