/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import { useState } from 'react';
import style from 'styled-components';

export default style.button`
    width: 100%;
    height: 40px;
    background: ${props => props.disabled==true? "#E9E9E9":"#FFFFFF" };
    border: none;
    box-sizing: border-box;
    border-radius: 4px;
    color: ${props => props.disabled==true? "#D1D1D1":"#333" };
    cursor: ${props => props.disabled==true? "no-drop":"pointer" };
`