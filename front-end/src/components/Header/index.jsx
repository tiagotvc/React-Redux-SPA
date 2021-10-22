import React from 'react';
import { DatePickers } from '../DatePicker/index'

import * as Global from '../../styles/global-components';
import { DropdownSelect } from '../Dropdowns/DropdownFilter';

export const Header = () => {

    return (
        <Global.Container 
            display={"flex"}
            justify={"space-between"}
            align={"center"}
            padding={"10px"}
            background={"#f5f6fa"}
        >
            <DropdownSelect/>
            <DatePickers/>
        </Global.Container>
    )
}