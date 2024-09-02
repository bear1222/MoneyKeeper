import { MenuItem, Select, TextField, Typography, InputLabel } from '@mui/material';
import React from 'react';


export function PayForm() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Typography
            >
                付款
            </Typography>
            <TextField
            >
                商品名稱
            </TextField>
            <TextField
            >
                金額
            </TextField>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {/* <Select> */}
            {/* <MenuItem value={}></MenuItem> */}
            {/* <MenuItem value={}></MenuItem> */}
            {/* <MenuItem value={}></MenuItem> */}
            {/* <MenuItem value={}></MenuItem> */}
            {/* <MenuItem value={}></MenuItem> */}
            {/* <MenuItem value={}></MenuItem> */}
            {/* <MenuItem value={}></MenuItem> */}
            {/* </Select> */}
        </>
    );
}