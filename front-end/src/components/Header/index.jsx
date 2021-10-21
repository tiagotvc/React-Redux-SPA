import React from 'react';
import * as Styled from './styles'
import { DatePickers } from '../DatePicker/index'

export const Header = () => {

    return (
        <Styled.Container>
            <DatePickers></DatePickers>
        </Styled.Container>
    )
}