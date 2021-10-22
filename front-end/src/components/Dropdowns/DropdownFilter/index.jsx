
import * as Styled from './styles';
import P from 'prop-types';
import React , {useState} from  'react';
import { TiHome } from 'react-icons/ti'
import { MdBrightnessAuto } from 'react-icons/md'
import { GiThreeFriends } from 'react-icons/gi'
import { GiLifeSupport } from 'react-icons/gi'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { useEffect } from 'react';


export const DropdownSelect = () => {
    // hooks 
    // hook to active the dropdown
    const [activeDropDown, setActiveDropdown] = useState(false);
    // hook to control when option was changed inside li component
    const [optionControl, setOptionControl] = useState('');

    // function to change the all values inside activeOption object;
    const OptionClick = (id) => {
        options.map((option) => {
            if(option.id == id){
                setActiveOption(option);
                setOptionControl(option.icon_name);
            }
        })
    }

    // function to open and close dropdown when called
    const onClick = ()  => setActiveDropdown(!activeDropDown);

    // mock of options just used before call icons from database
    const options = [
        {
            icon_name: 'Casinha',
            icon: <TiHome className="icons"/>,
            id:1
        },
        {
            icon_name: 'Autismo',
            icon: <MdBrightnessAuto className="icons"/>,
            id:2  
        },
        {
            icon_name: 'Amigos',
            icon: <GiThreeFriends className="icons"/>,
            id:3
        },
        {
            icon_name: 'Coração',
            icon: <GiLifeSupport className="icons"/>,
            id:4 
        }
    ]

    // hook to set the value off activated option
    const [activeOption, setActiveOption] = useState(
        {
            id:options[0].id,
            icon:options[0].icon,
            icon_name:options[0].icon_name
        }
    );


    /** useEffect to close the dropdown when 
     *  the user select a diferent option 
     *  then the current option;
     **/
    useEffect(() => {
        if(optionControl !== ''){
             onClick();
        }  
    },[optionControl])

  

    return (
        <>
    <Styled.Container isActive={activeDropDown? true : false} >
        <ul>
            <li key={activeOption.id} >
                {activeOption.icon}
                <span>-</span>
                <span className="icon-name">{activeOption.icon_name}</span>
                <BsFillArrowDownCircleFill onClick={() => onClick()} className="arrow-down"/>
                <Styled.SubNav isActive={activeDropDown? true : false}>
                    <ul>
                        {options.map((option) => (
                            <Styled.Grid key={option.id} onClick={() => OptionClick(option.id)}>
                            {option.icon} 
                            <span>{option.icon_name}</span>
                            </Styled.Grid> 
                        ))} 
                    </ul>
                </Styled.SubNav>
            </li>
        </ul>
    </Styled.Container>
    </>
  );
};

DropdownSelect.propTypes = {
    isActive: P.bool,
};
