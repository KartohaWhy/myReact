import React from 'react';
import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export const AppDrawer = (props) => {
    return (
        <Drawer
        open = {props.open}
        docked={false}
       >
        <MenuList>
        <MenuItem > Главная </MenuItem>
        <MenuItem > Фото </MenuItem>
        </MenuList>
        </Drawer> 
    )
}