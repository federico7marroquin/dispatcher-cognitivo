import React, { useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function TypologiesForm(props) {


    const { typologies, setTypologies, setValidate, optionList, setOptionList } = props;
    const selected = optionList.filter((v, index) => optionList[index])
    const error = optionList.filter((v, index) => typologies[index]).length < 1;

    const handleChange = (index) => {
        const newState = Array.from(optionList);
        newState[index] = !newState[index];
        setValidate(!error);
        setOptionList(newState);
    };

    return (
        <FormControl required error={error} component="fieldset" >
            {/* <FormLabel component="legend">Escoge una o mas Tipologías</FormLabel> */}
            <FormGroup>
                {typologies.map((typ, index) =>
                    <FormControlLabel
                        key={index}
                        control={<Checkbox checked={optionList[index]} onClick={() => handleChange(index)} name={typ} />}
                        label={typ}
                    />
                )}
            </FormGroup>
            {/* <FormHelperText>Debes seleccionar al menos una tipología para continuar</FormHelperText> */}
        </FormControl>

    );
}