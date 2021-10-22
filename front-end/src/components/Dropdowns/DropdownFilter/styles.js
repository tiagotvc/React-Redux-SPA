import styled, { css } from 'styled-components';
import { fadeInFromNone } from '../../../styles/Animations/animations';
//import logoAma from './ecommerce.jpg';


export const Container = styled.nav`
    ${({isActive}) => css`
        display:flex;
        vertical-align: top;
        position:relative;
        
        > ul {
            align-items: center;
            justify-content: center;
        
            > li:first-child {
                margin-left: 0;
            }

            > li {
                list-style: none;
                text-align: center;
                color: black;
                font-size: 14px;
                align-items: center;
                text-align: center;
                cursor:pointer;
                width: 200px;
                padding:7px;
                border: 2px solid #dddddd;
                border-radius: 5px;
                letter-spacing: 1px;
                word-spacing: 3px;
                outline: none;
                font-size: 16px;
                color: #555555;
                display: flex;


                &:after {
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 35px;
                    height:43px;
                    background: #5437b7;
                    background: linear-gradient(
                        126deg,
                        rgba(2, 0, 36, 1) 0%,
                        rgba(123, 90, 231, 1) 0%,
                        rgba(88, 54, 206, 1) 100%
                    );
                    
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                    transition: all 0.4s ease;

                }

                > span {
                    margin-left: 10px;
                }

                .icons {
                    width: 25px;
                    height: 25px;
                }

                .arrow-down {
                    margin-left:39px;
                    color:white;
                    position: relative;
                    z-index:2;
                    transition: all 0.4s ease;
                    transform: ${!isActive?'none': 'rotate(-180deg)'};
                }     
                    
                .icon-name {
                    color:black;
                    font-size:14px;
                    font-weight:100;
                    align-items: center;
                    justify-content: center;
                    text-align: left;
                    margin-left: 20px;
                    width: 65px;
               

                }
            }
        }
        `}
 `;


export const SubNav = styled.div`
    ${({isActive}) =>  css`
            border-radius: 5px;
            box-shadow: 0 10px 8px 0 rgba(0,0,0,0.2);
            display:${isActive? 'block' : 'none'};
            position: absolute;
            width:200px;
            top:100%;
            margin-left:-8px;
            margin-top: 5px;
            transition: all 0.4s ease;
            animation: ${fadeInFromNone} 0.5s ease-out;
            background: white;
            
           
           
            > ul {
                display: block;
                height: 160px;
                overflow-y: scroll;
                width:200px;
                
            }
 `}
 `;



export const Grid = styled.li`
    ${() => css`
                list-style: none;
                text-align: center;
                color: black;
                font-size: 14px;
                align-items: center;
                text-align: center;
                cursor:pointer;
                width: 184px;
                padding:7px;
                border: 1px solid white;
                border-radius: 5px;
                letter-spacing: 1px;
                word-spacing: 3px;
                outline: none;
                font-size: 16px;
                color: #555555;
                display: flex;
                background: #dbe3eb;

            > span {
                color:black;
                font-size: 12px;
                font-weight: 100;
                margin-left: 10px;
            }

            &:hover {
                box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
                transform: scale(1.01);
             

                > h4 {
                    color:white;
                }
            }
    `}

`;


 

