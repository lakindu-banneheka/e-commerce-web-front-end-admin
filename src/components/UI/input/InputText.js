import { FormControl, InputLabel,Input } from '@mui/material';
import React from 'react';

const InputText = (props) => {
    return (
        <div>
             <FormControl sx={{ m: 1, width: '25ch' }} variant={props.variant} >
                <InputLabel >{props.lable}</InputLabel>
                <Input
                    id={props.InputId}
                    type={props.type}
                    value={props.email}
                    onChange={props.onChange}
                />
            </FormControl>
        </div>
    );
};

export default InputText;